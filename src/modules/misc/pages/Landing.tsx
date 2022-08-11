import { Banner } from '@/components/Banner';
import { Footer } from '@/components/Footer';
import { Head } from '@/components/Head';
import * as LC from '@/components/LC';
import { Pathers } from '@/components/Pathers';

export const Landing = () => {
  return (
    <>
      <Head title="anima" description="tech week experience" />
      <LC.Vertical minH="100vh" center as="main">
        <Banner />
        <Pathers />
      </LC.Vertical>
      <Footer />
    </>
  );
};
