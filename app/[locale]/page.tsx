
import { Categories, Collections, Creator, Hero } from '@/modules'

export default function Home() {
	return (
		<main>
			<Hero />
			<Collections />
			<Creator />
			<Categories/>
		</main>
	)
}