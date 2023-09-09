import React from 'react'

interface LogoProps {
    first: string;
    second: string;
    isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({
    first,
    second,
    isDark
}) => {
  return (
    <div className='flex flex-row items-center justify-center font-extrabold font-xl'>
        <h4 className={isDark ? 'text-green-500 text-[20px]' : 'text-black text-[20px]'}>{first}</h4>
        <h4 className='text-blue-700 text-[20px]'>{second}</h4>
    </div>
  )
}

export default Logo