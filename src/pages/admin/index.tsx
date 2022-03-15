import { GetServerSideProps } from 'next';
import React from 'react';

import { Dashboard } from '@/modules/dashboard';

const Home: React.FC = () => {
  return <Dashboard />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  // get initial props to render something
  return { props: {} };
};

export default Home;
