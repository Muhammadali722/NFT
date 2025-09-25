import Image from 'next/image'
import { FC } from 'react'

interface ImageType{
    classList?:string,
    W:number,
    H:number,
    src:string,
    alt:string
}

const CustomImage:FC<ImageType> = ({ classList, W, H, src, alt }) => {
    return <Image className={`${classList} w-[${W}px] h-[${H}px]`} src={src} alt={alt} width={W} height={H} priority />
}

export default CustomImage
