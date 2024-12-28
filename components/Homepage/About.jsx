import React from 'react'
import { about } from './Data'
import aboutImg from '../../public/assets/about.jpg'
import Image from 'next/image'
import ParaComp from '../ParaComp'

const About = () => {
  return (
    <div className='max-w-[1200px] m-auto my-16 md:mx-4 md:my-6'>
        <div className='w-[100%]' id='about'>
            <h2 className='font-semibold text-3xl text-center py-14'>About <span className='text-[#7a6b3a]'>{about.name}</span></h2>
        </div>
        <div className='flex w-[100%] gap-4 items-center md:flex-col'>
            <div className='w-[48%] md:w-[100%] mb-10 mr-3'>
                <Image src={aboutImg} alt='' className='w-[80%] rounded-md h-auto m-auto filter grayscale'/>
                <ParaComp className="" text={`Welcome to ${about.name}, a center dedicated to preserving and practicing the ancient art of Agaththiyar Varmam Healing. Inspired by the teachings of Sage Agaththiyar, the pioneer of Siddha medicine, we bring holistic wellness to modern lives through traditional methods`}/>
            </div>
            <div className='w-[48%] md:w-[100%] mb-10 ml-3'>
                <h4 className='font-semibold'>Mission</h4>
                <ParaComp text="Our mission is to promote health and well-being by integrating the wisdom of ancient Tamil medicine with modern therapeutic approaches. We aim to make the time-tested art of Varmam accessible and effective for everyone."/>
                <h4 className='font-semibold mt-8'>What We Offer</h4>
                <ParaComp className="py-2" span="Varmam Therapy:" text=" Treatments based on the manipulation of vital energy points to address various physical and neurological conditions."/>
                <ParaComp className="py-2" span="Pain Management:" text=" Natural, non-invasive solutions for joint pain, back pain, and sports injuries."/>
                <ParaComp className="py-2" span="Traditional Siddha Treatments:" text=" Holistic remedies for chronic diseases, rooted in Siddha principles."/>
                <ParaComp className="py-2" span="Marma Massage Therapy:" text=" Gentle techniques to stimulate energy flow and promote healing."/>
                
            </div>
        </div>
    </div>
  )
}

export default About