import React, { FC, useEffect, useState } from 'react'
import styles from './Import.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { Field, Form, Formik, useFormik } from 'formik'
import InputMask from 'react-input-mask'
import ModalSupport from '@/ui/modal/ModalSupport/ModalSupport'
import { FormValues } from '@/screens/main/support/Support'
import CommonInput from '@/ui/input/CommonInput'

const Import: FC = () => {
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
				<noindex>
					<CommonInput palette={'primary'} />
				</noindex>
			</div>
		</div>
	)
}

export default Import
