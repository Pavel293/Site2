import React, { FC, useEffect, useState } from 'react'
import Meta from '@/utils/meta/Meta'
import Hero from '@/screens/hero/Hero'
import styles from './Home.module.scss'
import { propoData } from '@/screens/home/promo-data'
import Decription from '@/screens/description/Description'
import Rate from '@/screens/rate/Rate'
import Link from 'next/link'
import Image from 'next/image'
import AccreditaionCompanyImage from '../../../assets/icons/AccreditationCompanyImage.svg'

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
			description="Бесплатный сервис для компаний и частных специалистов"
			image="home_preview.jpg"
		>
			<div
				className={styles.wrapper}
				itemScope
				itemType="http://schema.org/WebPage"
			>
				<Hero />
				<Decription />
				<Rate />

				<div className={styles.container}>
					<h1>
						Базовый бесплатный тариф
						<span>
							<br />
							уже включает в себя
						</span>
					</h1>
					<div className={styles.grid}>
						{propoData.map((item, index) => (
							<div className={styles.card} key={index}>
								<div className={styles.image}>{item.icon}</div>
								<div className={styles.text}>
									<h2>{item.title}</h2>
									<p>{item.description}</p>
								</div>
							</div>
						))}
					</div>
					<div className={styles.button}>
						<Link href="https://lk.telebon.ru/registration">
							Зарегистрироваться
						</Link>
					</div>
					<div className={styles.company}>
						<div className={styles.text}>
							<h2>В реестре аккредитованных ИТ-компаний</h2>
							<p>
								Используем методы шифрования данных. Все сервера находятся в ЦОД
								на территории России.
							</p>
						</div>
						<div className={styles.image}>
							<Image
								src={AccreditaionCompanyImage}
								alt={''}
								className={styles.icon}
							/>
						</div>
					</div>
				</div>
			</div>
			{showCookieBanner && (
				<noindex>
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
				</noindex>
			)}
			<link itemProp="url" href="https://telebon.ru" />
		</Meta>
	)
}

export default Home
