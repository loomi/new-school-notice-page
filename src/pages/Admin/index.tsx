import React, { useState } from 'react';

import { GetServerSideProps } from 'next';
import { Box } from '@chakra-ui/react';

const Home: React.FC = (props) => {
  return <Box>Home page</Box>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

export default Home;
