import React, { FC } from 'react'
import styles from './Tarif.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import CommonButton from '@/ui/button/CommonButton'
const Tarif: FC = () => {
	return (
		<div className={cn(styles.fuck, 'wrapper')}>
			<div className={styles.main_container}>
				<div className={styles.title}>
					<h2>10 рублей за Всё</h2>
					<p>
						Давай мы возьмем сложности на себя? Ознакомьтесь с нашей ценовой
						политикой
					</p>
				</div>
				<noindex>
					<CommonButton href="/price" color={'gray'} size={'l'}>
						Попробовать
					</CommonButton>
				</noindex>
			</div>
		</div>
	)
}

export default Tarif
