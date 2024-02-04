import React, { FC } from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'
import LogoImageNew from '../../../assets/icons/LogoImageNew.svg'
import Image from 'next/image'
import { EIcons, Icon as IconInstance } from '../../../assets/icons/icon'

const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.info}>
				<div className={styles.logoline}>
					<div className={styles.content}>
						<div className={styles.image}>
							<Link href="/">
								<Image src={LogoImageNew} alt="LogoImageNew" />
							</Link>
						</div>
						<div className={styles.contact}>
							<h1>8 812 507-63-33</h1>
							<h2>hello@telebon.ru</h2>
						</div>
					</div>
				</div>
				<div className={styles.textcontent}>
					<div className={styles.text}>
						<Link href="https://lk.telebon.ru/registration">
							<h2>
								<span>Регистрация</span>
							</h2>
						</Link>
						<Link href="https://lk.telebon.ru/auth">
							<h2>
								<span>Личный кабинет</span>
							</h2>
						</Link>
						<Link href="/404">
							<h2>
								<span>Чат технической поддержки</span>
							</h2>
						</Link>
						{/*<Link href="/baza-znaniy">*/}
						{/*	<p>База знаний</p>*/}
						{/*</Link>*/}
					</div>
					<div className={styles.text}>
						<Link href="/info/licence">
							<h2>Лицензионный договор-оферта</h2>
						</Link>
						<Link href="/info/privacy-policy">
							<h2>Политика конфиденциальности</h2>
						</Link>
						<Link href="/info/agreement">
							<h2>Пользовательское соглашение</h2>
						</Link>
					</div>
					<div className={styles.line}></div>
					<div
						className={styles.text}
						style={{ justifyContent: 'space-between' }}
					>
						<h2>
							©️ 2023-2024, ООО «ГК «Белый медведь » ИНН 4345410051 ОГРН
							1154345004582
						</h2>
						<IconInstance name={EIcons.telegramicon} />
					</div>
				</div>

				{/*	<div className={styles.doc}>*/}
				{/*		<h1>Документы</h1>*/}
				{/*		<Link href="/info/licence">*/}
				{/*			<p>Лицензионный договор</p>*/}
				{/*		</Link>*/}
				{/*		<Link href="/info/privacy-policy">*/}
				{/*			<p>Политика конфиденциальности</p>*/}
				{/*		</Link>*/}
				{/*		<Link href="/info/agreement">*/}
				{/*			<p>Пользовательское соглашение</p>*/}
				{/*		</Link>*/}
				{/*	</div>*/}
				{/*	<div className={styles.contact}>*/}
				{/*		<h1>Контакты</h1>*/}
				{/*		<p>8 812 507 63 33</p>*/}
				{/*		<p>Hello@telebon.ru</p>*/}
				{/*		<p>ООО ГК Белый Медведь</p>*/}
				{/*		<p>ИНН 4345410051</p>*/}
				{/*		<p>ОГРН 1154345004582</p>*/}
				{/*		/!*<div className={styles.image}>*!/*/}
				{/*		/!*	<IconInstance name={EIcons.telegram} />*!/*/}
				{/*		/!*</div>*!/*/}
				{/*	</div>*/}
				{/*</div>*/}
				{/*<div className={styles.bottom}>*/}
				{/*	<p>©️ 2024 ООО ГК Белый медведь, ИНН 4345410051</p>*/}
			</div>
		</div>
	)
}

export default Footer
