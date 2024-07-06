import React, { FC, useEffect, useState } from 'react'
import styles from './Feedback.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Image from 'next/image'
import { useFormik } from 'formik'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'
import FeedbackImage from '../../../../assets/icons/feedback/FeedbackImage.png'
import FeedbackImageMobile from '../../../../assets/icons/feedback/FeedbackImageMobile.png'

export interface FormValues {
	email: string
	isValidForm: boolean
}

const Feedback: FC = () => {
	const isMobile = useMatchMedia('768')

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.container}>
				<div className={styles.card}>
					{isMobile ? <Image src={FeedbackImageMobile} alt={''} /> : <Image src={FeedbackImage} alt={''} />}
					<div className={styles.text}>
						<h3>“Телебон это не просто хорошо.
							Это великолепно, я рекомендую.”</h3>
						<div className={styles.minus}></div>
						<p>Сергей Фадеев, Киров</p>
						<span>Владелец и преподаватель, абсолютный чемпион России</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Feedback
