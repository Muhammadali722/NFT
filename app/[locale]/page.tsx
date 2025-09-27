// import { Hero } from '@/modules'
// import HeroContent from '@/modules/Hero/HeroContent'
// import React from 'react'

// const page = () => {
//   return (
//     <main>
//       {/* <Hero/> */}
//       <HeroContent/>

//     </main>
//   )
// }

// export default page

import { Collections, Creator, Hero } from '@/modules'

export default function Home() {
	return (
		<main>
			<Hero />
			<Collections />
			<Creator />
		</main>
	)
}