import { Heading, RankingUserCard, Text } from '@/components'
import React from 'react'

const Rankings = () => {
  return (
    <section>
      <div className='containers'>
        <div className='flex flex-col gap-1 '>
          <Heading tag='h2'>Top Creators</Heading>
          <Text>Check out top ranking NFT artists on the NFT Marketplace.</Text>
        </div>
        <div className='containers justify-between items-center mx-auto mb-[40px]  mt-[30px] md:!mt-[40px] ld:!mt-[40px] flex gap-[20px] md:gap-[50px] lg:gap-[150px]'>
          <Text classList='border-b-[2px] border-b-[##858584] hover:scale-[1.03] duration-300 text-white text-[16px] md:!text-[16px] lg:!text-[22px]'>Today</Text>
          <Text classList='  hover:duration-300 hover:scale-[1.03] text-[#858584] text-[16px] md:!text-[16px] lg:!text-[22px]'>This Week</Text>
          <Text classList='  hover:duration-300 hover:scale-[1.03] text-[#858584] text-[16px] md:!text-[16px] lg:!text-[22px]'>This Month</Text>
          <Text classList='  hover:duration-300 hover:scale-[1.03] text-[#858584] text-[16px] md:!text-[16px] lg:!text-[22px]'>All Time</Text>
        </div>
        <RankingUserCard />
      </div>
    </section>
  )
}

export default Rankings
