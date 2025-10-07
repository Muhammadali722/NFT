import { Button, CustomImage, Heading, Text } from "@/components"
import { DisCordIcon, InstagramIcon, TwetterIcon, YouTubeIcon } from "@/icons"
import { getRequest } from "@/server/getRequest"
import { FC } from "react"
const SingleCreator: FC<{ params: { id: string } }> = async ({ params }) => {
  const { id } = params
  const SingleData = await getRequest(`/user/${id}`) // 🔹 backtick ishlatildi
  console.log(SingleData)
  return (
    <section>
      <div className="">
        <div className="Users-infoBackground">
          <CustomImage
          src={SingleData?.image}
          alt="Users Picture"
          W={120}
          H={120}
          />
        </div>
        <div className="p-20">
          {/* Name */}
          <div className="flex items-center justify-between">
            <Heading> {SingleData?.username} </Heading>
            <div className="flex">
              <Button classList="mr-5"> {SingleData?.id} it should't be a lot just 10-11 words are enough </Button>
              <Button>Follow</Button>
            </div>
          </div>
          {/* Bio */}
          <div>
          <div className='pt-[30px] flex items-center gap-[30px]'>
              <div>
                <strong className='font-bold text-white text-[28px]'> 129 +</strong>  
                <Text classList='!text-[23px]'>Volume</Text>
              </div>
              <div>
                <strong className='font-bold text-white text-[28px]'>99 +</strong>
                <Text classList='!text-[23px]'>NFTs Sold</Text>
              </div>
              <div>
                <strong className='font-bold text-white text-[28px]'>440 +</strong>
                <Text classList='!text-[23px]' >  Followers</Text>
              </div>
            </div>
            <div className="mt-10 flex flex-col">
              <Text>Bio</Text>
              <Text classList="max-w-2xl mt-5"> {SingleData?.bio} </Text>
            </div>
          {/* Social Media Links */}
          <div className="flex flex-col mt-10 gap-5 ">
            <Text>Links</Text>
            <div className="flex items-center gap-5">
              <DisCordIcon/>
              <YouTubeIcon/>
              <TwetterIcon/>
              <InstagramIcon/>
            </div>
          </div>
          </div>
        </div>
        {/* Details about NFT */}
        <div>
          <div className="flex items-center justify-center gap-20 border-b border-b-[#858584] pb-5">
            <Text classList="text-[#858584] text-[22px] hover:text-white hover:border-b-1 hover-border-b-[#858584] ">Created</Text>
            <Text classList="text-[#858584] text-[22px] hover:text-white hover:border-b-1 hover-border-b-[#858584] ">Owned</Text>
            <Text classList="text-[#858584] text-[22px] hover:text-white hover:border-b-1 hover-border-b-[#858584] ">Collection</Text>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SingleCreator