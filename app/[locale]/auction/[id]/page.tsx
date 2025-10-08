import { API } from "@/hooks"
import { getRequest } from "@/server/getRequest"
import { CustomImage, Heading, Text, AuctionCountdown } from "@/components"
import { FC } from "react"
const SingleAuctionPage: FC<{ params: { id: string } }> = async ({ params }) => {
  const { id } = params
  const auction = await getRequest(`/auctions/${id}`)
  const nft = auction?.nft
  const creator = nft?.creator
  console.log(auction)
  console.log(nft);



  if (!auction || !nft) {
    return (
      <section className="py-20 text-center text-white">
        <Heading tag="h2">Auction not found</Heading>
      </section>
    )
  }
  return (
    <section className="">
      <div className="">
        <CustomImage src={`${API}/file/${nft.image}`} alt={nft.title} classList="cover !w-full !h-[320px] md:!h-[420px] lg:!h-[560px]" W={600} H={500} />
        <div className="containers mt-10">
          <Heading tag="h2" classList="!text-[36px] !mb-5">{nft.title}</Heading>
          <Text classList="!text-[18px] !mb-8 text-[#ccc]">{auction.createdAt}</Text>
          <div className="flex items-center gap-4 justify-between">
            <div className="">
              <div>
                <Text classList="!text-[16px] text-[#aaa]">Created by</Text>
                <CustomImage src={`${API}/file/${nft.creator?.username || "Someone"}`} alt={creator?.username || ""} W={24} H={24} />
                <Text classList="!text-[18px]">{creator?.id}</Text>
              </div>
              <div className="!block md:!hidden lg:!hidden flex-col md:flex-row items-start md:items-center gap-5 mt-0">
                {/* <Button classList="!bg-[#A259FF] !text-white !px-[40px] !py-[12px]">Place a Bid</Button> */}
                <AuctionCountdown />
              </div>

              <div>
                <Heading tag="h3">Description</Heading>
                <Text classList="!text-[18px] text-[#ccc]">{auction.description}</Text>
              </div>
              <div className="mt-5">
                <Heading tag="h3" classList="!text-[28px] !mb-5">Details</Heading>
                {auction.details?.length ? (
                  <ul className="list-disc list-inside text-[#ccc] text-[18px]">
                    {auction.details.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <Text>No additional details provided.</Text>
                )}
              </div>
              {auction.tags?.length > 0 && (
                <div className="mb-8 mt-5 flex flex-wrap gap-3">
                  {auction.tags.map((tag: string, i: number) => (
                    <span key={i} className="bg-[#3b3b3b] px-4 py-2 rounded-full text-sm text-[#a3a3a3]"> #{tag}
                    </span>))}
                </div>)}
            </div>
            <div className="!hidden md:!block lg:!block flex-col md:flex-row items-start md:items-center gap-5 mt-0">
              {/* <Button classList="!bg-[#A259FF] !text-white !px-[40px] !py-[12px]">Place a Bid</Button> */}
              <AuctionCountdown />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
export default SingleAuctionPage
