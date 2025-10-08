"use client"
import { useState, useEffect } from "react"
import { getRequest } from "@/server/getRequest"

interface AuctionType {
  id: string
  endsAt: string
  nft: {
    title: string
    image: string
  }
}

export default function AuctionCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAuction() {
      try {
        const response = await getRequest("/auctions")
        const auctions: AuctionType[] = response.data
        const auction = auctions[0]

        if (auction) {
          const endTime = new Date(auction.endsAt).getTime()

          const timer = setInterval(() => {
            const now = new Date().getTime()
            const distance = endTime - now

            if (distance <= 0) {
              clearInterval(timer)
              setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
              return
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            setTimeLeft({ days, hours, minutes, seconds })
          }, 1000)

          setLoading(false)
          return () => clearInterval(timer)
        }
      } catch (error) {
        console.error("Auction data fetch error:", error)
        setLoading(false)
      }
    }

    fetchAuction()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center p-4">
        <div className="animate-pulse bg-[#3B3B3B80] rounded-2xl w-full max-w-md h-32"></div>
      </div>
    )
  }

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-black/40 rounded-lg sm:rounded-xl p-2 sm:p-3 min-w-[50px] sm:min-w-[60px] md:min-w-[70px]">
        <div className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center tabular-nums">
          {String(value).padStart(2, "0")}
        </div>
      </div>
      <div className="text-white/70 text-xs sm:text-sm mt-1 sm:mt-2 font-medium">{label}</div>
    </div>
  )

  return (
    <div className="flex justify-center px-4 sm:px-6">
      <div className="w-full max-w-md lg:max-w-lg">
        <div className="bg-[#3B3B3B80] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl">
          <p className="text-white/90 text-sm sm:text-base font-semibold text-center mb-4 sm:mb-6">
            ⏳ Auction ends in:
          </p>

          <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
            {timeLeft.days > 0 && (
              <>
                <TimeBox value={timeLeft.days} label="Days" />
                <div className="text-white/50 text-lg sm:text-xl md:text-2xl pb-4">:</div>
              </>
            )}

            <TimeBox value={timeLeft.hours} label="Hours" />
            <div className="text-white/50 text-lg sm:text-xl md:text-2xl pb-4">:</div>
            <TimeBox value={timeLeft.minutes} label="Minutes" />
            <div className="text-white/50 text-lg sm:text-xl md:text-2xl pb-4">:</div>
            <TimeBox value={timeLeft.seconds} label="Seconds" />
          </div>

          {/* Responsive status text */}
          <div className="text-center">
            <p className="text-white/60 text-xs sm:text-sm">
              {timeLeft.days > 0
                ? `${timeLeft.days} days ${timeLeft.hours} hours remaining`
                : `${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s remaining`
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}