import React, { FC } from 'react'
import styles from './Description.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import useMatchMedia from '@/hooks/useMatchMedia'
import DescriptionCard1 from '../../../../assets/icons/main/description/DescriptionCard1.webp'
import DescriptionCard2 from '../../../../assets/icons/main/description/DescriptionCard2.webp'
import DescriptionCard3 from '../../../../assets/icons/main/description/DescriptionCard3.webp'
import { motion } from 'framer-motion'

const Description: FC = () => {
	const isMobile = useMatchMedia('768')

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.container}>
				<div className={styles.card}>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
						}}
					>
						<Image
							src={DescriptionCard1}
							alt={'Запись клиентов на маникюр онлайн'}
							loading="lazy"
						/>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
						}}
						className={styles.text}
					>
						<h2>Записывайте без лишних сложностей</h2>
						<p>
							Планируйте расписание и привлекайте клиентов через{' '}
							<span>Онлайн-запись 24/7</span>, автоматизируйте рассылки и
							сделайте свой бизнес более комфортным.
						</p>
					</motion.div>
				</div>
				<div className={styles.card}>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
						}}
						className={styles.text}
					>
						<h2>Забудьте о рутине, сфокусируйтесь на клиентах</h2>
						<p>
							Не отвлекайтесь на мелочи, сосредоточьтесь на важном.{' '}
							<span>Оптимизируйте процессы</span> и сфокусируйтесь на создании
							впечатлений для ваших клиентов.
						</p>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
						}}
					>
						<Image
							src={DescriptionCard2}
							alt={'Запись клиентов для мастера маникюра'}
							loading="lazy"
						/>
					</motion.div>
				</div>
				<div className={styles.card}>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
						}}
					>
						<Image
							src={DescriptionCard3}
							alt={'Аналитика бьюти бизнеса, как увеличить прибыль.'}
							loading="lazy"
						/>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
						}}
						className={styles.text}
					>
						<h2>Постройте бизнес, которым будете гордиться</h2>
						<p>
							Зарабатывайте больше и
							<span> принимайте решения на основе данных.</span> Наша платформа
							поможет вам на текущем этапе и подстроится под ваши будущие цели.
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default Description
