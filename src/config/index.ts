export const APP_NAME = 'Next Leap 🚀👨‍🚀';

export const BRAND_COLOR = '#135f9b';

export const API_URL = process.env.NEXT_PUBLIC_AUTH_URL as string;
export const MOCK_API_URL = process.env.REACT_APP_MOCK_API_URL as string;

export const ENVIROMENT = process.env.NODE_ENV;
export const MOCK_ENABLED = process.env.NEXT_PUBLIC_API_MOCKING as string;

export const DEFAULT_PUBLIC_PAGE = '/entrar';

export const DEFAULT_PRIVATE_PAGE = '/';

export const ACCESS_TOKEN_ID = 'new_school_access';
export const REFRESH_TOKEN_ID = 'new_school_refresh';
export const USER_INFO_ID = 'new_school_user-info';

export const MSW_DB = 'new_school_msw-db';

export const JWT_ACCESS_SECRET = '123456' as string;
export const JWT_ACCESS_EXPIRES_IN = 10;
export const JWT_REFRESH_SECRET = '123456789' as string;
export const JWT_REFRESH_EXPIRES_IN = 50;

export const IS_CLIENT_SERVER = typeof window !== 'undefined';
