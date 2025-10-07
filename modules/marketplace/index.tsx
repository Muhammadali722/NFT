import React from 'react'
import MarketplaceContent from './MarketplaceContent'
import { getRequest } from '@/server/getRequest'

const MarketplaceNFT = async () => {
	const nft = await getRequest('/nfts')
	return <MarketplaceContent nft={nft.data} />
}

export default MarketplaceNFT