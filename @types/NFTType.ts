import { CreatorType } from './CreatorType'

export interface NFTType {
	id: string
	title: string
	image: string
	price: string
	highestBid: any
	createdAt: string
	updatedAt: string
	creatorId: string
	ownerId: string
	creator: CreatorType
	owner: {
		id: string
		username: string
		email: string
		password: string
		image: string
		role: string
		bio: string
		globeAccLink: string
		discordAccLink: string
		youtubeAccLink: string
		twitterAccLink: string
		instagramAccLink: string
		createdAt: string
		updatedAt: string
	}
	auctions: any[]
}