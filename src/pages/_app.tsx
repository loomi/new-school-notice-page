import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Fonts, theme } from '@/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider  theme={{
      ...theme,
    }}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
