import React, { FC, useState } from 'react'
import styles from './Contact.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import useMatchMedia from '@/hooks/useMatchMedia'
import Image from 'next/image'
import ContactCat from '../../../../assets/icons/contact/ContactCat.png'
import { useFormik } from 'formik'
import { FormValues } from '@/screens/main/hero/Hero'

const Contact: FC = () => {
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

	const initialValues = {
		count: 1,
	}

	const validate = (values: any) => {
		const errors: any = {}
		if (values.count < 0) {
			errors.email = 'Неверное значение'
		}
		return errors
	}

	const onSubmit = async (values: { count: number }) => {
		try {
			console.log(values)
		} catch (error) {
			console.error('Ошибка при отправке данных:', error)
		}
	}

	const formik = useFormik({
		initialValues,
		onSubmit,
		validate,
	})

	const getEmployeeWord = (count: number) => {
		const cases = [2, 0, 1, 1, 1, 2]
		return ['сотрудника', 'сотрудников', 'сотрудников'][
			count % 100 > 4 && count % 100 < 20
				? 2
				: cases[count % 10 < 5 ? count % 10 : 5]
		]
	}

	return (
		<div className={styles.container}>
			<div className={styles.back_text}>
				{isMobile ? <p>жми</p> : <p>присоединяйся</p>}
			</div>
			<div className={cn(styles.base, 'wrapper')}>
				{isMobile ? (
					<div className={styles.main_container}>
						<button>ПОПРОБОВАТЬ</button>
						<div className={styles.text}>
							<p>
								Подписка
								<br /> всего 300 ₽
							</p>
							<span>За 1 пользователя</span>
						</div>
						<div className={styles.add}>
							<Image src={ContactCat} alt={''} />
							<p>
								Дополнительные
								<br /> сотрудники
							</p>
							<span>
								Добавьте сотрудников если у вас большая
								<br /> команда. Стоимость зависит от общего кол-ва
								<br /> сотрудников внутри компании
							</span>
							<div className={styles.counter_container}>
								<p>{formik.values.count * 300} ₽</p>
								<span>
									за {formik.values.count}{' '}
									{getEmployeeWord(formik.values.count)} в месяц
								</span>
								<div className={styles.counter}>
									<button
										onClick={() =>
											formik.setValues({ count: formik.values.count - 1 })
										}
										disabled={formik.values.count === 1}
									>
										-
									</button>
									<p>{formik.values.count}</p>
									<button
										onClick={() =>
											formik.setValues({ count: formik.values.count + 1 })
										}
									>
										+
									</button>
								</div>
							</div>
						</div>
						<div className={styles.request}>
							<div className={styles.title}>
								<p>Запрос предложения</p>
							</div>
							<div className={styles.text}>
								<p>
									Специальные условия для крупных
									<br /> сетей и франчайзи
								</p>
							</div>
							<div onClick={handlePhoneClick}>
								<IconInstance name={EIcons.contactphonenumber} />
							</div>
						</div>
					</div>
				) : (
					<div className={styles.main_container}>
						<div className={styles.card}>
							<div className={styles.title}>
								<p>Написать Директору</p>
							</div>
							<div className={styles.text}>
								<p>
									Наш основатель и CEO, Михаил <br />
									Кириллов открыт для всех.{' '}
								</p>
							</div>
							<button>
								<p>Написать</p>
								<IconInstance name={EIcons.rightarrow} />
							</button>
						</div>
						<div className={styles.card}>
							<div className={styles.title}>
								<p>Обратиться в поддержку</p>
							</div>
							<div className={styles.text}>
								<p>
									Ответим быстре, чем вы произнесёте слово
									<br />
									«Тетрагидропиранилциклопентилтетрагидропир
									<br />
									идопиридиновые»
								</p>
							</div>
							<button>
								<p>Начать</p>
								<IconInstance name={EIcons.rightarrow} />
							</button>
						</div>
						<div className={styles.card}>
							<div className={styles.title}>
								<p>Запрос предложения</p>
							</div>
							<div className={styles.text}>
								<p>
									Специальные условия для крупных
									<br /> сетей и франчайзи
								</p>
							</div>
							<div onClick={handlePhoneClick}>
								<IconInstance name={EIcons.contactphonenumber} />
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Contact
