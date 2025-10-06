import { NFTType } from '@/@types/NFTType'
import { Button, Heading, NFTCard, Text } from '@/components'
import { FC } from 'react'

const NFTContent: FC<{ nft: NFTType[] }> = ({ nft }) => {
	console.log(nft)
	return (
		<section className='py-[80px]'>
			<div className='containers'>
				<div className='flex justify-between items-center mb-[60px]'>
					<div>
						<Heading classList='!mb-[10px]' tag='h2'>
							Discover More NFTs
						</Heading>
						<Text classList='!text-[22px]'>Explore new trending NFTs</Text>
					</div>
					<Button 
                    iconPosition='left'>
						See All
					</Button>
				</div>
				<div className='flex flex-wrap justify-between'>
					{Object.entries(nft).map(([key, item]) => (
						<NFTCard key={key} item={item} />
					))}
				</div>
			</div>
		</section>
	)
}

export default NFTContent