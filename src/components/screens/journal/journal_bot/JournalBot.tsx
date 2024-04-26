import React, { FC } from 'react'
import styles from './JournalBot.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import JournalBotImage from '../../../../assets/icons/JournalBotImage.png'
import Link from 'next/link'

const JournalBot: FC = () => {
	return (
		<div
			className={cn(styles.fuck, 'wrapper')}
			itemScope
			itemType="http://schema.org/SoftwareApplication"
		>
			<div className={styles.main_container}>
				<div className={styles.text}>
					<h2>
						Повысьте уровень сервиса, увеличьте{' '}
						<span>
							эффективность
							<br /> работы и конкурентоспособность
						</span>{' '}
						с помощью Telegram
					</h2>
					<p>
						В сравнении с традиционными методами клиентской записи,
						использование нашего сервиса онлайн-записи обеспечивает более точное
						и надежное ведение данных о клиентах, улучшает контроль над
						расписанием и{' '}
						<span className={styles.span}>
							<Link href={'/telegram-bot'}>
								позволяет быстро реагировать на изменения.
							</Link>
						</span>{' '}
					</p>
				</div>
				<div className={styles.video}>
					<video className={styles.video} autoPlay loop muted>
						<source src="/video/mobile.mp4" type="video/mp4" />
						Ваш браузер не поддерживает видео
					</video>
				</div>
			</div>
		</div>
	)
}

export default JournalBot
