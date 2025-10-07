import { Button, Heading, Text } from "@/components"
import { SearchIcon } from "@/icons"
import { MarketplaceNFT } from "@/modules"

const Marketplace = () => {
  return (
     <div className='containers !pt-[80px] !mb-[80px]'>
                <Heading tag='h1' classList='!text-[50px] '>Browse Marketplace</Heading>
                <Text classList='!text-[22px] !mb-[30px]'>Browse through more than 50k NFTs on the NFT Marketplace.</Text>
                <label className='flex mb-[40px] md!mb-[60px] lg!mb-[80px]'>
                    <input type='text' placeholder='Search your favourite NFTs' className='w-full max-w-[563px] !py-[12px] sm:!py-[19px] pl-[20px] pr-[60px] rounded-[20px] outline-none border border-gray-300' />
                    <Button classList='!bg-[#2B2B2B]'><SearchIcon/></Button>
                </label>
                <MarketplaceNFT/>
            </div>
  )
}

export default Marketplace
