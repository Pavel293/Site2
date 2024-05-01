import React, { FC } from 'react'
import styles from './Bot.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import Telegram from '../../../../assets/icons/TelegramIcon.png'
import CommonButton from '@/ui/button/CommonButton'
const Bot: FC = () => {
	return (
		<div className={cn(styles.fuck, 'wrapper')}>
			<div className={styles.main_container}>
				<div className={styles.title}>
					<Image
						src={Telegram}
						alt={'Создание Telegram-бота для онлайн-записей'}
					/>
					<h2>Создание Telegram-бота для онлайн-записей</h2>
					<p>
						Предоставьте клиентам ссылку для самостоятельной записи на услуги
						через самый популярный мессенджер. Эта функция входит в общую
						стоимость.
					</p>
				</div>
				<noindex>
					<CommonButton href="/telegram-bot" color={'gray02'} size={'l'}>
						Узнать подробнее
					</CommonButton>
				</noindex>
			</div>
		</div>
	)
}

export default Bot
