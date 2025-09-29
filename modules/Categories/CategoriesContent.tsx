// import { CategoriesType } from '@/@types/Categories'
// import { CategoriesCard, Heading} from '@/components'
// import { FC } from 'react'

// const CategoriesContent: FC<{ categories: CategoriesType[] }> = ({categories}) = () => {
//   return (
//     <section className='py-[80px]'>
// 			<div className='containers'>
// 				<Heading classList='!mb-[10px] !text-[28px] sm:!text-[38px]' tag='h2'>
//         Browse Categories
// 				</Heading>
				
// 				<div className='flex justify-center gap-[30px] lg:gap-0 lg:justify-between flex-wrap'>
// 					{categories.map(item => (
// 						<CategoriesCard key={item.id} item={item} />
// 					))}
// 				</div>
// 			</div>
// 		</section>
//   )
// }

// export default CategoriesContent


import { FC } from "react"
import { CategoriesType } from "@/@types/Categories"
import CategoriesCard from "../../components/categoriesCard"

const CategoriesContent: FC<{ categories: CategoriesType[] }> = ({ categories }) => {
  return (
    <section className="py-[80px]">
      <div className="containers">
        <h2 className="text-white text-[28px] sm:text-[38px] font-bold mb-6">
          Browse Categories
        </h2>

        <div className="flex justify-center gap-[30px] lg:gap-0 lg:justify-between flex-wrap">
          {categories.map((item, index) => (
            <CategoriesCard key={index} item={item} />
          ))}
          
        </div>
      </div>
    </section>
  )
}

export default CategoriesContent
