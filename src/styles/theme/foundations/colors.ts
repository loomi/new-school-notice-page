import { theme } from '@chakra-ui/react';

import tailwindColors from './tailwindColors';

export const colors = {
  ...theme.colors,
  ...tailwindColors,
  purple: {
    500: '#661DAC',
  },
  white: {
    500: '#F5F5F5',
  },
};
