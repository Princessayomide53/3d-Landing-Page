import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className='outro flex flex-col justify-around px-[6em] py-[2em]'>
      <div className='outro-copy'>
        <h2 className='w-[75%] uppercase text-[60px] font-normal leading-[0.9em] mb-[0.5em] '>
          {' '}
          We are a multidisciplinary design studio based in France, the
          Netherlands, and Germany, specializing in custom furniture, unique
          installations, and immersive visual experiences.
        </h2>
        <p className='flex py-[1em] gap-[1em] uppercase'>
          Email:
          <span>info.oaktelier.com</span>
        </p>
        <p className='flex py-[1em] gap-[1em] uppercase'>
          Contact: <span>hello.oaktelier.com</span>
        </p>
      </div>
      <div className='footer flex justify-between items-end uppercase'>
        <p className='leading-[1.2em] '>
          We are a multidisciplinary design studio based in France, the
          Netherlands, and Germany, specializing in custom furniture, unique
          installations, and immersive visual experiences.
        </p>
        <p className='leading-[1.2em] '>Built by Princess</p>
      </div>
    </section>
  );
};

export default Footer;
