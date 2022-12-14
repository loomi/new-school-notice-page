/* eslint-disable prettier/prettier */
import axiosInstance, { AxiosError } from 'axios';

import { API_URL, IS_CLIENT_SERVER } from '@/config';
import { cookies, nodeCookies, storage } from '@/utils';

const config = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const unathenticatedInstance = axiosInstance.create(config);
const authenticatedInstance = axiosInstance.create(config);

export const mockAPI = (ctx: any) => {
  const host = ctx?.req?.headers?.host;
  const protocol = IS_CLIENT_SERVER && window.location.protocol;
  const hostClient = IS_CLIENT_SERVER && window.location.host;

  const baseUrl =
    host && host.includes('localhost') && !IS_CLIENT_SERVER
      ? `http://${host}/api/`
      : IS_CLIENT_SERVER
      ? `${protocol}//${hostClient}/api/`
      : `https://${host}/api/`;

  return axiosInstance.create({
    baseURL: baseUrl,
  });
};

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
        .post('/auth/refresh-token', {
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
  authorized(ctx?: any) {
    const accessToken = ctx ? nodeCookies(ctx).getAccess() : cookies.getAccess();

    authenticatedInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

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
