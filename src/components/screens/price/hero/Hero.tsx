import React, { FC, useEffect, useState } from 'react'
import styles from './Hero.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Image from 'next/image'
import { useFormik } from 'formik'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'
import HeroImage from '../../../../assets/icons/price/hero/HeroImage.png'
import HeroImageMobile from '../../../../assets/icons/price/hero/HeroImageMobile.png'
import { motion } from 'framer-motion'
import AppleIcon from '../../../../assets/icons/AppleIcon.png'

export interface FormValues {
	email: string
	isValidForm: boolean
}

const Hero: FC = () => {
	const isMobile = useMatchMedia('768')
	const [platformLink, setPlatformLink] = useState('')
	const [isOpenDownload, setIsOpenDownload] = useState<boolean>(true)

	useEffect(() => {
		const userAgent = navigator.userAgent || navigator.vendor

		if (/android/i.test(userAgent)) {
			setPlatformLink('/')
		} else if (/iPad|iPhone|iPod/i.test(userAgent)) {
			setPlatformLink('https://apps.apple.com/ru/app/telebon/id6502614961')
		} else {
			setPlatformLink('/')
		}
	}, [])

	const initialValues = {
		email: '',
		isValidForm: false,
	}

	const validate = (values: any) => {
		const errors: any = {}
		if (!values.email) {
			errors.email = 'Введите корректную почту'
		}
		return errors
	}

	const onSubmit = async (values: FormValues) => {
		try {
			console.log('1')
		} catch (error) {
			console.error('Ошибка при отправке данных:', error)
		}
	}

	const formik = useFormik({
		initialValues,
		onSubmit,
		validate,
	})

	const onSubmitHandler: React.MouseEventHandler<HTMLButtonElement> = event => {
		event.preventDefault()
		onSubmit(formik.values)
	}

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.gradient}></div>
			{isMobile && isOpenDownload ? (
				<div className={styles.download_link}>
					<div className={styles.row}>
						<div onClick={() => setIsOpenDownload(false)}>
							<IconInstance name={EIcons.x} />
						</div>
						<Image src={AppleIcon} alt={''} />
						<div className={styles.text}>
							<p>Telebon</p>
							<span>Mobile app</span>
						</div>
					</div>
					<Link href={platformLink} target={'_blank'}>
						<button>Открыть</button>
					</Link>
				</div>
			) : null}
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.column}>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.3 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
							className={styles.text}
						>
							<h3 style={{ paddingBottom: isMobile ? '2.0513vw' : '0' }}>
								Стоимость
							</h3>
							<p>Единый тариф и прозрачная цена.</p>
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.4 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
							className={styles.text}
							style={{ gap: isMobile ? '6.1538vw' : '1.25vw' }}
						>
							<h3 className={styles.all}>
								Все функции за {isMobile ? <br /> : null}
								<span>300 ₽</span>
							</h3>
							{isMobile ? <p>в месяц</p> : <p>в месяц, за 1 пользователя</p>}
							<button>Попробовать</button>
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
							className={styles.row}
							style={{
								gap: isMobile ? '4.1026vw' : '1.16875vw',
								margin: isMobile ? '2.0513vw 0' : '0',
							}}
						>
							<div
								className={styles.column}
								style={{
									gap: isMobile ? '4.1026vw' : '0.8333vw',
									alignItems: 'flex-start',
								}}
							>
								<div className={styles.card}>
									<IconInstance name={EIcons.listmark} />
									<p>Единая цена</p>
								</div>
								<div className={styles.card}>
									<IconInstance name={EIcons.listmark} />
									<p>Пробный период 14 дней</p>
								</div>
							</div>
							<div
								className={styles.column}
								style={{
									gap: isMobile ? '4.1026vw' : '0.8333vw',
									alignItems: 'flex-start',
								}}
							>
								<div className={styles.card}>
									<IconInstance name={EIcons.listmark} />
									<p>Без доп. платежей</p>
								</div>
								<div className={styles.card}>
									<IconInstance name={EIcons.listmark} />
									<p>Бесплатные модули</p>
								</div>
							</div>
						</motion.div>
					</div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
						}}
					>
						{isMobile ? (
							<Image src={HeroImageMobile} alt={''} />
						) : (
							<Image src={HeroImage} alt={''} />
						)}
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default Hero
