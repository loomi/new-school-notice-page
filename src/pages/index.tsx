import { Landing } from '@/modules/misc/pages/Landing';
import type { GetServerSideProps, NextPage } from 'next';
import { getServerSession } from 'next-auth';

const Home: NextPage = (props) => {
  return <Landing />;
};

export default Home;
