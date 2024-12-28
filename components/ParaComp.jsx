import React from 'react'

const ParaComp = ({text , className , span}) => {
  return (
    <>
        <h5 className={`${className} text-justify py-4 text-sm font-medium `}><span className='font-bold'>{span}</span>{text}</h5>
    </>
  )
}

export default ParaComp