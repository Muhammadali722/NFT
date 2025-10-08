import { MessageIcon } from "@/icons"
import Button from "./Button"

const SendEmail = ({ showIcon }: { showIcon?: boolean }) => {
  return (
    <form autoComplete="off" className="w-full space-y-[16px] sm:space-y-0 relative">
      <input name="email" type="email" required className="w-full py-[12px] sm:py-[19px] pr-[10px] sm:pr-[200px] pl-[20px] bg-white outline-none rounded-[20px]" placeholder="Enter your email here" />
      <Button icon={showIcon && <MessageIcon />} iconPosition="left" classList="!w-full sm:!w-auto sm:absolute top-0 right-0 bottom-0 !px-[50px] !py-[12px] sm:!py-[19px]">Subscribe</Button>
    </form>
  )
}

export default SendEmail
