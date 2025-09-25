import { FC, ReactNode,MouseEventHandler } from 'react'

interface ButtonType {
  classList?: string,
  iconPosition?: "left" | "right",
  children: ReactNode,
  icon?: ReactNode,
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonType> = ({ icon, iconPosition, children, classList, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={`${classList} bg-[#A259FF] cursor-pointer hover:bg-transparent hover:border-[2px] hover:border-[#A259FF] border-transparent border-[2px] hover:text-[#A259FF] duration-300  text-white font-semibold text-[16px] py-[20px] px-[30px] rounded-[20px] flex items-center justify-center gap-[16px]`}>
        {iconPosition === "left" && icon && icon}
        {children}
        {iconPosition === "right" && icon && icon}
      </button>
    </div>
  )
}

export default Button
