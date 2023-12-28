import React, { FC } from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'
import LogoFooter from '../../../assets/icons/LogoFooter.svg'
import Image from 'next/image'
import { EIcons, Icon as IconInstance } from '../../../assets/icons/icon'

const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.info}>
				<div className={styles.logo}>
					<Link href="/">
						<Image src={LogoFooter} alt="LogoFooter" />
					</Link>
				</div>
				<div className={styles.account}>
					<h1>Вход в личный кабинет</h1>
					<p>Создание аккаунта</p>
					<p>Регистрация</p>
					<p>Чат техподдержки</p>
				</div>
				<div className={styles.doc}>
					<h1>Документы</h1>
					<p>Лицензионный договор</p>
					<p>Политика конфиденциальности</p>
					<p>Пользовательское соглашение</p>
				</div>
				<div className={styles.contact}>
					<h1>Контакты</h1>
					<p>8 812 507 63 33</p>
					<p>Hello@telebon.ru</p>
					<div className={styles.image}>
						<IconInstance name={EIcons.telegram} />
					</div>
				</div>
			</div>
			<div className={styles.bottom}>
				<p>©️ 2024 ООО ГК Белый медведь, ИНН 4345410051</p>
			</div>
		</div>
	)
}

export default Footer
