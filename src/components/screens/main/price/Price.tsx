import React, { FC, useEffect, useState } from 'react'
import styles from './Price.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Image from 'next/image'
import { useFormik } from 'formik'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'
import DescriptionCard1 from '../../../../assets/icons/description/DescriptionCard1.png'
import DescriptionCard2 from '../../../../assets/icons/description/DescriptionCard2.png'
import DescriptionCard3 from '../../../../assets/icons/description/DescriptionCard3.png'
import Sponsors from '../../../../assets/icons/hero/Sponsors.png'

export interface FormValues {
	email: string
	isValidForm: boolean
}

const Price: FC = () => {
	const isMobile = useMatchMedia('768')

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.container}>
				<div className={styles.card}>
					<div className={styles.text}>
						<h3>Все функции включены</h3>
						<p className={styles.price}>300 ₽</p>
						<button>Попробовать сейчас</button>
						<p>+300 ₽ за каждого дополнительного<br/>
							пользователя в месяц.<br/>
							Все функции включены.<br/>
							Бесплатный пробный период 14 дней.<br/>
							<span>*Подключение Telegram бота, бесплатно до 01.09.2024</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Price
