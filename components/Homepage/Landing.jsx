import React from 'react'
import oil from '../../public/assets/landingOil.png'
import Image from 'next/image'
import {about} from "./Data"

const Landing = () => {
  return (
    <>
      <div className="relative w-screen h-auto overflow-hidden mx-4">
        {/* Video Background */}
        <div className="absolute top-0 left-0 w-full h-[calc(100vh - 74px)] z-0 md:hidden">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover md:hidden"
            style={{ filter: 'opacity(4%)' }} // Slightly higher opacity for better visibility
          >
            <source src="/assets/hairgrowth.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 flex md:flex-col w-full justify-center items-center max-w-[1200px] m-auto" style={{ minHeight: `calc(100vh - 74px)` }}>
          <div className="w-1/2 md:w-[100%]">
            <h1 className="text-5xl md:text-3xl font-medium leading-normal mb-6">Revitalize Your Hair and Health with {about.name}</h1>
            <h4 className="text-base font-semibold leading-normal text-justify">Experience the power of ancient varmam therapy and herbal oil, proven to stimulate hair growth and support your well-being—even for baldness. Healing for the body, strength for the spirit.</h4>
          </div>
          <div className="w-1/2 md:w-[100%] md:mt-4">
            <Image src={oil} alt='' className='h-[90%] w-auto md:m-auto'></Image>
          </div>
        </div>

      </div>
    </>
  )
}

export default Landing