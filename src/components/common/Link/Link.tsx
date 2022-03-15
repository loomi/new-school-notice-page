import { Link as ChakraLink } from '@chakra-ui/react';
import { default as NextLink } from 'next/link';

type LinkProps = {
  to: string;
  children: string | React.ReactNode;
};

export const Link = ({ to, children, ...restProps }: LinkProps) => {
  return (
    <ChakraLink as={NextLink} to={to} {...(restProps as any)}>
      {children}
    </ChakraLink>
  );
};
