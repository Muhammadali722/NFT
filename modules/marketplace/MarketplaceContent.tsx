import { NFTType } from '@/@types/NFTType'
import { NFTCard } from '@/components'
import  { FC } from 'react'

const MarketplaceContent: FC<{ nft: NFTType[] }> = ({ nft }) => {
    console.log(nft)
  return (
    <div>
        <div className='flex flex-wrap justify-between'>
					{Object.entries(nft).map(([key, item]) => (<NFTCard key={key} item={item} />))}
	    </div>
    </div>
  )
}

export default MarketplaceContent
