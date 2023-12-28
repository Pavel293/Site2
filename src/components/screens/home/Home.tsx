import React, { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import Hero from '@/screens/hero/Hero'
import styles from './Home.module.scss'
import { propoData } from '@/screens/home/promo-data'
import Decription from '@/screens/description/Description'
import Support from '@/screens/support/Support'
import Rate from '@/screens/rate/Rate'

const Home: FC = () => {
	return (
		<Meta title="Главная" description="Главная страница сайта telebon...">
			<div className={styles.wrapper}>
				<Hero />
				<Decription />
				<Support />
				<Rate />

				<div>
					<div className={styles.grid}>
						{propoData.map((item, index) =>
							index <= 5 ? (
								<div key={index} className={styles.card}>
									<div className={styles.iconWrapper}>
										<div className={styles.circle}>
											<div className={styles.icon}>{item.icon}</div>
										</div>
									</div>
									<div className={styles.info}>
										<h4>{item.title}</h4>
										<p>{item.description}</p>
									</div>
								</div>
							) : (
								<div key={index} className={styles.card}>
									<div className={styles.iconWrapperSoon}>
										<div className={styles.icon}>{item.icon}</div>
									</div>
									<div className={styles.info}>
										<h4>{item.title}</h4>
										<p>{item.description}</p>
									</div>
								</div>
							),
						)}
					</div>
				</div>
			</div>
		</Meta>
	)
}

export default Home
