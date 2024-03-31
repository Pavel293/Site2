import React, { FC } from 'react'
import styles from './AnalyticsTelebot.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import Analytics from '../../../../assets/icons/AnalyticsTelebot.png'

const AnalyticsTelebot: FC = () => {
	return (
		<div className={cn(styles.fuck, 'wrapper')}>
			<div className={styles.main_container}>
				<div className={styles.title}>
					<h2>
						В России мессенджер Telegram использует{' '}
						<span>более 70% взрослого населения</span> ежедневно
					</h2>
				</div>
				<Image
					src={Analytics}
					alt={
						'В России мессенджер Telegram использует более 70% взрослого населения ежедневно'
					}
				/>
				<div className={styles.statistic}>
					<div className={styles.card}>
						<p className={styles.title}>
							69<span>%</span>
						</p>
						<p>Администраторов каналов Telegram зарабатывают на рекламе</p>
					</div>
					<div className={styles.card}>
						<p className={styles.title}>
							38<span>%</span>
						</p>
						<p>Получают доход от продажи своих товаров или услуг</p>
					</div>
					<div className={styles.card}>
						<p className={styles.title}>
							15<span>%</span>
						</p>
						<p>Зарабатывают на партнерских программах</p>
					</div>
				</div>
				<Link href={'https://lk.telebon.ru/registration'}>
					<div className={styles.button}>Начать работу</div>
				</Link>
			</div>
		</div>
	)
}

export default AnalyticsTelebot
