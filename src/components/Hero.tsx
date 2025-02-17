import Image from 'next/image';

const Hero = () => {
  return (
    <section className='intro flex flex-col justify-center p-[1em]'>
      <div className='header-row flex gap-[2em] items-center'>
        <h1>Spaces for</h1>
      </div>
      <div className='header-row flex gap-[2em] items-center'>
        <h1>Future</h1>
        <p className='uppercase w-[20%]'>
          Innovative funiture design studio. Crafting sustainable, bespoke and
          functional solutions for homes and businesses.
        </p>
      </div>
      <div className='header-row flex gap-[2em] items-center'>
        <h1>Living Here</h1>
      </div>
    </section>
  );
};
export default Hero;
