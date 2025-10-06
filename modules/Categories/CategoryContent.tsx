import { CategoryType } from '@/@types/Categories'
import { CategoryCard, Heading } from '@/components'
import { FC } from 'react'

const CategoryContent: FC<{ categories: CategoryType[] }> = ({
	categories,
}) => {
	return (
		<section className='py-[80px]'>
			<div className='containers'>
				<Heading classList='!mb-[60px]' tag='h2'>
					Browse Categories
				</Heading>
				<div className='flex justify-between flex-wrap'>
					{Object.entries(categories).map(([key, item]) => (
						<CategoryCard key={key} item={item} />
					))}
				</div>
			</div>
		</section>
	)
}

export default CategoryContent