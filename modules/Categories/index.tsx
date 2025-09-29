// import { getRequest } from '@/server/getRequest'
// import CategoriesContent from './CategoriesContent'

// const Categories = async () => {
// 	const categories = await getRequest('/categories')
// 	return <CategoriesContent categories={categories.data}/>
// }

// export default Categories

import { getRequest } from "@/server/getRequest"
import CategoriesContent from "./CategoriesContent"

const Categories = async () => {
  const categories = await getRequest("/categories")
  console.log(categories)

  return <CategoriesContent categories={categories.data} />
}

export default Categories
