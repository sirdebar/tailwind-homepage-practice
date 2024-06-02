import React from 'react'
import Image from 'next/image'

const Socials =() =>  {
    
  return (
    <div className='w-full h-full mt-[400px]'>
    <div className='text-[40px] font-medium text-center text-gray-200'>Связь со мной</div>
    <div className='flex flex-row items-center justify-center gap-3 mt-[200px] relative overflow-hidden '>
      <div className='w-[400px] h-[500px] border border-[#7042f861] bg-purple-50/5 mr-[15px] rounded-[50px] flex justify-center hover:scale-50'>
        <Image
        src='/telegram.svg'
        alt='telegram-social'
        width={150}
        height={150} />
      </div>
      <div className='w-[400px] h-[500px] border border-[#7042f861] bg-purple-50/5 mr-[15px] px-[20px] py-[10px] rounded-[50px] flex justify-center cursor-pointer' >
        <Image
        src='/discord.svg'
        alt='telegram-social'
        width={150}
        height={150} />
      </div>
    </div>
    </div>
  )
}

export default Socials
