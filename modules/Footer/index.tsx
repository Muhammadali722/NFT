import { CustomImage, Heading, Input, Text } from "@/components"
import { DisCordIcon, InstagramIcon, TwetterIcon, YouTubeIcon } from "@/icons"
import Link from "next/link"
import { ReactNode } from "react"

const Footer = () => {
    const mediaList = [< DisCordIcon />, <YouTubeIcon />, <TwetterIcon />, <InstagramIcon />]
    return (
        <footer className="bg-[#3B3B3B] py-[30px]">
            <div className="containers">
                <div className="flex flex-col gap-[30px] lg:gap-0 lg:flex-row justify-between pb-[30px] border-b-[1px] border-[#858584] mb-[20px]">
                    <div className="max-w-[243px] ">
                        <Link href={"/"}>
                            <CustomImage classList="!mb-[20px] sm:!mb-[30px]" src="/site-logo.svg" alt="site logo" W={243} H={32} />
                        </Link>
                        <Text classList="!mb-[20px]">NFT marketplace UI created with Anima for Figma.</Text>
                        <Text classList="!mb-[15px]">Join our community</Text>
                        <div className="flex gap-[10px] items-center text-[#858584]">
                            {mediaList.map((item: ReactNode, index: number) => <Link className="hover:scale-[1.2] duration-300" key={index + 1} href={"/"}>{item}</Link>)}
                        </div>
                    </div>
                    <div className="max-w-[240px]">
                        <Heading>Explore</Heading>
                        <div className="flex flex-col gap-[20px] mt-[25px]">
                            <Link href={"/marketplace"}><Text>Marketplace</Text></Link>
                            <Link href={"/rankings"}><Text>Rankings</Text></Link>
                            <Link href={"/connect-wallet"}><Text>Connect a wallet</Text></Link>
                        </div>
                    </div>
                    <div className="w-full sm:w-[420px]">
                        <Heading classList="mb-[25px]">Join our weekly digest</Heading>
                        <Text classList="mb-[20px] max-w-[330px]">Get exclusive promotions & updates straight to your inbox.</Text>
                        {/* <SendEmail/> */}
                        <Input showIcon={false} />
                    </div>
                </div>
                <Text classList="!text-[12px] font-normal">Ⓒ NFT Market. Use this template freely.</Text>
            </div>
        </footer>
    )
}

export default Footer
