import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './Hero.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Image from 'next/image'
import { useFormik } from 'formik'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'
import Phone from '../../../../assets/icons/main/hero/HeroPhone.png'
import Sponsors from '../../../../assets/icons/main/hero/Sponsors.png'
import SponsorsMobile from '../../../../assets/icons/main/hero/SponsorsMobile.png'
import { motion } from 'framer-motion'
import AppleIcon from '../../../../assets/icons/AppleIcon.png'


export interface FormValues {
	email: string
	isValidForm: boolean
}

const Hero: FC = () => {
	const [scrollStarted, setScrollStarted] = useState<boolean>(false)
	const [hidden, setHidden] = useState<boolean>(false)
	const isMobile = useMatchMedia('768')
	const [platformLink, setPlatformLink] = useState('')
	const [isOpenDownload, setIsOpenDownload] = useState<boolean>(true)

	useEffect(() => {
		const userAgent = navigator.userAgent || navigator.vendor;

		if(/android/i.test(userAgent)) {
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
			<div className={styles.background}></div>
			{isMobile && isOpenDownload ? (
				<div className={styles.download_link}>
					<div className={styles.row}>
						<div onClick={() => setIsOpenDownload(false)}><IconInstance name={EIcons.x} /></div>
						<Image src={AppleIcon} alt={''} />
						<div className={styles.text}>
							<p>Telebon</p>
							<span>Mobile app</span>
						</div>
					</div>
					<Link href={platformLink} target={'_blank'}>
						<button>Открыть</button>
					</Link>
				</div>) : null}
			<div className={styles.container}>
				<div style={{ height: isMobile ? '30.7692vw' : '6.9792vw' }}></div>
				<div className={styles.row}>
					<div className={styles.column}>
						<div className={styles.text}>
							<h1>Простая запись клиентов для профессионалов</h1>
							{isMobile ?
								<p>
									Система для бронирования, учета<br /> финансов и клиентов.
									<span> Нам доверяют<br />
									более 3000 бьюти специалистов<br />
										в России</span>
									– Telebon это CRM система<br />
									для сферы услуг.</p>
								:
								<p>Система для бронирования, учета финансов и клиентской базы.
									Нам доверяют<br />
									<span>более 3000 специалистов по всей России</span>
									– Telebon это CRM система<br />
									для сферы услуг.</p>}
						</div>
						{isMobile ? <button>Начать</button> : <button>Попробовать сейчас</button>}
					</div>
					<motion.div initial='hidden'
											whileInView='visible'
											viewport={{ once: true }}
											transition={{ duration: 0.5, delay: 0.3 }}
											variants={{
												visible: { opacity: 1, y: 0 },
												hidden: { opacity: 0, y: isMobile ? '40vw' : '10vw' },
											}}>
						<Image src={Phone} alt={''} />
					</motion.div>
				</div>
				<motion.div initial='hidden'
										whileInView='visible'
										viewport={{ once: true, amount: 0.3 }}
										transition={{ duration: 0.5 }}
										variants={{
											visible: { opacity: 1, y: 0 },
											hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
										}}
										className={styles.sponsors}>
					{isMobile ? <Image src={SponsorsMobile} alt={''} /> : <Image src={Sponsors} alt={''} />}
				</motion.div>

			</div>
		</div>
	)
}

export default Hero
