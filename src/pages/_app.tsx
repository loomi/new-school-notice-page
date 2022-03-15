import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';

import { AuthProvider } from '@/lib/auth/authentication';
import { queryClient } from '@/lib/react-query';
import { Fonts, theme } from '@/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider
      theme={{
        ...theme,
      }}
    >
      <Fonts />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
