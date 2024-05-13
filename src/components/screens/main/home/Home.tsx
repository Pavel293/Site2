import React, { FC, useRef } from 'react'
import Meta from '@/utils/meta/Meta'
import Hero from '@/screens/main/hero/Hero'
import styles from './Home.module.scss'
import Description from '@/screens/main/description/Description'
import DescriptionA from '@/screens/main/recording/descriptiona/DescriptionA'
import Recording from '@/screens/main/recording/Recording'
import SliderBlock from '@/screens/main/slider/SliderBlock'
import Professional from '@/screens/main/professional/Professional'
import CenterButton from '@/screens/main/button/CenterButton'
import Start from '@/screens/main/start/Start'
import Tarif from '@/screens/main/tarif/Tarif'
import TryTelebon from '@/screens/main/try_telebon/TryTelebon'
import Contact from '@/screens/main/contact/Contact'

const Home: FC = () => {
	const nextBlockRef = useRef<HTMLDivElement>(null)
	return (
		<Meta
			title="Telebon CRM"
			description="Новый сервис онлайн-записи с возможностью записи Клиентов в Telegram"
			image="logo_preview.png"
		>
			<div className={styles.wrapper}>
				<Description />
				<Recording />
				<CenterButton />
				<Professional />
				<CenterButton />
				<SliderBlock />
				<Start />
				<Tarif />
				<TryTelebon />
				<Contact />
			</div>
		</Meta>
	)
}

export default Home
