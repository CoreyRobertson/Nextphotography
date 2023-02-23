import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 text-center'>
            <h1 className='font-bold text-2xl p-4'>Travel Photos</h1>
            <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
                <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                    <Image src='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='/' layout='responsive' width='677'
                        height='451'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image src='https://images.unsplash.com/photo-1526648457459-22b2d73b0a2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='/' width='215' height='217' layout='responsive' objectFit='cover' />
                </div>
                <div className='w-full h-full'>
                    <Image src='https://images.unsplash.com/photo-1513604170399-52192b510508?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='/' width='215' height='217' layout='responsive' objectFit='cover' />
                </div>
                <div className='w-full h-full'>
                    <Image src='https://images.unsplash.com/photo-1593975441316-c74548bef389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80' alt='/' width='215' height='217' layout='responsive' objectFit='cover' />
                </div>
                <div className='w-full h-full'>
                    <Image src='https://images.unsplash.com/photo-1610650138161-ef555e34fdf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80' alt='/' width='215' height='717' layout='responsive' objectFit='cover' />
                </div>
            </div>
        </div>
    )
}

export default Portfolio