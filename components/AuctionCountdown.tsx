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
        // 🔹 Backend’dan auction ma’lumotini olish
        const response = await getRequest("/auctions") // kerakli endpoint
        const auctions: AuctionType[] = response.data

        // Misol uchun 1-auktsionni olayapmiz
        const auction = auctions[0]

        // 🔹 Tugash vaqtini ISO dan Date formatiga o‘tkazamiz
        const endTime = new Date(auction.endsAt).getTime()

        // 🔹 Har 1 sekundda qayta hisoblaymiz
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
      } catch (error) {
        console.error("Auction data fetch error:", error)
      }
    }

    fetchAuction()
  }, [])

  if (loading)
    return (
      <div className="text-white text-center py-10">Loading auction timer...</div>
    )

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-sm">
        <div className="bg-[#3B3B3B80] rounded-3xl p-8 shadow-2xl">
          <p className="text-white/90 text-sm font-medium mb-6">Auction ends in:</p>

          <div className="flex items-center justify-center gap-4 mb-6">
            {timeLeft.days > 0 && (
              <>
                <div className="flex flex-col items-center">
                  <div className="text-white font-bold text-6xl tabular-nums">
                    {String(timeLeft.days).padStart(2, "0")}
                  </div>
                  <div className="text-white/70 text-xs font-medium mt-2">Days</div>
                </div>
                <div className="text-white font-bold text-6xl pb-6">:</div>
              </>
            )}

            <div className="flex flex-col items-center">
              <div className="text-white font-bold text-6xl tabular-nums">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <div className="text-white/70 text-xs font-medium mt-2">Hours</div>
            </div>

            <div className="text-white font-bold text-6xl pb-6">:</div>

            <div className="flex flex-col items-center">
              <div className="text-white font-bold text-6xl tabular-nums">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <div className="text-white/70 text-xs font-medium mt-2">Minutes</div>
            </div>

            <div className="text-white font-bold text-6xl pb-6">:</div>

            <div className="flex flex-col items-center">
              <div className="text-white font-bold text-6xl tabular-nums">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
              <div className="text-white/70 text-xs font-medium mt-2">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
