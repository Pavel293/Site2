import React, { FC } from 'react'
import styles from './System.module.scss'
import cn from 'classnames'
import useMatchMedia from '@/hooks/useMatchMedia'
import Image from 'next/image'
import MacBookJournal from '../../../../assets/icons/MacBookJournal.png'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'

const System: FC = () => {
	const isMobile = useMatchMedia('768')
	return (
		<div
			className={cn(styles.fuck, 'wrapper')}
			itemScope
			itemType="http://schema.org/SoftwareApplication"
		>
			<div className={styles.main_container}>
				<h2>Полное взаимодействие с системой</h2>
				<div className={styles.grid}>
					<div className={styles.grid_1}>
						<div className={styles.card}>
							<p>Растягивайте время в ручную</p>
						</div>
						<div className={styles.card}>
							<p>Запись клиента на несколько услуг</p>
						</div>
						<div className={styles.card}>
							<p>Устанавливайте статус по клиенту</p>
						</div>
					</div>
					<div className={styles.grid_2}>
						<div className={styles.card}>
							<p>Оплата любым удобным способом</p>
						</div>
						<div className={styles.card}>
							<p>Перемещайте блоки записи</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default System
