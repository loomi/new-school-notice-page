import type { NextPage, GetStaticProps } from 'next';

import { Register as AuthRegister } from '@/modules/auth';

const Register: NextPage = () => {
  return <AuthRegister />;
};

export const getStaticProps: GetStaticProps = () => {
  return { props: { path: 'register' } };
};

export default Register;
