import React from 'react';
import whatsapp from '../../public/assets/whatsapp.png'
import gmail from '../../public/assets/gmail.png'
import telephone from '../../public/assets/telephone.png'
import Image from 'next/image';
import arrow from '../../public/assets/next.png'


const SvgComponent = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='w-[100%] h-auto' {...props}>
    <path
      fill="#122c52"
      d="m0 96 48 16c48 16 144 48 240 58.7 96 10.3 192 .3 288-21.4C672 128 768 96 864 96s192 32 288 32 192-32 240-48l48-16v256H0Z"
    />
  </svg>
);



const Footer = () => {
  return (
    <div className='w-screen '>
        <div className='relative -bottom-20 lg:-bottom-10 md:-bottom-6 sm:bottom-0 xs:-bottom-2 w-[100%] z-0'>
          <SvgComponent/>
        </div>
        <div className='w-screen bg-[#122c52]  text-white relative '>
            
            
            <div className='max-w-[1400px] mx-auto px-6 py-8 relative z-10 flex gap-3 md:flex-col justify-between'>
              <div className='w-[40%] flex flex-col gap-3 md:w-[45%] sm:w-[100%]'>
                <h3 className='text-base font-bold sm:text-sm'>Our Vision</h3>
                <p className='text-base sm:text-sm'>A center dedicated to preserving and practicing the ancient art of Agaththiyar Varmam Healing. We bring holistic wellness to modern lives through traditional methods</p>
              </div>
              
              <div className='w-[45%] flex flex-col gap-4 md:w-[55%] sm:w-[100%]'>
                <h3 className='text-lg sm:text-base font-bold'>Contact Details</h3>
                
                <div className='flex flex-col gap-1'>
                  <h3 className='text-base sm:text-sm font-semibold'>Social Media</h3>
                  <div className='flex gap-3'>
                    <a href="https://wa.me/8695470522" target='_blank'>
                      <Image src={whatsapp} alt='' className='w-6 h-6'/>
                    </a>
                    <a href="mailto:paulrajvarmam@gmail.com" target='_blank'>
                      <Image src={gmail} alt='' className='w-6 h-6'/>
                    </a>
                   
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <h3 className='text-base sm:text-sm font-semibold'>Address</h3>
                  <p className='text-sm sm:text-xs font-medium'>87M5+J3C, Barathapalli Road, Thiruvattaru, Tamil Nadu 629177</p>
                  <h3 className='text-base sm:text-sm font-semibold pt-3'>Phone Number</h3>
                  <p className='text-sm sm:text-xs font-medium flex gap-1 items-center'>
                     <a href="tel:8695470522"> <Image src={telephone} alt='' className='w-6 h-6'/></a> 
                     <a href="tel:8695470522">+91 8695470522</a>
                  </p>
                  
                </div>
              </div>
            </div>
        </div>

        <div className='w-screen bg-black flex justify-end gap-2'>
          <Image alt='' src={arrow} className='w-6'/>
          <h6 className='text-end text-white pr-6 py-1 font-bold text-xs'><a href="https://portfolio-git-main-berglins-projects.vercel.app/" target='_blank'>Designed and developed by :  Berglin</a> </h6>
        </div>
    </div>
  )
}

export default Footer