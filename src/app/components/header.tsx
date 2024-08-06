"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from './Assests/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isScreenLarge, setIsScreenLarge] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenLarge(window.innerWidth > 700);
    };

    handleResize(); // Check screen size on initial render
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Disable scrolling on body
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling on body
      document.body.style.overflow = '';
    }

    return () => {
      // Ensure scrolling is enabled when component is unmounted or menu is closed
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const items = [
    { name: 'Home', id: 'home' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'About me', id: 'about-me' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const menuClicked = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerHeight = 80; // Adjust this value based on your header's height
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionPosition - headerHeight, behavior: 'smooth' });
    }
    closeMenu();
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isScreenLarge ? (
        <div className='w-full bg-inherit z-50 fixed border-b-2'>
          <ul className='flex items-center p-4 2xl:px-64 xl:px-40 lg:px-20 sm:px-4'>
            {items.map((item, index) => (
              <li
                className='flex p-3 mr-16 justify-between cursor-pointer rounded-lg py-2 hover:shadow-xl font-semibold text-gray-700 hover:bg-gray-100 transition-colors duration-200'
                key={index} onClick={() => handleItemClick(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <div className='h-16 px-10 flex bg-inherit z-50 fixed w-full items-center justify-between border-b-2'>
            <FontAwesomeIcon icon={faBars} size='lg' onClick={menuClicked} />
            <Image src={logo} className='rounded-full' height={35} alt='logo' />
          </div>
          {isOpen && (
            <>
              <div className='fixed top-0 left-0 w-full h-full z-50' onClick={closeMenu}>
                <div className='w-[75%] h-full bg-white shadow-md transition-transform duration-300 transform'>
                  <ul className='flex mt-16 flex-col items-center justify-start h-full'>
                    {items.map((item, index) => (
                      <li
                        className='p-4 px-10 w-full text-left border-b cursor-pointer hover:bg-gray-200'
                        key={index}
                        onClick={() => handleItemClick(item.id)}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='fixed top-0 right-0 w-[25%] h-full z-30 bg-black opacity-50' onClick={closeMenu}></div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Header;
