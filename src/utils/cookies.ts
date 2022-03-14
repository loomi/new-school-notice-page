import { parseCookies, setCookie, destroyCookie } from 'nookies';

import { ACCESS_TOKEN_ID, REFRESH_TOKEN_ID } from '@/config';

const cookiesObj = parseCookies();
const accessToken = cookiesObj[ACCESS_TOKEN_ID];
const refreshToken = cookiesObj[REFRESH_TOKEN_ID];

export const cookies = {
  getAccess: () => accessToken,
  setAccess: (accessToken: string) => setCookie(undefined, ACCESS_TOKEN_ID, accessToken),
  clearAccess: () => destroyCookie(null, ACCESS_TOKEN_ID),
  getRefresh: () => refreshToken,
  setRefresh: (refreshToken: string) => setCookie(undefined, REFRESH_TOKEN_ID, refreshToken),
  clearRefresh: () => destroyCookie(null, REFRESH_TOKEN_ID),
};
