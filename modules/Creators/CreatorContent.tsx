import { CreatorType } from '@/@types/CreatorType'
// import  RocketIcon  from '@/assets/icons'
import { Button, CreatorCard, Heading, Text } from '@/components'
import { FC } from 'react'

const CreatorContent: FC<{ creators: CreatorType[] }> = ({ creators }) => {
	return (
		<section className='py-[80px]'>
			<div className='containers'>
				<div className='flex items-center justify-between mb-[60px]'>
					<div>
						<Heading classList='!mb-[10px]' tag='h2'>
							Top creators
						</Heading>
						<Text classList='!text-[22px]'>
							Checkout Top Rated Creators on the NFT Marketplace
						</Text>
					</div>
					<Button >
						View Rankings
					</Button>
				</div>
				<div className='flex items-center justify-between'>
					{creators.map((item, index) => (
						<CreatorCard key={item.id} item={item} index={index} />
					))}
				</div>
			</div>
		</section>
	)
}

export default CreatorContent