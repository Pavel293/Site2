import React, { FC, useRef } from 'react'
import Meta from '@/utils/meta/Meta'
import styles from './HomePrice.module.scss'
import HeroPrice from '@/screens/price/hero/HeroPrice'
import Support from '@/screens/main/support/Support'
import TarifPrice from '@/screens/price/tarif/TarifPrice'
import PortalPrice from '@/screens/price/portal/PortalPrice'
import Bot from '@/screens/price/bot/Bot'
import Registry from '@/screens/price/registry/Registry'

const HomePrice: FC = () => {
	const nextBlockRef = useRef<HTMLDivElement>(null)
	return (
		<Meta
			title="Ценовая политика"
			description="Откройте новые возможности вместе с Telebon"
			image="logo_preview.png"
		>
			<div
				className={styles.wrapper}
				itemScope
				itemType="http://schema.org/WebPage"
			>
				<div className={styles.maxwrapper}>
					<HeroPrice nextBlockRef={nextBlockRef} />
					<TarifPrice />
					<PortalPrice />
					<Bot />
				</div>
				<Registry />
				<div className={styles.maxwrapper}>
					<Support nextBlockRef={nextBlockRef} />
				</div>
			</div>
			<link itemProp="url" href="https://telebon.ru/price" />
		</Meta>
	)
}

export default HomePrice
