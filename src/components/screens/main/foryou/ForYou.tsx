import React, { FC, useEffect, useState } from 'react'
import styles from './ForYou.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Image from 'next/image'
import { useFormik } from 'formik'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'
import ForYouImage from '../../../../assets/icons/foryou/ForYouImage.png'
import ForYouImageMobile from '../../../../assets/icons/foryou/ForYouImageMobile.png'

export interface FormValues {
	email: string
	isValidForm: boolean
}

const ForYou: FC = () => {
	const isMobile = useMatchMedia('768')

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.container}>
				<div className={styles.card}>
					<div className={styles.text}>
						<h3>Телебон для{isMobile ? null : <br/>} вашего бизнеса</h3>
					</div>
					{isMobile ? <Image src={ForYouImageMobile} alt={''} /> : <Image src={ForYouImage} alt={''} />}
				</div>
			</div>
		</div>
	)
}

export default ForYou
