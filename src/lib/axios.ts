import axiosInstance, { AxiosError } from 'axios';

import { API_URL } from '@/config';
import { cookies, storage } from '@/utils';

const config = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const unathenticatedInstance = axiosInstance.create(config);
const authenticatedInstance = axiosInstance.create(config);

unathenticatedInstance.interceptors.response.use(
  (response) => response?.data,
  (error: AxiosError) => Promise.reject(error),
);

authenticatedInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error: AxiosError) => {
    if (error.response) {
      if (error.response.status !== 401) {
        return Promise.reject(error);
      }

      return axiosInstance
        .post('/api/refresh_token', {
          refresh_token: cookies.getRefresh(),
        })
        .then((response) => {
          cookies.setRefresh(response.data?.refreshToken);
          if (error.response) {
            return authenticatedInstance(error.response.config);
          }
        })
        .catch((error) => {
          cookies.clearAccess();
          cookies.clearRefresh();
          storage.clearUser();
          return Promise.reject(error);
        });
    }
  },
);

const axiosObject = {
  unauthorized() {
    unathenticatedInstance.defaults.baseURL = API_URL;

    return unathenticatedInstance;
  },
  authorized() {
    authenticatedInstance.defaults.headers.common.Authorization = `Bearer ${cookies.getAccess()}`;

    authenticatedInstance.interceptors.request.use(
      function (config) {
        config.baseURL = API_URL;

        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );

    return authenticatedInstance;
  },
};

export default axiosObject;
