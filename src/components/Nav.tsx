import React from 'react';

const Nav = () => {
  return (
    <nav className='fixed top-0 left-0 w-[100vw] p-[2em] flex justify-between items-center'>
      <p>
        oak <span>atelier </span>
      </p>
      <a href='#' className='uppercase'>
        Contact US
      </a>
    </nav>
  );
};
export default Nav;
