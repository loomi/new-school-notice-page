import { Flex, Image } from '@chakra-ui/react';

import { HeadingDefault } from '../common/HeadingDefault';
import { Container } from '../Container';

import { pathersImages } from './assets';
console.log('pathersImages :>> ', pathersImages);
export const Pathers: React.FC = () => {
  return (
    <Flex as="section" py="1rem">
      <Container h="100%" border="solid 2px" borderTopColor="#AA186B" d="flex">
        <Flex w="100%" justifyContent={['center', 'flex-start']}>
          <HeadingDefault color="#AA186B" text="parceiros" />
        </Flex>
        <Flex maxW="100%" alignItems="center" flexWrap="wrap" gap="1rem 2.5rem" px={[5, 0]}>
          {pathersImages.map((img, i) => (
            <Flex key={img.src} justifyContent="center" flexBasis="10%">
              <Image
                src={img.src}
                alt={`parceiro ${i}`}
                maxW={[img.width / 4, img.width / 2]}
                maxH={[img.height / 4, img.height / 2]}
              />
            </Flex>
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};
