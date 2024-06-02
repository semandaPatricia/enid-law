import React from 'react'
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Team', path: '/team' },
    { id: 3, text: 'Services', path: '/services' },
    { id: 4, text: 'About', path: '/about' },
    { id: 5, text: 'Contact', path: '/contact' },
  ];

  return (
    <div className='bg-black flex justify-between items-center h-24  px-4 text-white'>
      {/* Logo  text-[#00dfba]*/}
      <a href="/">
      <div className="flex items-center flex-shrink-0">
      <img src="/logo3.svg" alt="" width={25} />
      <span className='w-full text-md font-semibold ml-2 '>Bukenya,Chemonges & Co.</span>
      </div>
      </a>
      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map((item, index) => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
          <a href={item.path}>{item.text}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-xl font-bold text-[#00df9a] m-4'>BUKENYA LAW</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
               <a href={item.path}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;


