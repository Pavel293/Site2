import { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import Hero from '@/screens/home/hero/Hero'
import Heading from '@/ui/heading/Heading'
import styles from './Home.module.scss'
import { motion } from 'framer-motion'
import { propoData } from '@/screens/home/promo-data'
import { fadeIn, staggerContainer } from '@/utils/motion'

const Home: FC = () => {
	return (
		<Meta title="Главная" description="Главная страница сайта telebon...">
			<div className="flex flex-col gap-[160px]">
				<Hero />

				<div>
					<Heading
						className="flex flex-col items-center"
						titlePart1="Управляйте бизнесом"
						titlePart2="по-новому"
					/>

					<motion.div
						variants={staggerContainer()}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0.25 }}
						className={styles.grid}
					>
						{propoData.map((item, index) => (
							<motion.div
								variants={fadeIn('up', 'spring', index * 0.2, 1.35)}
								key={index}
								className={styles.card}
							>
								<div className={styles.card2}>
									{item.icon}
									<div className={styles.info}>
										<h4>{item.title}</h4>
										<p>{item.description}</p>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</Meta>
	)
}

export default Home
