import type { GetStaticProps, NextPage } from 'next';

import { Login as AuthLogin } from '@/modules/auth';

const Login: NextPage = () => {
  return <AuthLogin />;
};

export const getStaticProps: GetStaticProps = () => {
  return { props: { path: 'login' } };
};

export default Login;
