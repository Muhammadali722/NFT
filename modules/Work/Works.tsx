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

            <div className='mt-[120px] mb-[80px] flex justify-center bg-[#3B3B3B] py-[50px] px-[50px] rounded-[20px]'>
                <div className='flex gap-[80px] overflow-hidden'>
                    <CustomImage classList='hover:scale-[1.2] hover:rounded-[20px] duration-500' src='/Hi-space.png' alt='Hi from Space Picture' H={310} W={425}/>
                    <div>
                        <Heading tag='h2' classList='mt-[30px] text-start w-[425px] h-[70px]'>Join our weekly digest</Heading>
                        <Text classList='text-[22px] text-white mb-5'>Get exclusive promotions & updates straight to your inbox.</Text>
                        <Input  showIcon={true}   />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Works
