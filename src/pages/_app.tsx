import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Fonts, theme } from '@/styles';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@/lib/react-query';
import { AuthProvider } from '@/lib/auth/authentication';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider  theme={{
      ...theme,
    }}>
      <Fonts />
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
              <Component {...pageProps} />
            </AuthProvider>
        </QueryClientProvider >
    </ChakraProvider>
  );
}

export default MyApp;
