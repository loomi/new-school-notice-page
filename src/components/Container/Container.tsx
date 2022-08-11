import { Box, ChakraProps } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useRef } from 'react';

import { MotionBox } from '@/components/common/MotionBox';

type PageProps = {
  children: ReactNode;
} & ChakraProps;

export const Container = ({ children, ...restProps }: PageProps) => {
  const router = useRouter();
  const containereRef = useRef<HTMLDivElement>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  useEffect(() => {
    if (router.pathname && containereRef) {
      containereRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [router.pathname]);

  return (
    <MotionBox
      w="100%"
      variants={container}
      initial="hidden"
      animate="show"
      ref={containereRef}
      maxW={{ base: 'container.xl', '2xl': '1600' }}
      mx="auto"
    >
      <Box w="100%" {...restProps}>
        <Box h="100%">{children}</Box>
      </Box>
    </MotionBox>
  );
};
