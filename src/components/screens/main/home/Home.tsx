import React, { FC, useRef } from 'react'
import Meta from '@/utils/meta/Meta'
import Hero from '@/screens/main/hero/Hero'
import styles from './Home.module.scss'
import Decription from '@/screens/main/description/Description'
import Rate from '@/screens/main/rate/Rate'
import Import from '@/screens/main/import/Import'
import Partner from '@/screens/main/partner/Partner'
import Tarif from '@/screens/main/tarif/Tarif'
import AboutUs from '@/screens/main/aboutus/AboutUs'
import Support from '@/screens/main/support/Support'

const Home: FC = () => {
	const nextBlockRef = useRef<HTMLDivElement>(null)
	return (
		<Meta
			title="Telebon CRM"
			description="Новый сервис онлайн-записи с возможностью записи Клиентов в Telegram"
			image="logo_preview.png"
		>
			<div
				className={styles.wrapper}
				itemScope
				itemType="http://schema.org/WebPage"
			>
				<Hero nextBlockRef={nextBlockRef} />
				<Decription />
				<Rate />
				<Import />
				<Partner />
				<Tarif />
				<AboutUs />
				<Support nextBlockRef={nextBlockRef} />
			</div>
			<link itemProp="url" href="https://telebon.ru" />
		</Meta>
	)
}

export default Home
