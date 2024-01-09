import React, { FC, useEffect, useState } from 'react'
import Meta from '@/utils/meta/Meta'
import Hero from '@/screens/hero/Hero'
import styles from './Home.module.scss'
import { propoData } from '@/screens/home/promo-data'
import Decription from '@/screens/description/Description'
import Support from '@/screens/support/Support'
import Rate from '@/screens/rate/Rate'
import Link from 'next/link'

const Home: FC = () => {
	const [showCookieBanner, setShowCookieBanner] = useState<boolean>(true)

	useEffect(() => {
		const hasAcceptedCookies = document.cookie.includes(
			'hasAcceptedCookies=true',
		)
		if (hasAcceptedCookies) {
			setShowCookieBanner(false)
		}
	}, [])

	const handleAcceptCookies = () => {
		document.cookie =
			'hasAcceptedCookies=true; expires=Fri, 31 Dec 9999 23:59:59 GMT'
		setShowCookieBanner(false)
	}
	return (
		<Meta
			title="Онлайн система записи"
			description="Главная страница сайта telebon..."
		>
			<div className={styles.wrapper}>
				{showCookieBanner && (
					<div className={styles.cookieContainer}>
						<p>
							Продолжая использовать наш сайт, вы даете{' '}
							<Link href="/info/cookie">
								<span>согласие на использование файлов «cookie»</span>
							</Link>
							. Если вы не хотите, чтобы ваши данные обрабатывались, измените
							настройки браузера.
						</p>
						<button onClick={handleAcceptCookies}>ОК</button>
					</div>
				)}
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
