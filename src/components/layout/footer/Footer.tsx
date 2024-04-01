import React, { FC, useEffect, useState } from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'
import LogoImageNew from '../../../assets/icons/LogoImageNew.svg'
import Image from 'next/image'
import { EIcons, Icon as IconInstance } from '../../../assets/icons/icon'
import ModalCopy from '@/ui/modal/ModalCopy/ModalCopy'

const Footer: FC = () => {
	const [showCookieBanner, setShowCookieBanner] = useState<boolean>(true)
	const [copiedSuccess, setCopiedSuccess] = useState(false)

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

	const unsecuredCopyToClipboard = (text: string) => {
		const textArea = document.createElement('textarea')
		textArea.style.position = `fixed`
		textArea.style.top = `0`
		textArea.style.left = `0`
		textArea.style.opacity = `0`
		textArea.value = text
		document.body.appendChild(textArea)
		textArea.focus()
		textArea.select()
		try {
			document.execCommand('copy')
		} catch (err) {
			console.error(`Unable to copy to clipboard`, err)
		}
		document.body.removeChild(textArea)
	}

	const copyToClipboard = async (text: string) => {
		try {
			if (window.isSecureContext && navigator.clipboard) {
				await navigator.clipboard.writeText(text)
				setCopiedSuccess(true)
				setTimeout(() => setCopiedSuccess(false), 1500)
			} else {
				unsecuredCopyToClipboard(text)
			}
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<noindex>
			<div className={styles.footer}>
				<div className={styles.container}>
					<div className={styles.aboveline}>
						<div className={styles.left}>
							<Link href="/">
								<div className={styles.logo}>
									<Image src={LogoImageNew} alt="LogoImage" />
								</div>
							</Link>
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
								className={styles.copyboard}
								onClick={() => {
									copyToClipboard('hello@telebon.ru')
								}}
							>
								<div className={styles.email}>
									<IconInstance name={EIcons.supportmailaddresssmall} />
								</div>
							</div>
							<div
								className={styles.copyboard}
								onClick={() => {
									copyToClipboard('+7 (812) 507-63-33')
								}}
							>
								<div className={styles.phone}>
									<IconInstance name={EIcons.supportphonebold} />
								</div>
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
					<ModalCopy
						isOpen={copiedSuccess}
						onClose={() => setCopiedSuccess(false)}
					/>
				</div>
				{showCookieBanner && (
					<noindex>
						<div className={styles.cookieContainer}>
							<div className={styles.title}>
								<IconInstance name={EIcons.cookie} />
								<p>Мы используем файлы cookie</p>
							</div>
							<p>
								Продолжая использовать наш сайт, вы даете{' '}
								<Link href="/info/cookie">
									<span>согласие на использование файлов «cookie»</span>
								</Link>
								. Если вы не хотите, чтобы ваши данные обрабатывались, измените
								настройки браузера.
							</p>
							<button onClick={handleAcceptCookies}>Принять</button>
						</div>
					</noindex>
				)}
			</div>
		</noindex>
	)
}

export default Footer
