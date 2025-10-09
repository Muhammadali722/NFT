import Link from "next/link"
import { CreatorType } from "@/@types/CreatorType"
import { FC } from "react"
import CustomImage from "./CustomImage"
import { API } from "@/hooks"
import Heading from "./Heading"
import Text from "./Text"

const CreatorCard: FC<{ item: CreatorType; index: number }> = ({item,index,}) => {
  return (
    <Link href={`/creator/${item.id}`} className=" mb-[40px] h-[100px] md:h-[330px] lg:h-[238px] w-[315px] md:w-[330px] lg:w-[240px] relative bg-[#3b3b3b] text-center flex md:flex-col rounded-[20px] px-[20px] py-[20px]  hover:scale-[1.03] transition-transform"
    >
      <CustomImage classList=" lg:!mb-[20px] lg:!mx-auto mr-[20px] " src={`${API}/file/${item.image}`} alt="Creator image" W={120} H={120}
      />
      <Heading classList="!mb-[5px]" tag="h3">{item.username}</Heading>
      <Text classList="!text-[16px]"><span className="text-[#858584]">Total Sales:</span> 34.53 ETH</Text>
      <button className="w-[30px] h-[30px] flex items-center justify-center bg-[#2b2b2b] rounded-full font-normal text-[16px] text-[#858584] absolute top-[18px] left-[20px]">
        {index + 1}
      </button>
    </Link>
  )
}

export default CreatorCard
