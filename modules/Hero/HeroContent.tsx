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
                <strong className='font-bold text-white text-[28px]'>{totalSale.length}  +</strong>  
                <Text classList='!text-[23px]'>Total Sale:
                
                </Text>
              </div>
              <div>
                <strong className='font-bold text-white text-[28px]'>{auctions.length} +</strong>
                <Text classList='!text-[23px]'>Auctions</Text>
              </div>
              <div>
                <strong className='font-bold text-white text-[28px]'>{artists.length} +</strong>
                <Text classList='!text-[23px]' >  Artists</Text>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-[510px]'>
          <CustomImage classList=' hover:scale-[1.02] duration-200 overflow-hidden ' src={"/hero-img.png"} alt='hero img' W={510} H={401} />
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
                <strong className='font-bold text-white text-[28px]'>{totalSale.length}  +</strong>
                <Text classList='!text-[16px]'>Total Sale</Text>
              </div>
              <div>
                <strong className='font-bold text-white text-[28px]'>{auctions.length} +</strong>
                <Text classList='!text-[16px]'>Auctions</Text>
              </div>
              <div>
                <strong className='font-bold text-white text-[28px]'>{artists.length} +</strong>
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



// import { AuctionResulType } from '../..//@types/AuctionResultType'
// import { AuctionType } from '../../@types/AuctionsType'
// import { UserType } from '@/@types/UserType'
// import { RoketaIcon } from '../../icons'
// import { Button, CustomImage, Heading, Text } from '@/components'
// import { useTranslations } from 'next-intl'
// import { FC } from 'react'

// const HeroContent: FC<{ auctions: AuctionType[]; artists: UserType[]; totalSale: AuctionResulType[]}> = ({ auctions, artists, totalSale }) => {

// 	return (
// 		<section className='py-[80px]'>
// 			<div className='containers flex flex-col gap-[40px] lg:gap-0 lg:flex-row items-center justify-between'>
// 				<div className='w-full lg:w-[510px]'>
// 					<Heading
// 						classList='!mb-[20px] !text-[28px] !leading-[110%] !capitalize'
// 						tag='h1'
// 					>
// 						{('title')}
// 					</Heading>
// 					<Text classList='!mb-[30px] !text-[16px] sm:!text-[22px] !capitalize'>
// 						{('description')}
// 					</Text>
// 					<div className='hidden lg:block'>
// 						<Button icon={<RoketaIcon />} iconPosition='left'>
// 							{('heroButton')}
// 						</Button>
// 						<div className='mt-[30px] flex items-center gap-[30px]'>
// 							<div>
// 								<strong className='font-bold text-[28px] text-white'>
// 									{totalSale.length}+
// 								</strong>
// 								<Text classList='!text-[23px]'>{('totalSale')}</Text>
// 							</div>
// 							<div>
// 								<strong className='font-bold text-[28px] text-white'>
// 									{auctions.length}+
// 								</strong>
// 								<Text classList='!text-[23px]'>{('auctions')}</Text>
// 							</div>
// 							<div>
// 								<strong className='font-bold text-[28px] text-white'>
// 									{artists.length}+
// 								</strong>
// 								<Text classList='!text-[23px]'>{('artists')}</Text>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div className='max-w-[510px]'>
// 					<CustomImage src='/hero-image.png' alt='Hero image' W={510} H={401} />
// 					<div className='py-[22px] px-[20px] mb-[40px] lg:mb-0 bg-[#3B3B3B] rounded-br-[20px] rounded-bl-[20px]'>
// 						<Heading tag='h3'>{('imageTitle')}</Heading>
// 						<div className='flex items-center gap-[12px] mt-[10px]'>
// 							<CustomImage
// 								src='/hero-avatar.svg'
// 								alt='Hero image'
// 								W={24}
// 								H={24}
// 							/>
// 							<Text classList='!text-[16px]'>Animakid</Text>
// 						</div>
// 					</div>
// 					<div className='lg:hidden'>
// 						<Button
// 							classList='!w-full'
// 							icon={<RoketaIcon />}
// 							iconPosition='left'
// 						>
// 							{('heroButton')}
// 						</Button>
// 						<div className='mt-[30px] flex items-center justify-between'>
// 							<div>
// 								<strong className='font-bold text-[28px] text-white'>
// 									{totalSale.length}+
// 								</strong>
// 								<Text classList='!text-[16px] sm:!text-[23px]'>
// 									{('totalSale')}
// 								</Text>
// 							</div>
// 							<div>
// 								<strong className='font-bold text-[28px] text-white'>
// 									{auctions.length}+
// 								</strong>
// 								<Text classList='!text-[16px] sm:!text-[23px]'>
// 									{('auctions')}
// 								</Text>
// 							</div>
// 							<div>
// 								<strong className='font-bold text-[28px] text-white'>
// 									{artists.length}+
// 								</strong>
// 								<Text classList='!text-[16px] sm:!text-[23px]'>
// 									{('artists')}
// 								</Text>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	)
// }

// export default HeroContent