export interface CollectionType {
	id: string
	title: string
	images: string[]
	price: string
	highestBid: null | any
	createdAt: string
	updatedAt: string
	creatorId: string
	creator: {
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
}