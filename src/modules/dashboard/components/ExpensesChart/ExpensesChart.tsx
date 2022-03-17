import { PieChart } from '@/components/Charts/PieChart';

export const ExpensesChart = () => {
  return (
    <PieChart
      label="Expenses"
      height={500}
      width={500}
      data={
        [
          ...Array(10)
            .fill(null)
            .map((_, index) => ({
              label: `Bar ${index}`,
              value: index * 5 + 5,
            })),
        ] || []
      }
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  );
};
