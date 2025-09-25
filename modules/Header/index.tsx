import { Button, CustomImage } from "@/components"
import { HamburgerMenuIcon, SignUpIcon } from "@/icons"
import { useTranslations } from "next-intl"
import Link from "next/link"

const Header = () => {
  const t = useTranslations("headerContent")

  return (
    <div className="px-[30px] lg:px-[50px] py-[15px] lg:py-[20px] flex items-center justify-between">
      <Link href={"/"}>
        <CustomImage classList="!w-[182px] !h-[24px] lg:!w-[243px] lg:!h-[32px]" src="/site-logo.svg" alt="site-logo" W={243} H={32} />
      </Link>
      <div className="hidden lg:flex items-center gap-[30px]">
        <Link className="text-white hover:text-[#A259FF] duration-300 text-[16px] font-semibold" href={"/marketplace"}>{t("marketplace")}</Link>
        <Link className="text-white hover:text-[#A259FF] duration-300 text-[16px] font-semibold" href={"/rankings"}>{t("rankings")}</Link>
        <Link className="text-white hover:text-[#A259FF] duration-300 text-[16px] font-semibold" href={"/connect-wallet"}>{t("connectWallet")}</Link>
        <Button icon={<SignUpIcon/>} iconPosition="left">{t("signUp")}</Button>
      </div>
      <button className="cursor-pointer lg:hidden">
        <HamburgerMenuIcon/>
      </button>
    </div>
  )
}

export default Header
