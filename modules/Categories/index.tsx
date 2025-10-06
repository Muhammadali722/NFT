import { getRequest } from '@/server/getRequest'
import CategoryContent from './CategoryContent'

const Categories = async () => {
	const categories = await getRequest('/categories')
	return <CategoryContent categories={categories.data} />
}

export default Categories