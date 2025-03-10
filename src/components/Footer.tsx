import React from 'react';

const Footer = () => {
  return (
    <section className='outro flex flex-col justify-around px-[2em] smalls:-mt-[4em] lg:px-[6em] smallest:py-[2em] smalls:py-0 md:py-[2em]'>
      <div className='outro-copy'>
        <h2 className='w-full md:w-[85%] xl:w-[78%] uppercase text-[19px] md:text-[42px] lg:text-[50px] xl:text-[50px] desktop:text-[90px] font-normal leading-[1em] md:leading-[0.9em] mb-[0.5em] '>
          We are a multidisciplinary design studio based in France, the
          Netherlands, and Germany, specializing in custom furniture, unique
          installations, and immersive visual experiences.
        </h2>
        <p className='flex py-[1em] gap-[1em] uppercase desktop:text-[3em]'>
          Email:
          <span>info.oaktelier.com</span>
        </p>
        <p className='flex py-[1em] gap-[1em] uppercase desktop:text-[3em]'>
          Contact: <span>hello.oaktelier.com</span>
        </p>
      </div>
      <div className='footer md:flex justify-between items-end uppercase'>
        <p className='leading-[1.2em] hidden md:flex desktop:text-[3em]'>
          We are a multidisciplinary design studio based in France, the
          Netherlands, and Germany, specializing in custom furniture, unique
          installations, and immersive visual experiences.
        </p>
        <p className='leading-[1.2em] desktop:text-[3em]'>Built by Princess</p>
      </div>
    </section>
  );
};

export default Footer;
