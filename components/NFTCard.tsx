import { NFTType } from '@/@types/NFTType'
import { FC } from 'react'
import CustomImage from './CustomImage'
import { API } from '@/hooks'
import Heading from './Heading'
import Text from './Text'
const NFTCard: FC<{ item: NFTType }> = ({ item }) => {
	return (
		<div className='w-[330px] cursor-pointer'>
			<div className='overflow-hidden'>
				<CustomImage classList='hover:scale-[1.2] duration-500' src={`${API}/file/${item.image}`} alt='NFT s Image' W={330} H={296}/>
			</div>
			<div className='rounded-md py-[20px] px-[30px] bg-[#3b3b3b]  overflow-hidden'>
				<Heading classList='!mb-[5px]'>{item.title}</Heading>
				<div className='flex items-center gap-[12px]'>
					<CustomImage classList='!rounded-full' src={`${API}/file/${item.creator.image}`} alt='Creator s Image' W={24} H={24} />
					<Text>{item.title}</Text>
				</div>
				<div className='flex justify-between mt-[25px]'>
					<div>
						<Text classList='!text-[15 px] !text-[#858584]'>Price</Text>
						<Text>{item.price} ETH</Text>
					</div>
					<div className='text-end'>
						<Text classList='!text-[15 px] !text-[#858584]'>Highest Bid</Text>
						<Text>0.33 wETH</Text>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NFTCard
