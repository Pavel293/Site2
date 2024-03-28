import React, { FC, useEffect, useRef, useState } from 'react'
import Meta from '@/utils/meta/Meta'
import Hero from '@/screens/main/hero/Hero'
import styles from './Home.module.scss'
import { propoData } from '@/screens/main/home/promo-data'
import Decription from '@/screens/main/description/Description'
import Rate from '@/screens/main/rate/Rate'
import Link from 'next/link'
import Image from 'next/image'
import AccreditaionCompanyImage from '../../../../assets/icons/AccreditationCompanyImage.svg'
import Import from '@/screens/main/import/Import'
import Partner from '@/screens/main/partner/Partner'
import Tarif from '@/screens/main/tarif/Tarif'
import AboutUs from '@/screens/main/aboutus/AboutUs'
import Support from '@/screens/main/support/Support'

const Home: FC = () => {
	const nextBlockRef = useRef<HTMLDivElement>(null)
	return (
		<Meta
			title="Онлайн система записи"
			description="Бесплатный сервис для компаний и частных специалистов"
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
