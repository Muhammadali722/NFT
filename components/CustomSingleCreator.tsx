"use client"
import { useState } from "react"
import { API } from "@/hooks"
import { CreatorType } from "@/@types/CreatorType"
import { Button, CustomImage, Heading, Text } from "@/components"
import { DisCordIcon, InstagramIcon, TwetterIcon, YouTubeIcon } from "@/icons"
export const CustomSingleCreator = ({ creator }: { creator: CreatorType }) => {
  const [activeTab, setActiveTab] = useState<'created' | 'owned' | 'collections'>('created')
  const renderNFTs = (list: any[], emptyText: string) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
      {list?.length > 0 ? (
        list.map((nft) => (
          <div key={nft.id} className='w-full max-w-[330px] mx-auto cursor-pointer'>
            <div className='overflow-hidden rounded-[15px]'>
              <CustomImage classList='hover:scale-[1.1] duration-500 w-full h-auto' src={nft.image ? `${API}/file/${nft.image}` : "/default-nft.png"} alt={nft.title} W={330} H={296}
              />
            </div>
            <div className='py-[20px] px-[25px] bg-[#3b3b3b] rounded-[15px] mt-2'>
              <Heading tag="h3" classList='!mb-[5px] text-lg truncate'>{nft.title}</Heading>
              <div className='flex justify-between mt-[20px]'>
                <div>
                  <Text classList='text-[#858584] text-[15px]'>Price</Text>
                  <Text classList="text-sm">{nft.price || "0"} ETH</Text>
                </div>
                <div className='text-end'>
                  <Text classList='text-[#858584] text-[15px]'>Highest Bid</Text>
                  <Text classList="text-sm">{nft.highestBid ? `${nft.highestBid} wETH` : "—"}</Text>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center py-10">
          <Text classList="text-[#858584] text-lg">{emptyText}</Text>
        </div>
      )}
    </div>
  )
  const renderCollections = (list: any[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
      {list?.length > 0 ? (
        list.map((col) => (
          <div key={col.id} className='w-full max-w-[330px] mx-auto'>
            <div className='overflow-hidden rounded-[20px]'>
              <CustomImage classList='hover:scale-[1.05] duration-500 w-full h-auto' src={col.images?.[0] ? `${API}/file/${col.images[0]}` : "/default-collection.png"} alt={col.title} W={330} H={330}
              />
            </div>
            {/* Collection additional images */}
            {col.images && col.images.length > 1 && (
              <div className='flex justify-between gap-2 mt-[15px]'>
                {col.images.slice(1, 3).map((img: string, index: number) => (
                  <CustomImage key={index} src={`${API}/file/${img}`} alt={`${col.title} ${index + 2}`} W={100} H={100} classList='rounded-[15px] flex-1 object-cover'
                  />
                ))}
                {col.images.length > 3 && (
                  <button className='w-full min-w-[100px] h-[100px] flex justify-center items-center bg-[#A259FF] rounded-[15px] font-bold text-white text-sm'>+{Math.max(0, col.images.length - 3)}
                  </button>
                )}
              </div>
            )}
            <Heading tag="h3" classList='!mt-[10px] text-lg truncate'>{col.title}</Heading>
            <Text classList="text-[#858584] text-sm mt-1">
              {col.images?.length || 0} items • {col.price || "0"} ETH
            </Text>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center py-10">
          <Text classList="text-[#858584] text-lg">This guy has't got any collections </Text>
        </div>
      )}
    </div>
  )
  return (
    <section className="mx-auto relative text-white">
      {/* Creator Info - Responsive */}
      <div className="Users-infoBackground relative !w-full"></div>
      <div className="containers flex md:flex-row items-center gap-6 md:gap-10 mb-8 md:mb-12">
        <CustomImage src={creator.image ? `${API}/file/${creator.image}` : "/default-avatar.png"} alt={creator.username} W={120} H={120} classList="absolute  md:left-[72px] left-[189px] top-[250px] lg:left-[72px] md:top-[210px] lg:top-[210px] rounded-full border-2 border-[#A259FF] w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
        />
        <div className="md:text-left mt-[70px] md:mt-[80px] lg:mt-[80px] text-start items-start">
          <Heading tag="h1" classList="!text-2xl md:!text-3xl lg:!text-4xl mb-2 md:mb-3">
            {creator.username}
          </Heading>
          <div className="flex flex-col md:hidden lg:hidden justify-between items-center text-center gap-[20px] mt-[30px]">
            <Button classList="w-[315px] h-[60px]" >{creator.id.slice(-11)}</Button>
            <Button classList="w-[315px] h-[60px]" iconPosition="left">Follow</Button>
          </div>
          {/* About Creator */}
          <div>
            <Text classList="mt-[30px] mb-[10px]">Bio</Text>
            <Text classList="text-[#b0b0b0] text-sm md:text-base lg:text-lg mb-2 md:mb-3 line-clamp-2">
              {creator.bio || "No bio available"}
            </Text>
            <div className=" mt-4">
              <Text>Links</Text>
              <div className="flex gap-4 mt-2 hover:opacity-100 opacity-25 duration-200 scale-[1.02] cursor-pointer ">
                <InstagramIcon />
                <DisCordIcon />
                <TwetterIcon />
                <YouTubeIcon />
              </div>
            </div>
          </div>
          {/* Stats */}
          {/* PC */}
          <div className="hidden md:flex lg:flex justify-between items-center text-center gap-[20px] mt-[30px]">
            <Button>{creator.id.slice(-11)}</Button>
            <Button iconPosition="left">Follow</Button>
          </div>
        </div>
      </div>
      <div className="justify-center md:justify-center lg:justify-center text-center items-center mt-[20px] flex gap-4 md:gap-6 border-b border-[#3b3b3b] pb-4 overflow-x-auto">
        {[
          { key: 'created' as const, label: 'Created NFTs' },
          { key: 'owned' as const, label: 'Owned NFTs' },
          { key: 'collections' as const, label: 'Collections' }].map((tab) => (
          <button key={tab.key} onClick={() => setActiveTab(tab.key)} className={`whitespace-nowrap text-base md:text-[18px] capitalize pb-2 px-1 transition-all min-w-max ${activeTab === tab.key ? "border-b-2 border-[#A259FF] text-white font-semibold" : "text-[#858584] hover:text-white"}`}
          >{tab.label} 
          </button>))}
          {/* Active is not working wwwwwhyyyyyy */}
      </div>
      {/* Content */}
      <div className="mt-6 md:mt-8">
        {activeTab === "created" && renderNFTs(creator.createdNFTs || [], "This guy has no Created NFTs.")}
        {activeTab === "owned" && renderNFTs(creator.ownedNFTs || [], "This guy has no owned NFTs.")}
        {activeTab === "collections" && renderCollections(creator.collections || [])}
      </div>
    </section>
  )
}