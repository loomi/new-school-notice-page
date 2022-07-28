import React from 'react';

import { BarChart } from '@/components/Charts';
export const IncomesChart: React.FC<{ incomesData: any[] }> = ({ incomesData }) => {
  return (
    <>
      <BarChart height={500} width={800} data={incomesData} />
    </>
  );
};
