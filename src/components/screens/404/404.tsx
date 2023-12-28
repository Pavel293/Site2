import React, { FC } from 'react'
import styles from '@/components/screens/404/404.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '../../../assets/icons/logo.svg'
import LogoText from '../../../assets/icons/logo-text.svg'

const Error: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<Link href="/">
					<Image src={LogoImage} alt="logoImage" />
					<Image src={LogoText} alt="logotext" />
				</Link>
			</div>
			<div className={styles.text}>
				<h1>
					Хьюстон, <br />у нас проблема!
				</h1>
				<p>
					Неправильно набран адрес или такой страницы больше не существует :(
				</p>
			</div>
			<Link href="/">
				<button>Домой</button>
			</Link>
		</div>
	)
}

export default Error
