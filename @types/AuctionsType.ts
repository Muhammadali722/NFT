import { NFTType } from './NFTType'

export interface AuctionType {
	id: string
	description: string
	details: string[]
	tags: string[]
	endsAt: string
	createdAt: string
	updatedAt: string
	nftId: string
	nft: NFTType
	results: any[]
}