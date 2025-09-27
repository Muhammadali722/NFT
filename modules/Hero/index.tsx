import { getRequest } from '../../server/getRequest'
import HeroContent from './HeroContent'


const Hero = async () => {
  const auctions = await getRequest("/auctions")
  const artists = await getRequest("/user?role=ARTIST")
  const totalSale = await getRequest("/auction-results")
  return <HeroContent totalSale={totalSale.data} artists={artists.data} auctions={auctions.data} />
}

export default Hero