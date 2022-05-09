/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';

import {
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  UserResponse,
  LoginCredentials,
  RegisterCredentials,
  AuthUser,
} from '@/modules/auth';
import { storage, cookies } from '@/utils';

import { initReactQueryAuth } from './context';

function handleUserResponse(data: UserResponse) {
  const { accessToken, authUser, refreshToken } = data;
  storage.setUser(authUser || {});
  cookies.setAccess(accessToken);
  cookies.setRefresh(refreshToken);
  return authUser;
}

async function loadUser() {
  const access = cookies.getAccess();
  const user = storage.getUser();

  if (!access || !user) {
    storage.clearUser();
    cookies.clearAccess();
    return null;
  }

  return user;
}

async function loginFn(data: LoginCredentials) {
  const response = await loginWithEmailAndPassword(data);
  const user = handleUserResponse(response);
  return user;
}

async function registerFn(data: RegisterCredentials) {
  const response = await registerWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  const router = useRouter();
  storage.clearUser();
  cookies.clearAccess();
  router.push('/login');
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
  LoaderComponent() {
    return <></>;
  },
};

export const { AuthProvider, useAuth } = initReactQueryAuth<
  AuthUser | null,
  unknown,
  LoginCredentials,
  RegisterCredentials
>(authConfig);
