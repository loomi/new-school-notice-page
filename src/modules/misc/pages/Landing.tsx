/* eslint-disable jsx-a11y/accessible-emoji */
import { Heading } from '@chakra-ui/react';
import Image from 'next/image';

import whiteLogo from '@/assets/logoBranco.png';
import { Head } from '@/components/Head';
import * as LC from '@/components/LC';

export const Landing = () => {
  return (
    <>
      <Head title="New school" description="Em construção..." />
      <LC.Vertical minH="100vh" center>
        <Image src={whiteLogo} alt="logo cor branco" />
        <Heading as="h3">Novo site em construção</Heading>
      </LC.Vertical>
    </>
  );
};
