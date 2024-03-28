import React, { FC, useEffect, useState } from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'
import LogoImageNew from '../../../assets/icons/LogoImageNew.svg'
import Image from 'next/image'
import { EIcons, Icon as IconInstance } from '../../../assets/icons/icon'
import cn from 'classnames'

const Footer: FC = () => {
	const [showCookieBanner, setShowCookieBanner] = useState<boolean>(true)
	const [copyActivePhone, setCopyActivePhone] = useState(false)
	const [copyActiveMail, setCopyActiveMail] = useState(false)

	useEffect(() => {
		const hasAcceptedCookies = document.cookie.includes(
			'hasAcceptedCookies=true',
		)
		if (hasAcceptedCookies) {
			setShowCookieBanner(false)
		}
	}, [])

	const handleAcceptCookies = () => {
		document.cookie =
			'hasAcceptedCookies=true; expires=Fri, 31 Dec 9999 23:59:59 GMT'
		setShowCookieBanner(false)
	}
	const clickPhone = () => {
		setCopyActivePhone(true)
		setTimeout(() => setCopyActivePhone(false), 600)
	}
	const clickMail = () => {
		setCopyActiveMail(true)
		setTimeout(() => setCopyActiveMail(false), 600)
	}

	const copyToClipboard = (phoneNumber: string) => {
		navigator.clipboard.writeText(phoneNumber)
	}
	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.aboveline}>
					<div className={styles.left}>
						<div>
							<Link href="/">
								<Image src={LogoImageNew} alt="LogoImage" />
							</Link>
						</div>
						<div className={styles.textcontent}>
							<div className={styles.text}>
								<Link href="https://lk.telebon.ru/registration">
									<p>
										<IconInstance name={EIcons.howtoreg} />
										<span>Зарегистрироваться</span>
									</p>
								</Link>
								<Link href="/info/licence">
									<p>Лицензионный договор-оферта</p>
								</Link>
							</div>
							<div className={styles.text}>
								<Link href="https://lk.telebon.ru/auth">
									<p>
										<IconInstance name={EIcons.accountcircle} />
										<span>Личный кабинет</span>
									</p>
								</Link>
								<Link href="/info/privacy-policy">
									<p>Политика конфиденциальности</p>
								</Link>
							</div>
							<div className={styles.text}>
								<Link href="/404">
									<p>
										<IconInstance name={EIcons.contactsupportsmall} />
										<span>Чат технической поддержки</span>
									</p>
								</Link>
								<Link href="/info/agreement">
									<p>Пользовательское соглашение</p>
								</Link>
							</div>
							{/*<Link href="/baza-znaniy">*/}
							{/*	<p>База знаний</p>*/}
							{/*</Link>*/}
						</div>
					</div>
					<div className={styles.right}>
						<div
							className={cn(styles.copyboard, {
								[styles.active]: copyActiveMail,
							})}
							onClick={() => {
								copyToClipboard('hello@telebon.ru')
								clickMail()
							}}
						>
							<IconInstance name={EIcons.supportmailaddresssmall} />
						</div>
						<div
							className={cn(styles.copyboard, {
								[styles.active]: copyActivePhone,
							})}
							onClick={() => {
								copyToClipboard('+7 (812) 507-63-33')
								clickPhone()
							}}
						>
							<IconInstance name={EIcons.supportphonebold} />
						</div>
						<div className={styles.button}>
							<IconInstance name={EIcons.downloadapp} />
						</div>
					</div>
				</div>
				<div className={styles.line}></div>
				<div className={styles.underline}>
					<div className={styles.text}>
						<p>©️ 2024</p>
					</div>
				</div>
			</div>
			{showCookieBanner && (
				<noindex>
					<div className={styles.cookieContainer}>
						<p>
							Продолжая использовать наш сайт, вы даете{' '}
							<Link href="/info/cookie">
								<span>согласие на использование файлов «cookie»</span>
							</Link>
							. Если вы не хотите, чтобы ваши данные обрабатывались, измените
							настройки браузера.
						</p>
						<button onClick={handleAcceptCookies}>ОК</button>
					</div>
				</noindex>
			)}
		</div>
	)
}

export default Footer
