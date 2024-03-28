import React, { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../BazaZnaniy.module.scss'

const Rate: FC = () => {
	return (
		<Meta title="Тарифы" description="Тарифы" image="logo_preview.png">
			<div className={styles.infobox}>
				<p className={styles.altp}>
					<Link href="/baza-znaniy">Назад</Link>
				</p>
				<div className={styles.textbox}>
					<h1>Тарифы</h1>
				</div>
			</div>
		</Meta>
	)
}

export default Rate
