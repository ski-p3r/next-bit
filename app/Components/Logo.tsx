import React from 'react'

interface LogoProps {
    first: string;
    second: string;
}

const Logo: React.FC<LogoProps> = ({
    first,
    second
}) => {
  return (
    <div className='flex flex-row items-center justify-center font-extrabold'>
        <h4 className='text-black'>{first}</h4>
        <h4 className='text-blue-700'>{second}</h4>
    </div>
  )
}

export default Logo