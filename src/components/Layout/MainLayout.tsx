import { Box, Stack } from '@chakra-ui/react';

import { Scroll } from '@/components/common/Scroll';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  // const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

  return (
    <Scroll>
      <Box textStyle="light">
        {/* <Navbar /> */}
        <Box pos="relative" h="full" bg="white" position="relative">
          <Stack direction="row" spacing="0">
            {/* {isSmallScreen && <MobileSidebar />} */}
            <Box w="full" minH="100vh" position="relative">
              {children}
            </Box>
          </Stack>
        </Box>
      </Box>
    </Scroll>
  );
};
