import { AuctionResulType } from '../../@types/AuctionResultType'
import { AuctionType } from '../../@types/AuctionsType'
import { UserType } from '../../@types/UserType'
import { Button, CustomImage, Heading, Text } from '../../components'
import { RoketaIcon } from '../../icons'
import { FC } from 'react'


const API = "http://13.60.46.66";
const HeroContent: FC<{ auctions: AuctionType[], artists: UserType[], totalSale: AuctionResulType[] }> = ({ auctions, artists, totalSale }) => {

  return (
    <section className='py-[80px]'>
      <div className="containers flex flex-col gap-[40px] lg:gap-0 lg:flex-row justify-between items-center">
        <div className='w-full lg:w-[500px]'>
          <Heading classList='!mb-[20px] !text-[28px] lg:!text-[67px] !leading-[110%]' tag='h1'>Discover digital art & Collect NFTs</Heading>
          <Text classList='!mb-[30px] !max-w-[370px] capitalize'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</Text>
          <div className='hidden lg:block'>
            <Button icon={<RoketaIcon />} iconPosition='left' >Get Started</Button>
            <div className='pt-[30px] flex items-center gap-[30px]'>
              <div>
                <strong className='font-bold text-white text-[28px]'>+</strong>  
                <Text classList='!text-[23px]'>Total Sale</Text>
              </div>
              <div>
                <strong className='font-bold text-white text-[28px]'>+</strong>
                <Text classList='!text-[23px]'>Auctions</Text>
              </div>
              <div>
                <strong className='font-bold text-white text-[28px]'>+</strong>
                <Text classList='!text-[23px]' >  Artists</Text>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-[510px]'>
          <CustomImage src={"/hero-img.png"} alt='hero img' W={510} H={401} />
          <div className='py-[22px] mb-[40px] lg:mb-0 px-[20px] bg-[#3B3B3B] rounded-bl-[20px] rounded-br-[20px]'>
            <Heading tag='h3'>Space Walking</Heading>
            <div className='flex items-center gap-[12px] pt-[10px]'>
              <CustomImage src={"/avatar.svg"} alt='avatar img' W={24} H={24} />
              <Text classList='!text-[16px] !text-[#FFFFFF]'>Animakid</Text>
            </div>
          </div>
          <div className='lg:hidden'>
            <Button classList='!w-full' icon={<RoketaIcon />} iconPosition='left' >Get Started</Button>
            <div className='pt-[30px] flex items-center justify-between'>
              <div>
                <strong className='font-bold text-white text-[28px]'>+</strong>
                <Text classList='!text-[16px]'>Total Sale</Text>
              </div>
              <div>
                <strong className='font-bold text-white text-[28px]'>+</strong>
                <Text classList='!text-[16px]'>Auctions</Text>
              </div>
              <div>
                <strong className='font-bold text-white text-[28px]'>+</strong>
                <Text classList='!text-[16px]'>Artists</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroContent
