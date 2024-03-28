import React, { FC } from 'react'
import styles from './Bot.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import Telegram from '../../../../assets/icons/TelegramIcon.png'
const Bot: FC = () => {
	return (
		<div className={cn(styles.fuck, 'wrapper')}>
			<div className={styles.main_container}>
				<Image
					src={Telegram}
					alt={'Создание Telegram-бота для онлайн-записей'}
				/>
				<div className={styles.title}>
					<h2>Создание Telegram-бота для онлайн-записей</h2>
					<p>
						Предоставьте клиентам ссылку для самостоятельной записи на услуги
						через самый популярный мессенджер. Эта функция входит в общую
						стоимость.
					</p>
				</div>
				<Link href={'/telegram-bot'}>
					<div className={styles.button}>Узнать подробнее</div>
				</Link>
			</div>
		</div>
	)
}

export default Bot
