import React, { FC, useState } from 'react'
import styles from './Cards.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../../assets/icons/icon'
import Image from 'next/image'
import CardFirst from '../../../../../assets/icons/recording/CardFirst.png'
import CardSecond from '../../../../../assets/icons/recording/CardSecond.png'
import CardThird from '../../../../../assets/icons/recording/CardThird.png'

const Cards: FC = () => {
	return (
		<div className={cn(styles.base, `wrapper`)}>
			<div className={styles.text}>
				<h2>
					Откройте для себя
					<br />
					новые границы
				</h2>
				<p>
					Оценить все возможности нового решения для
					<br /> записи клиентов через Telegram
				</p>
			</div>
			<div className={styles.main_container}>
				<div className={styles.card}>
					<Image src={CardFirst} alt={''} />
					<div className={styles.title}>
						<h4>Персонализация</h4>
					</div>
					<div className={styles.description}>
						<p>
							Индвидуальность и свобода, это то, что мы
							<br /> хотели предоставить своим клиентам при
							<br /> создании данного модуля
						</p>
					</div>
					<div className={styles.row}>
						<IconInstance name={EIcons.colorswatch} />
						<p>Собственный дизайн</p>
					</div>
					<div className={styles.row}>
						<IconInstance name={EIcons.settings} />
						<p>Персональные настройки</p>
					</div>
					<div className={styles.row}>
						<IconInstance name={EIcons.cursor} />
						<p>Свободные текста</p>
					</div>
				</div>
				<div className={styles.card}>
					<Image src={CardSecond} alt={''} />
					<div className={styles.title}>
						<h4>Комфорт клиента</h4>
					</div>
					<div className={styles.description}>
						<p>
							Мы понимаем, что оказание услуг - это ваш
							<br /> бизнес, и разработали бота с максимальным
							<br /> удобством для ваших клиентов
						</p>
					</div>
					<div className={styles.row}>
						<IconInstance name={EIcons.filequestion} />
						<p>Без поиска ссылок</p>
					</div>
					<div className={styles.row}>
						<IconInstance name={EIcons.messagechat} />
						<p>Прямое общение</p>
					</div>
					<div className={styles.row}>
						<IconInstance name={EIcons.userprofilestar} />
						<p>История записей</p>
					</div>
				</div>
				<div className={styles.card}>
					<Image src={CardThird} alt={''} />
					<div className={styles.title}>
						<h4>Независимость</h4>
					</div>
					<div className={styles.description}>
						<p>
							Вам больше не надо платить за СМС и WhatsApp
							<br /> уведомления. Все сообщение и рассылки внутри
							<br /> Telegram бота, бесплатны
						</p>
					</div>
					<div className={styles.row}>
						<IconInstance name={EIcons.coinbroken} />
						<p>Бесплатные сообщения</p>
					</div>
					<div className={styles.row}>
						<IconInstance name={EIcons.bellringing} />
						<p>Бесплатные уведомления</p>
					</div>
					<div className={styles.row}>
						<IconInstance name={EIcons.gift} />
						<p>Бесплатный хостинг бота</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cards
