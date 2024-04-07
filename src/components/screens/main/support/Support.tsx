import React, { FC, useState, useEffect } from 'react'
import styles from './Support.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'
import ModalSupport from '@/ui/modal/ModalSupport/ModalSupport'
import ModalCopy from '@/ui/modal/ModalCopy/ModalCopy'
import useMatchMedia from '@/hooks/useMatchMedia'
import CommonInput from '@/ui/input/CommonInput'

interface SupportProps {
	nextBlockRef: React.RefObject<HTMLDivElement>
}

export interface FormValues {
	name: string
	phoneNumber: string
	consent: boolean
	isValidForm: boolean
}

const Support: FC<SupportProps> = ({ nextBlockRef }) => {
	const [copiedSuccess, setCopiedSuccess] = useState(false)
	const isMobile = useMatchMedia('768')

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

	const handlePhoneClick = () => {
		const phoneNumber = `+7 (812) 507-63-33`
		if (isMobile) {
			window.location.href = `tel:${phoneNumber.replace(/\s/g, ``)}`
			copyToClipboard(phoneNumber)
		} else {
			copyToClipboard(phoneNumber)
		}
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
		<div className={cn(styles.fuck, 'wrapper')} ref={nextBlockRef}>
			<div className={styles.main_container}>
				<div className={styles.left}>
					<div className={styles.title}>
						<h2>Всегда на связи!</h2>
						<p>Ответим в течение дня ✌🏻</p>
					</div>
					<noindex>
						<CommonInput palette={'orange'} />
					</noindex>
				</div>
				<div
					className={styles.right}
					itemScope
					itemType="http://schema.org/Organization"
				>
					<div
						className={styles.card}
						itemScope
						itemType="http://schema.org/ContactPoint"
					>
						<div className={styles.image}>
							<IconInstance name={EIcons.supportcall} />
						</div>
						<meta itemProp="telephone" content="+7 (812) 507-63-33" />
						<div className={styles.copyboard} onClick={handlePhoneClick}>
							<IconInstance name={EIcons.supportphone} />
						</div>
					</div>
					<div
						className={styles.card}
						itemScope
						itemType="http://schema.org/ContactPoint"
					>
						<div className={styles.image}>
							<IconInstance name={EIcons.supportmail} />
						</div>
						<meta itemProp="email" content="hello@telebon.ru" />
						<div
							className={styles.copyboard}
							onClick={() => copyToClipboard('hello@telebon.ru')}
						>
							<IconInstance name={EIcons.supportmailaddress} />
						</div>
					</div>
					<div
						className={styles.card}
						itemScope
						itemType="http://schema.org/LocalBusiness"
					>
						<div className={styles.image}>
							<IconInstance name={EIcons.supportworkinghours} />
						</div>
						<div
							className={styles.working_hours}
							itemProp="openingHoursSpecification"
							itemScope
							itemType="http://schema.org/OpeningHoursSpecification"
						>
							<p
								itemProp="dayOfWeek"
								itemScope
								itemType="http://schema.org/DayOfWeek"
							>
								<span>Рабочие: </span>
								<meta
									itemProp="openingHours"
									content="Mo-Fr 09:00-18:00"
								></meta>
								Пн-Пт, 9:00 - 18:00
							</p>
							<p>
								<span>Выходные: </span>
								Сб-Вс
							</p>
						</div>
					</div>
					<ModalCopy
						isOpen={copiedSuccess}
						onClose={() => setCopiedSuccess(false)}
					/>
				</div>
			</div>
		</div>
	)
}

export default Support
