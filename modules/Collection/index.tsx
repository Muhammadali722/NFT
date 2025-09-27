import { getRequest } from '@/server/getRequest'
import CollectionContent from './CollectionContent'

const Collections = async () => {
	const collections = await getRequest('/collections')
	return <CollectionContent collections={collections.data} />
}

export default Collections