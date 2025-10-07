import Link from "next/link";
import { AuctionType } from '@/@types/AuctionsType'
import { AuctionCountdown, Button, CustomImage, Heading } from '@/components'
import { API } from '@/hooks'
import { FC } from 'react'

const AuctionContent: FC<{ auctions: AuctionType }> = ({ auctions }) => {
	return (
		<section
			style={{
				backgroundImage: `url(${API}/file/${auctions.nft.image})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundAttachment: 'fixed',
			}}
			className='py-[80px] h-[660px] flex items-end relative'
		>
			<div className='containers !w-full flex justify-between items-end'>
				<div>
					<button className='mb-[30px] flex items-center gap-[12px] text-white bg-[#3b3b3b] py-[10px] px-[20px] rounded-[20px]'>
						<CustomImage
							src={`${API}/file/${auctions.nft.creator.image}`}
							alt='Creator image'
							W={24}
							H={24}
						/>
						{auctions.nft.creator.username}
					</button>
					<Heading classList='!mb-[30px]'>{auctions.nft.title}</Heading>

					<Link href={`/auction/${auctions.id}`}>
						<Button classList='!bg-white !text-black !px-[50px]' iconPosition='left'>
							See NFT
						</Button>
					</Link>
				</div>

				<AuctionCountdown />
			</div>
		</section>
	)
}

export default AuctionContent
