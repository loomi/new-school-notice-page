/* eslint-disable react-hooks/rules-of-hooks */
import { Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import {
  loginWithEmailAndPassword,
  getUserProfile,
  registerWithEmailAndPassword,
  UserResponse,
  LoginCredentials,
  RegisterCredentials,
  AuthUser,
} from '@/modules/auth';
import { storage, cookies } from '@/utils';

import { initReactQueryAuth } from './context';

function handleUserResponse(data: UserResponse) {
  const { accessToken, user, refreshToken } = data;
  storage.setUser(user);
  cookies.setAccess(accessToken);
  cookies.setRefresh(refreshToken);
  return user;
}

async function loadUser() {
  const user = storage.getUser();
  const access = cookies.getAccess();

  if (!user || !access) {
    storage.clearUser();
    cookies.clearAccess();
    return null;
  }

  if (user) return user;

  if (access) {
    const data = await getUserProfile();
    return data;
  }
}

async function loginFn(data: LoginCredentials) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
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
    return <Spinner size="xl" />;
  },
};

export const { AuthProvider, useAuth } = initReactQueryAuth<
  AuthUser | null,
  unknown,
  LoginCredentials,
  RegisterCredentials
>(authConfig);
