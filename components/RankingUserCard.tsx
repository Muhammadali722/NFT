"use client"
import React, { useEffect, useState } from "react"
import Text from "./Text"
import CustomImage from "./CustomImage"
import { CreatorType } from "../@types/CreatorType"
import { getRequest } from "@/server/getRequest"
import { API } from "@/hooks" // agar API shu joyda export qilingan bo‘lsa

const RankingUserCard = () => {
  const [users, setUsers] = useState<CreatorType[]>([])
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getRequest("/user?role=ARTIST")
      if (response?.data && Array.isArray(response.data)) {
        setUsers(response.data)
      } else {
        console.warn("Unexpected API response:", response)
        setUsers([])
      }
    }
    fetchUsers()
  }, [])
  
  return (
    <div className="mt-[40px]">
      <div className="containers">
        {/* Header */}
        <div className="flex justify-between text-center mb-[20px] rounded-full border border-[#3B3B3B] py-[13px] px-[20px]">
          <Text classList="flex gap-5">
            <span>#</span>Artist
          </Text>
          <div className="flex gap-[130px] !pl-[150px]">
            <Text>Email</Text>
            <Text>NFTs count</Text>
            <Text>Value</Text>
          </div>
        </div>

        {/* User list */}
        {users.map((user, index) => {
          const totalValue = user.createdNFTs?.reduce(
            (sum: number, nft: any) => sum + parseFloat(nft.price || 0),
            0
          ) || 0

          return (
            <div
              key={user.id}
              className="relative mb-[40px] flex justify-between items-center  border border-[#3B3B3B] rounded-full py-[13px] px-[20px]"
            >
              {/* Rank number */}
              <button className="w-[30px] h-[30px] flex items-center justify-center bg-[#2b2b2b] rounded-full font-normal text-[16px] text-[#858584] absolute top-[18px] left-[20px]">
                {index + 1}
              </button>

              {/* User info */}
              <div className="flex items-center gap-[15px] pl-[60px]">
                <CustomImage
                  classList="rounded-full"
                  src={
                    user.image
                      ? `${API}/file/${user.image}`
                      : "/default-avatar.png"
                  }
                  alt={user.username}
                  W={60}
                  H={60}
                />
                <Text>{user.username}</Text>
              </div>

              {/* User stats */}
              <div className="flex gap-[150px] items-center">
                <Text>{user.email}</Text>
                <Text>{user.createdNFTs?.length || 0}</Text>
                <Text>${totalValue.toFixed(2)}</Text>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RankingUserCard


