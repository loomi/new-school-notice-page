import { BarChart } from '@/components/Charts';

export const IncomesChart = () => {
  return (
    <>
      <BarChart
        label="Incomes"
        height={500}
        width={500}
        indexBy="label"
        data={[
          ...Array(10)
            .fill(null)
            .map((_, index) => ({
              label: `Bar ${index}`,
              value: index * 5 + 5,
            })),
        ]}
      />
    </>
  );
};
