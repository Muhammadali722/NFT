import React from 'react'
import NFTContent from './NFTContent'
import { getRequest } from '@/server/getRequest'

const NFT = async () => {
	const nft = await getRequest('/nfts')
	return <NFTContent nft={nft.data} />
}

export default NFT