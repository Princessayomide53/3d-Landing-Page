import React from 'react';

const Hero = () => {
  return (
    <section className='intro gap-[1em] md:gap-[2em] pt-[12em] small:pt-[14em] md:pb-0 md:pt-[7em] lg:pt-[2em] flex flex-col justify-center p-[1em]'>
      <div className='header-row flex gap-[2em] items-center'>
        <h1>Spaces for</h1>
      </div>
      <div className='header-row flex-col lg:flex-row flex gap-[1em] md:gap-[2em] items-start lg:items-center'>
        <h1>Future</h1>
        <p className='uppercase w-[60%] lg:w-[20%]'>
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
