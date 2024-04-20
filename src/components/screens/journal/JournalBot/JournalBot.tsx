import React, { FC } from 'react'
import styles from './JournalBot.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import JournalBotImage from '../../../../assets/icons/JournalBotImage.png'

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
						<span>эффективность работы и конкурентоспособность</span> на рынке
						услуг
					</h2>
					<p>
						В сравнении с традиционными методами клиентской записи,
						использование нашего сервиса онлайн-записи обеспечивает более точное
						и надежное ведение данных о клиентах, улучшает контроль над
						расписанием и позволяет быстро реагировать на изменения.{' '}
					</p>
				</div>
				<Image src={JournalBotImage} alt={'Повысьте уровень сервиса'} />
			</div>
		</div>
	)
}

export default JournalBot
