import { NFTType } from '@/@types/NFTType'
import { Button, Heading, NFTCard, Text } from '@/components'
import Link from 'next/link'
import { FC } from 'react'

const NFTContent: FC<{ nft: NFTType[] }> = ({ nft }) => {
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
					<Link className='hidden md:block lg:block' href={'/marketplace'}><Button iconPosition='left'>See All</Button>
					</Link>
				</div>
				<div className='flex flex-wrap md:gap-[30px] lg:gap-[30px] gap-[20px] justify-center md:justify-between lg:justify-between px-[30px]'>
					{Object.entries(nft).map(([key, item]) => (
						<NFTCard key={key} item={item} />
					))}
					<Link className='!justify-center !mx-auto items-center !text-center block md:hidden lg:hidden mt-[40px]'
						href={'/marketplace'}>
						<Button classList='w-[315px] h-[60px]'
							iconPosition='left'>See All</Button>
					</Link>
				</div>

			</div>
		</section>
	)
}

export default NFTContent