import { CategoryType } from '@/@types/Categories'
import { FC } from 'react'
import CustomImage from './CustomImage'
import { API } from '@/hooks'
import Heading from './Heading'

const CategoryCard: FC<{ item: CategoryType }> = ({ item }) => {
	return (
		<div className='w-[240px] cursor-pointer'>
			<div className='relative group'>
				<CustomImage
					classList='!rounded-tl-[20px] !rounded-tr-[20px] blur-sm group-hover:blur-none duration-500'
					src={`${API}/file/${item.image}`}
					alt='Category image'
					W={240}
					H={240}
				/>

				<CustomImage
					classList='!absolute top-0 left-0 right-0 bottom-0 m-auto group-hover:scale-0 duration-500'
					src={`${API}/file/${item.icon}`}
					alt='Category icon'
					W={100}
					H={100}
				/>
			</div>

			<div className='py-[20px] px-[30px] bg-[#3a3a3a] rounded-br-[20px] rounded-bl-[20px]'>
				<Heading>{item.name}</Heading>
			</div>
		</div>
	)
}

export default CategoryCard