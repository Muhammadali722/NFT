import React from 'react'
import CustomImage from './CustomImage'
import Heading from './Heading'
import  Text  from './Text'

const ExplainWorks = () => {
  return (
    <div className='containers grid grid-cols-1 md:grid-cols-3 gap-10 mt-20'>
      <div className='!bg-[#3B3B3B] p-5 rounded-[20px] flex flex-col items-center text-center'>
        <CustomImage src='/wallet-img.png' alt='How it works Pictures' H={250} W={250} />
        <Heading  tag='h3'>Setup Your wallet</Heading>
        <Text>Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</Text>
      </div>
      <div className='!bg-[#3B3B3B] p-5 rounded-[20px] flex flex-col items-center text-center'>
        <CustomImage src='/playlist-bag.png' alt='How it works Pictures' H={250} W={250} />
        <Heading tag='h3'>Create Collection</Heading>
        <Text>Upload your work and setup your collection. Add a description, social links and floor price.</Text>
      </div>
      <div className='!bg-[#3B3B3B] p-5 rounded-[20px] flex flex-col items-center text-center'>
        <CustomImage src='/shopping-bag-img.png' alt='How it works Pictures' H={250} W={250} />
        <Heading tag='h3'>Start Earning</Heading>
        <Text>Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</Text>
      </div>
    </div>
  )
}
// Finished by Muhammad Ali
export default ExplainWorks
