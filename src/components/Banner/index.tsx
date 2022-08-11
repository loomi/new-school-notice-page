import { Grid, Flex, GridItem, Image, Heading, Text, Button, Box } from '@chakra-ui/react';

import banner from '@/assets/images/banner.png';
import logo from '@/assets/images/logo.png';
import logo2 from '@/assets/images/logo2.png';

import { Container } from '../Container';

export const Banner: React.FC = () => {
  return (
    <Flex
      as="section"
      sx={{
        w: '100%',
        minH: '100vh',
        bg: `url(${banner.src}) no-repeat`,
        bgPosition: 'left',
        bgSize: 'cover',
        pt: '2rem',
      }}
    >
      <Container h="100vh">
        <Flex w="100%" justifyContent="space-between" px={[5, 0, 0]}>
          <Grid h="100vh" placeItems="center">
            <Grid maxW="23rem" rowGap="2rem">
              <GridItem>
                <Image src={logo.src} alt="logo empresa" maxW={182} maxH={140} />
              </GridItem>
              <GridItem>
                <Heading
                  as="h1"
                  fontSize={['3.5rem', '5rem']}
                  fontFamily="calibri"
                  textTransform="uppercase"
                >
                  <Box>tech week</Box>
                  <Box
                    sx={{
                      lineHeight: '80%',
                      color: 'transparent',
                      '-webkit-text-stroke-width': '1px',
                      '-webkit-text-stroke-color': 'white',
                    }}
                  >
                    experience
                  </Box>
                </Heading>
              </GridItem>
              <GridItem>
                <Text>
                  Um evento que tem como objetivo potencializar as conexões, trazendo conteúdo
                  curado.
                </Text>

                <Text fontSize="40px" fontWeight="bold">
                  23 a 28 de agosto
                </Text>
              </GridItem>
              <GridItem>
                <Button w={130} h={50}>
                  Participe
                </Button>
              </GridItem>
            </Grid>
          </Grid>
          <Box d={{ base: 'none', lg: 'block', xl: 'block' }}>
            <Image src={logo2.src} alt="logo empresa 2" maxW={203} maxH={60} />
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};
