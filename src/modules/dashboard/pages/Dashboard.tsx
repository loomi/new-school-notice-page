import * as LC from '@/components/LC';
import { Page } from '@/components/Page';

import { ExpensesChart } from '../components/ExpensesChart';
import { IncomesChart } from '../components/IncomesChart';

export const Dashboard: React.FC<{ incomesData: any[]; expensesData: any[] }> = ({
  incomesData,
  expensesData,
}) => {
  return (
    <Page withBackButton title="Dashboard">
      <LC.Horizontal spaceBetween>
        <IncomesChart incomesData={incomesData} />
        <ExpensesChart expensesData={expensesData} />
      </LC.Horizontal>
    </Page>
  );
};
