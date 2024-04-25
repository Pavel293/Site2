import React, { FC, useRef } from 'react'
import Meta from '@/utils/meta/Meta'
import styles from './HomeJournal.module.scss'
import Support from '@/screens/main/support/Support'
import Hero from '@/screens/journal/hero/Hero'
import Solution from '@/screens/journal/solution/Solution'
import System from '@/screens/journal/system/System'
import Recording from '@/screens/journal/recording/Recording'
import Cooperation from '@/screens/journal/cooperation/Cooperation'
import JournalBot from '@/screens/journal/journal_bot/JournalBot'

const HomeJournal: FC = () => {
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
				<Solution />
				<System />
				<Recording />
				<Cooperation />
				<JournalBot />
				<Support nextBlockRef={nextBlockRef} />
			</div>
			<link itemProp="url" href="https://telebon.ru" />
		</Meta>
	)
}

export default HomeJournal
