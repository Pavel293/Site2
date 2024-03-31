import React, { FC, useEffect, useState } from 'react'
import styles from './Import.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { Field, Form, Formik, useFormik } from 'formik'
import InputMask from 'react-input-mask'
import ModalSupport from '@/ui/modal/ModalSupport/ModalSupport'
import { FormValues } from '@/screens/main/support/Support'

const Import: FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const initialValues: FormValues = {
		name: '',
		phoneNumber: '',
		consent: false,
		isValidForm: false,
	}

	const validate = (values: FormValues) => {
		const errors: any = {}
		if (!values.name) {
			errors.name = 'Введите имя'
		} else if (!/^[а-яёЁА-Я\s]+$/i.test(values.name.trim())) {
			errors.name = 'Имя должно содержать только русские буквы'
		}
		if (!values.phoneNumber) {
			errors.phoneNumber = 'Введите корректный номер телефона'
		}
		if (!values.consent) {
			errors.consent = 'Необходимо дать согласие'
		}
		return errors
	}

	const onSubmit = (values: FormValues) => {
		console.log(values)
		setIsModalOpen(true)
	}

	const formik = useFormik({
		initialValues,
		onSubmit,
		validate,
	})

	useEffect(() => {
		const isValidForm =
			formik.values.name !== '' &&
			formik.values.phoneNumber !== '' &&
			formik.values.phoneNumber.replace(/[()-]/g, '').trim().length === 14 &&
			/^[а-яёЁА-Я\s]+$/i.test(formik.values.name.trim()) &&
			formik.values.consent
		formik.setFieldValue('isValidForm', isValidForm)
	}, [formik.values])

	useEffect(() => {
		console.log(isModalOpen)
	}, [isModalOpen])

	return (
		<div className={cn(styles.fuck, 'wrapper')}>
			<div className={styles.main_container}>
				<div className={styles.title}>
					<h2>Перенесем Вашу клиентскую базу в Telebon</h2>
					<p>
						Поменять сервис онлайн-записи не сложно - наша команда поможет с
						переездом
					</p>
				</div>
				<form onSubmit={formik.handleSubmit}>
					<div className={styles.input_container}>
						<div className={styles.input}>
							<input
								type="text"
								name="name"
								placeholder="Введите Ваше Имя"
								className={styles.custom_input}
								value={formik.values.name}
								onChange={formik.handleChange}
							/>
							<InputMask
								mask="+7 (999) 999-99-99"
								maskChar=" "
								type="text"
								name="phoneNumber"
								placeholder="Номер телефона"
								className={styles.custom_input}
								value={formik.values.phoneNumber}
								onChange={formik.handleChange}
							/>
						</div>
						<label className={styles.checkbox_container}>
							<input
								type="checkbox"
								name="consent"
								className={styles.checkbox}
								checked={formik.values.consent}
								onChange={formik.handleChange}
							/>
							<p>
								Вы соглашаетесь на обработку персональных данных и обязуетесь
								соблюдать условия{' '}
								<span>
									<Link href={'/info/agreement'}>
										Пользовательского соглашения
									</Link>
								</span>
							</p>
						</label>
						<button
							type="submit"
							className={cn(styles.button, {
								[styles.disabled]:
									!formik.isValid || !formik.values.isValidForm || isModalOpen,
							})}
							disabled={
								!formik.isValid || !formik.values.isValidForm || isModalOpen
							}
						>
							Связаться
						</button>
					</div>
				</form>
				{isModalOpen ? (
					<ModalSupport
						isOpen={isModalOpen}
						onClose={() => setIsModalOpen(false)}
					/>
				) : null}
			</div>
		</div>
	)
}

export default Import
