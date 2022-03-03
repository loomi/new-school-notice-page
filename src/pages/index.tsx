import type { GetServerSideProps, NextPage } from 'next';
import { getServerSession } from 'next-auth';

const Home: NextPage = (props) => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context, { providers: [] });
  const autenticate = true;
  if (autenticate)
    return {
      props: { teste: session },
      redirect: { destination: '/Admin', permanent: false },
    };
  return {
    props: {},
    redirect: { destination: '/Auth', permanent: false },
  };
};

export default Home;
