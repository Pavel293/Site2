import React, { FC, useEffect, useState } from 'react'
import styles from './Hero.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Image from 'next/image'
import Coursor from '../../../../assets/icons/hero/HeroCoursor.png'
import Pin from '../../../../assets/icons/hero/HeroPin.png'
import HeroIcons from '../../../../assets/icons/hero/HeroIcons.png'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import { motion } from 'framer-motion'
import Link from 'next/link'

export interface FormValues {
	email: string
	isValidForm: boolean
}

const Hero: FC = () => {
	const [scrollStarted, setScrollStarted] = useState<boolean>(false)
	const [hidden, setHidden] = useState<boolean>(false)
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0 && !scrollStarted) {
				setScrollStarted(true)
				setHidden(true)
			} else if (window.scrollY === 0 && scrollStarted) {
				setScrollStarted(false)
				setHidden(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [scrollStarted])

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
			<motion.div
				className={styles.images}
				variants={{
					visible: { translateX: '0vw' },
					hidden: { translateX: '-10vw' },
				}}
				animate={hidden ? 'hidden' : 'visible'}
				transition={{ duration: 0.35, ease: 'easeInOut' }}
			>
				<Image src={Pin} alt={''} />
			</motion.div>
			<motion.div
				className={styles.images}
				variants={{
					visible: { translateY: '0vw' },
					hidden: { translateY: '-10vw' },
				}}
				animate={hidden ? 'hidden' : 'visible'}
				transition={{ duration: 0.35, ease: 'easeInOut' }}
			>
				<Image src={HeroIcons} alt={''} />
			</motion.div>
			<motion.div
				className={styles.images}
				variants={{
					visible: { translateY: '0vw' },
					hidden: { translateY: '-10vw' },
				}}
				animate={hidden ? 'hidden' : 'visible'}
				transition={{ duration: 0.35, ease: 'easeInOut' }}
			>
				<Image src={Coursor} alt={''} />
			</motion.div>
			<div className={styles.container}>
				<IconInstance name={EIcons.herologo} />
				<p>
					Простая запись клиентов
					<br /> для профессионалов
				</p>
				<div className={styles.common_input}>
					<input
						type="text"
						name="email"
						placeholder="Укажите рабочий email"
						value={formik.values.email}
						onChange={formik.handleChange}
					/>
					<button
						type={'button'}
						disabled={!formik.isValid || formik.values.email === ''}
						onClick={onSubmitHandler}
					>
						НАЧАТЬ
					</button>
				</div>
				<div className={styles.buttons}>
					<Link
						href={'https://apps.apple.com/ru/app/telebon/id6502614961'}
						target={'_blank'}
					>
						<IconInstance name={EIcons.footerappstore} />
					</Link>
					<Link href={'/'}>
						<IconInstance name={EIcons.footergoogleplay} />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero
