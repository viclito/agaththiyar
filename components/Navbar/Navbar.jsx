'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '../../public/assets/logo.png'
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { about } from '../Homepage/Data';

const Navbar = () => {

  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path) => pathname === path;

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };


  return (
    <motion.div
      initial={false}
      animate={{
        position: isFixed ? 'fixed' : 'relative',
        top: isFixed ? 0 : 'auto',
        left: 0,
        width: '100%',
        boxShadow: isFixed ? '0px 4px 10px rgba(0, 0, 0, 0.1)' : 'none',
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="bg-white z-50 py-3"
    >
      <div className="max-w-[1300px] m-auto flex justify-between items-center px-2">
        <div className="h-[50px] flex items-center gap-3">
          <Image src={logo} alt="Logo" className="h-[100%] w-auto bg-white" />
          <h6 className='text-[#7a6b3a] font-bold'>{about.name}</h6>
        </div>
        <div className="flex gap-5 sm:hidden">
            <Link href="/">
              <p className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</p>
            </Link>
            <Link href="#about">
              <p className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</p>
            </Link>
            <Link href="#product">
              <p className={`nav-link ${isActive('/service') ? 'active' : ''}`}>Our Products</p>
            </Link>
            <Link href="#contact">
              <p className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</p>
            </Link>
        </div>
        <div className="sm:flex items-center hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black">
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-0 right-0 bg-white h-screen w-2/3 shadow-lg z-40 flex flex-col gap-5 p-5"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="sm:flex items-center hidden absolute top-3 right-3">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black">
                {isMenuOpen ? "✖" : "☰"}
              </button>
            </div>
            <Link href="/">
              <p
                onClick={() => setIsMenuOpen(false)}
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
              >
                Home
              </p>
            </Link>
            <Link href="#about">
              <p
                onClick={() => setIsMenuOpen(false)}
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              >
                About
              </p>
            </Link>
            <Link href="#product">
              <p
                onClick={() => setIsMenuOpen(false)}
                className={`nav-link ${isActive('/service') ? 'active' : ''}`}
              >
                Our Products
              </p>
            </Link>
            <Link href="#contact">
              <p
                onClick={() => setIsMenuOpen(false)}
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              >
                Contact
              </p>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar