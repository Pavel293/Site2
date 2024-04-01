import React, { useState } from 'react'
import styles from './Description.module.scss'
import cn from 'classnames'
import { propoData } from '@/screens/main/description/promo-data'
import Image from 'next/image'
import DescriptionTelebonImage from '../../../../assets/icons/DescriptionTelebonImage.png'
import Link from 'next/link'

const Decription = () => {
	return (
		<>
			<div
				className={cn(styles.fuck, 'wrapper')}
				itemScope
				itemType="http://schema.org/Intangible"
			>
				<div className={styles.container}>
					<h2 itemProp="name">
						Telebon позволяет создать Telegram-бота для онлайн-записи клиентов
						на услуги
					</h2>
					<div className={styles.list}>
						{propoData.map((item, index) => (
							<div className={styles.item} key={index}>
								<noindex>
									<div className={styles.circle}>{index + 1}</div>
								</noindex>
								<p>{item.title}</p>
							</div>
						))}
					</div>
					<div className={styles.image}>
						<Image
							src={DescriptionTelebonImage}
							alt={
								'Telebon позволяет создать Telegram-бота для онлайн-записи клиентов на услуги'
							}
						/>
					</div>
				</div>
				<div className={styles.button_box}>
					<Link href="https://lk.telebon.ru/registration">
						<noindex>
							<button className={styles.button}>
								<span>Подключить</span>
							</button>
						</noindex>
					</Link>
				</div>
			</div>
		</>
	)
}

export default Decription
