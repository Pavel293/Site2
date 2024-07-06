import React, { FC, useEffect, useState } from 'react'
import styles from './Description.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Image from 'next/image'
import { useFormik } from 'formik'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'
import DescriptionCard1 from '../../../../assets/icons/description/DescriptionCard1.png'
import DescriptionCard2 from '../../../../assets/icons/description/DescriptionCard2.png'
import DescriptionCard3 from '../../../../assets/icons/description/DescriptionCard3.png'

export interface FormValues {
	email: string
	isValidForm: boolean
}

const Description: FC = () => {
	const isMobile = useMatchMedia('768')

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.container}>
				<div className={styles.card}>
					<Image src={DescriptionCard1} alt={''} />
					<div className={styles.text}><h3>Записывайте без лишних сложностей</h3><p>Планируйте расписание и привлекайте
						клиентов
						через <span>онлайн запись 24/7</span>, автоматизируйте
						рассылки, и сделайте свой бизнес более
						комфортным.</p></div>
				</div>
				<div className={styles.card}>
					<div className={styles.text}><h3>Забудьте о рутине, сфокусируйтесь на клиентах</h3><p>Не отвлекайтесь на
						мелочи, сосредоточтесь на важном. <span>Оптмизируйте процессы</span> и сфокусируйтесь на создании
						впечатлений для ваших
						клиентов.</p></div>
					<Image src={DescriptionCard2} alt={''} />
				</div>
				<div className={styles.card}>
					<Image src={DescriptionCard3} alt={''} />
					<div className={styles.text}><h3>Постройте бизнес, которым будете гордиться</h3>
						<p>Зарабатывайте больше и
							<span>принимайте решения на основе данных.</span> Наша платформа поможет вам
							на текущем этапе и подстроится под ваши будущие цели.</p></div>
				</div>
			</div>
		</div>
	)
}

export default Description
