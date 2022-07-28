import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

import { mockAPI } from '@/lib/axios';
import { Dashboard } from '@/modules/dashboard';

const Home: NextPage<{ incomesData: any[]; expensesData: any[] }> = ({
  incomesData,
  expensesData,
}) => {
  return <Dashboard incomesData={incomesData} expensesData={expensesData} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data: incomesData } = await mockAPI(ctx).get('/incomes');
  const { data: expensesData } = await mockAPI(ctx).get('/expenses');

  return { props: { incomesData, expensesData } };
};

export default Home;
