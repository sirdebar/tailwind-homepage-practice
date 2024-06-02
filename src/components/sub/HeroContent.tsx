"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../../utils/motion'
import {SparklesIcon} from '@heroicons/react/24/solid'

export default function HeroContent() {
  return (
    <motion.div initial='Hidden' animate="Visible" className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
        variants={slideInFromTop}
        className='Welcome-box py-[15px] px=[7px] px-[10px] border border-[#7042f88b] opacity-[0.9]'>
            <SparklesIcon className='text-[#b49bff] h-5 w-5' />
            <h1 className='Welcome-text text-[13px]'>Fullstack Developer Portfolio</h1>
        </motion.div>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
            Предлагаю вам
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> лучший  </span>
            опыт разработки
        </motion.div>

        <motion.p
        variants={slideInFromLeft(0.8)}
        className='text-lg text-gray-400 my-5 max-w-[600px]'>
            Я явлюясь Fullstack разработчиком с опытом разработки Лендингов, Скриптов и Вебсайтов. Мои скиллы ниже.
        </motion.p>

        <motion.a
        variants={slideInFromLeft(1)}
        className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
        >
            Связаться
        </motion.a>

        </div>
        <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'>
            <img
            src='/mainIconsdark.svg'
            alt='work icons'
            height={650}
            width={650} />
        </motion.div>
        
    </motion.div>
  )
}
