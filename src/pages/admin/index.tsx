import React from 'react';

import { GetServerSideProps } from 'next';
import { Dashboard } from '@/modules/dashboard';

const Home: React.FC = (props) => {
  return <Dashboard />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  // get initial props to render something
  return { props: {} };
};

export default Home;
