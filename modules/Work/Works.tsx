import { CustomImage, ExplainWorks, Heading, Input, Text } from '@/components'
import React from 'react'

const Works = () => {
  return (
    <section>
        <div className='containers'>
            <div className='mt-[80px] mb-[50px]'>
                <Heading tag='h2'>How it works</Heading>
                <Text>Find out how to get started</Text>
            </div>
            <ExplainWorks/>

            {/* <div className='mt-[120px] mb-[80px] flex justify-center bg-[#3B3B3B] py-[50px] px-[50px] rounded-[20px]'>
                <div className='flex gap-[80px] overflow-hidden'>
                    <CustomImage classList='hover:scale-[1.2] hover:rounded-[20px] duration-500' src='/Hi-space.png' alt='Hi from Space Picture' H={310} W={425}/>
                    <div>
                        <Heading tag='h2' classList='mt-[30px] text-start w-[425px] h-[70px]'>Join our weekly digest</Heading>
                        <Text classList='text-[22px] text-white mb-5'>Get exclusive promotions & updates straight to your inbox.</Text>
                        <Input  showIcon={true}   />
                    </div>
                </div>
            </div>
             */}

<div className='mt-16 md:mt-[120px] mb-12 md:mb-[80px] flex justify-center bg-[#3B3B3B] py-6 md:py-12 px-4 sm:px-6 lg:px-12 rounded-2xl mx-4 sm:mx-6 lg:mx-8'>
    <div className='flex flex-col xl:flex-row gap-8 lg:gap-12 xl:gap-20 items-center xl:items-start w-full max-w-6xl'>
        
        {/* Image Container */}
        <div className='w-full xl:flex-1 flex justify-center'>
            <div className='relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
                <CustomImage 
                    classList='
                        hover:scale-105 hover:rounded-2xl 
                        transition-transform duration-500 
                        w-full h-auto
                        rounded-lg
                    '
                    src='/Hi-space.png' 
                    alt='Hi from Space Picture' 
                    H={310} 
                    W={425}
                />
            </div>
        </div>
        
        {/* Content Container */}
        <div className='w-full xl:flex-1 flex flex-col items-center xl:items-start text-center xl:text-left'>
            <Heading 
                tag='h2' 
                classList='
                    mt-2 xl:mt-8 
                    w-full 
                    text-xl sm:text-2xl md:text-3xl lg:text-4xl
                    font-bold
                '
            >
                Join our weekly digest
            </Heading>
            
            <Text classList='
                text-base sm:text-lg md:text-xl 
                text-white 
                mb-6 md:mb-8 
                mt-3 md:mt-4
                max-w-md
            '>
                Get exclusive promotions & updates straight to your inbox.
            </Text>
            
            {/* Input Container */}
            <div className='w-full max-w-sm sm:max-w-md md:max-w-lg'>
                <Input showIcon={true} />
            </div>
        </div>
    </div>
</div>

        </div>
    </section>
  )
}

export default Works
