export const APP_NAME = 'Next Leap 🚀👨‍🚀';

export const BRAND_COLOR = '#AA186B';

export const API_URL = process.env.NEXT_PUBLIC_AUTH_URL as string;
export const MOCK_API_URL = process.env.REACT_APP_MOCK_API_URL as string;

export const ENVIROMENT = process.env.NODE_ENV;
export const MOCK_ENABLED = process.env.NEXT_PUBLIC_API_MOCKING as string;

export const DEFAULT_PUBLIC_PAGE = '/entrar';

export const DEFAULT_PRIVATE_PAGE = '/';

export const ACCESS_TOKEN_ID = 'anima_landing_page_access';
export const REFRESH_TOKEN_ID = 'anima_landing_page_refresh';
export const USER_INFO_ID = 'anima_landing_page_user-info';

export const MSW_DB = 'anima_landing_page_msw-db';

export const IS_CLIENT_SERVER = typeof window !== 'undefined';
