import { CollectionType } from '../../@types/CollectionType'
import { CollectionCard, Heading, Text } from '@/components'
import { FC } from 'react'

const CollectionContent: FC<{ collections: CollectionType[] }> = ({collections,}) => {
	return (
		<section className='py-[80px]'>
			<div className='containers'>
				<Heading classList='!mb-[10px] !text-[28px] sm:!text-[38px]' tag='h2'>
					Trending Collection
				</Heading>
				<Text classList='capitalize !text-[16px] lg:!text-[22px] !mb-[40px ] lg:!mb-[60px]'>
					Checkout our weekly updated trending collection.
				</Text>
				<div className='flex justify-center gap-[30px] lg:gap-0 lg:justify-between flex-wrap'>
					{collections.map(item => (
						<CollectionCard key={item.id} item={item} />
					))}
				</div>
			</div>
		</section>
	)
}

export default CollectionContent