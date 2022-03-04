import { Landing } from '@/modules/misc/pages/Landing';
import type { GetServerSideProps, NextPage } from 'next';
import { getServerSession } from 'next-auth';
import { Login as AuthLogin } from '@/modules/auth';
import { parseCookies } from 'nookies';

const Login: NextPage = (props) => {
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
