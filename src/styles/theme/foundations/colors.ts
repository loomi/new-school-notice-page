import { theme } from '@chakra-ui/react';

import tailwindColors from './tailwindColors';

export const colors = {
  ...theme.colors,
  ...tailwindColors,
  pink: {
    500: '#AA186B',
    550: '#8f145a',
  },
};
