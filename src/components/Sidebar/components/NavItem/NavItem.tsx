/* eslint-disable @next/next/link-passhref */
import Icon from '@chakra-ui/icon';
import { BoxProps, Spacer, Stack, Text } from '@chakra-ui/layout';
import { Box, Center } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/system';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { useLocation } from 'react-router-dom';

import { useSidebar } from '../../store/sidebar';

export type NavItemP = {
  icon: IconType;
  active?: boolean;
  count?: string;
  to?: string;
  name: string;
};

export const NavItem = ({ icon, count, to, name }: NavItemP) => {
  const { pathname } = useLocation();

  const {
    actions: { toggleSidebar },
  } = useSidebar() as any;

  const active = pathname === to;
  const activeProps: BoxProps = {
    color: 'white',
    bg: 'brand.600',
    borderRadius: 'lg',
  };

  const handleNavClick = () => {
    toggleSidebar();
  };

  return (
    <Center>
      <Link href={to || ''}>
        <Box ml="auto" mr="auto" w="90%" onClick={handleNavClick}>
          <Stack
            direction="row"
            cursor="pointer"
            px={6}
            py={2}
            w="100%"
            m="0"
            spacing={4}
            alignItems="center"
            fontWeight="semibold"
            transition="all .4s ease-in-out"
            borderRightWidth="3px"
            borderRightColor="transparent"
            _hover={activeProps}
            {...(active && activeProps)}
          >
            <Icon as={icon} fontSize="xl" />
            {/* <LinkOverlay> */}
            <Text>{name}</Text>
            {/* </LinkOverlay> */}
            <Spacer />
            {count && (
              <chakra.span
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={2}
                py={1}
                fontSize="xs"
                fontWeight="bold"
                lineHeight="none"
                color="pink.50"
                bg="pink.500"
                rounded="full"
              >
                {count}
              </chakra.span>
            )}
          </Stack>
        </Box>
      </Link>
    </Center>
  );
};
