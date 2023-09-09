import React from 'react'
import Logo from '../Logo'

const NavigationBar = () => {
  return (
    <div className='w-full bg-white h-20 fixed flex flex-col justify-around items-center'>
        <Logo 
            first='Bita'
            second='kon'
        />
    </div>
  )
}

export default NavigationBar