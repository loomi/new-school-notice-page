import type { NextPage } from 'next';

import { Login as AuthLogin } from '@/modules/auth';

const Login: NextPage = () => {
  return <AuthLogin />;
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await getServerSession(context, { providers: [] });
//   const autenticate = true;
//   if (autenticate)
//     return {
//       props: { teste: session },
//       redirect: { destination: '/Admin', permanent: false },
//     };
//   return {
//     props: {},
//     redirect: { destination: '/Auth', permanent: false },
//   };
// };

export default Login;
