import { getRequest } from '../../server/getRequest'
import HeroContent from './HeroContent'

const Hero = async () => {
  try {
    const auctions = await getRequest("/auctions")
    const artists = await getRequest("/user?role=ARTIST")
    const totalSale = await getRequest("/auction-results")

    return (
      <HeroContent
        totalSale={totalSale?.data || []}
        artists={artists?.data || []}
        auctions={auctions?.data || []}
      />
    )
  } catch (error) {
    console.error("Hero component error:", error)

    return (
      <div className="text-red-500 text-center p-4">
        Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.
      </div>
    )
  }
}

export default Hero
