import Archives from '@/components/Archives';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='model fixed z-[20]'></div>
      <Nav />
      <Hero />
      <Archives />
      <Footer />
    </>
  );
}
