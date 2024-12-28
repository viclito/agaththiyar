import React from 'react'
import { products , about } from './Data'
import Image from 'next/image'
import ParaComp from '../ParaComp'

const Product = () => {
    
  return (
    <div className='max-w-[1200px] m-auto my-16 md:mx-4'>
        <div className='w-[100%]' id='product'>
            <h2 className='font-semibold text-3xl text-center py-14'><span className='text-[#7a6b3a]'>{about.name}</span> Products</h2>
        </div>
        <div className="flex gap-4 w-[100%] flex-wrap justify-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-[28%] sm:w-[100%]  rounded-md p-4 "
          >
            <Image src={product.image} alt={product.name} className="w-full h-auto rounded-md" />
            <h3 className="text-lg font-medium mt-2 text-center">{product.name}</h3>
            <ParaComp text={product.description}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product