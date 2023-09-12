import { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import Hero from '@/screens/home/hero/Hero'

const Home: FC = () => {
	return (
		<Meta title="Главная" description="Главная страница сайта telebon...">
			<Hero />

			<div className="w-full h-24 bg-gray-700">sdgsdg</div>
		</Meta>
	)
}

export default Home
