import { Box, Flex, Image, Text, Grid } from '@chakra-ui/react';

import footer from '@/assets/images/bg_footer.png';
import messageLoomi from '@/assets/images/footer_loomi.png';
import logo2 from '@/assets/images/logo2.png';

import { Container } from '../Container';

export const Footer: React.FC = () => {
  return (
    <Flex
      as="footer"
      sx={{
        w: '100%',
        minH: '60vh',
        bg: `url(${footer.src}) no-repeat`,
        bgPosition: 'left',
        bgSize: 'cover',
        pt: '2rem',
      }}
    >
      <Container h="100%" d="flex">
        <Grid w="100%" h="100%">
          <Flex flexWrap="wrap" w="100%" h="100%" alignItems="center">
            <Flex justifyContent={['center', 'flex-start']} w={['100%', 'auto']}>
              <Image src={logo2.src} alt="logo empresa 2" maxW={[200, 313]} maxH={93} />
            </Flex>
            <Flex ml={['0', '10rem']} my={[20, 0]} maxW={['100%', '55%']} justifyContent="center">
              <Box w={['90%', '100%']}>
                <Text fontSize="1.87rem">Sobre a Ânima Educação</Text>
                <br />
                <Text fontSize="1.325rem">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                  no sea takimata sanctus est
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Flex
            justifyContent={['center', 'flex-end']}
            alignItems="center"
            as="a"
            target="_blank"
            href="https://www.instagram.com/loomi.digital/"
          >
            <Image src={messageLoomi.src} alt="logo empresa 2" maxW={334} maxH={19} />
          </Flex>
        </Grid>
      </Container>
    </Flex>
  );
};
