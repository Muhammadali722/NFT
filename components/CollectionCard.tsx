import { CollectionType } from '@/@types/CollectionType'
import { FC } from 'react'
import CustomImage from './CustomImage'
import  API  from '@/hooks'
import Heading from './Heading'
import Text from './Text'

const CollectionCard: FC<{ item: CollectionType }> = ({ item }) => {
	return (
		<div className='w-full sm:w-[330px]'>
			<div className='overflow-hidden rounded-[20px] w-full sm:w-[330px] sm:h-[330px]'>
				<CustomImage
					classList='hover:scale-[1.05] mx-auto duration-500'
					src={`${API}/file/${item.images[0]}`}
					alt='Card image'
					W={330}
					H={330}
				/>
			</div>
			<div className='flex justify-between mt-[15px]'>
				<div className='overflow-hidden rounded-[20px]'>
					<CustomImage
						classList='!w-[100px] !h-[100px] hover:scale-[1.05] duration-500'
						src={`${API}/file/${item.images[1]}`}
						alt='Card image'
						W={100}
						H={100}
					/>
				</div>
				<div className='overflow-hidden rounded-[20px]'>
					<CustomImage
						classList='!w-[100px] !h-[100px] hover:scale-[1.05] duration-500'
						src={`${API}/file/${item.images[2]}`}
						alt='Card image'
						W={100}
						H={100}
					/>
				</div>
				<button className='w-[100px] h-[100px] flex justify-center items-center bg-[#A259FF] rounded-[20px] cursor-pointer font-bold text-white text-[22px]'>
					{item.images.length}+
				</button>
			</div>
			<div className=''>
				<Heading classList='!mb-[10px]' tag='h3'>
					{item.title}
				</Heading>
				<div className='flex items-center gap-[12px] mt-[15px]'>
					<CustomImage
						src={`${API}/file/${item.creator.image}`}
						alt='Creator image'
						W={24}
						H={24}
					/>
					<Text>{item.creator.username}</Text>
				</div>
			</div>
		</div>
	)
}

export default CollectionCard