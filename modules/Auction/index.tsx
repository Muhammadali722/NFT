import { getRequest } from '@/server/getRequest'
import AuctionContent from './AuctionContent'

const Auctions = async () => {
	const auctions = await getRequest('/auctions')
	return <AuctionContent auctions={auctions.data[0]} />
}

export default Auctions