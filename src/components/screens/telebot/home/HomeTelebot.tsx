import React, { FC, useRef } from 'react'
import Meta from '@/utils/meta/Meta'
import styles from './HomeTelebot.module.scss'
import Support from '@/screens/main/support/Support'
import TarifPrice from '@/screens/price/tarif/TarifPrice'
import PortalPrice from '@/screens/price/portal/PortalPrice'
import Bot from '@/screens/price/bot/Bot'
import Registry from '@/screens/price/registry/Registry'
import HeroTelebot from '@/screens/telebot/hero/HeroTelebot'
import AboutUsTelebot from '@/screens/telebot/aboutus/AboutUsTelebot'
import AnalyticsTelebot from '@/screens/telebot/analytics/AnalyticsTelebot'
import AuthTelebot from '@/screens/telebot/auth/AuthTelebot'

const HomeTelebot: FC = () => {
	const nextBlockRef = useRef<HTMLDivElement>(null)
	return (
		<Meta
			title="Бот для онлайн записи"
			description="Предоставьте клиентам готовую форму онлайн-записи через Telegram"
			image="logo_preview.png"
		>
			<div
				className={styles.wrapper}
				itemScope
				itemType="http://schema.org/WebPage"
			>
				<HeroTelebot nextBlockRef={nextBlockRef} />
				<AboutUsTelebot />
				<AuthTelebot />
				<AnalyticsTelebot />
				<Support nextBlockRef={nextBlockRef} />
			</div>
			<link itemProp="url" href="https://telebon.ru/telegram-bot" />
		</Meta>
	)
}

export default HomeTelebot
