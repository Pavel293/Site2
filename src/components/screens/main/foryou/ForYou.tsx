import React, { FC } from 'react'
import styles from './ForYou.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import useMatchMedia from '@/hooks/useMatchMedia'
import Card1 from '../../../../assets/icons/main/foryou/Card1.webp'
import Card2 from '../../../../assets/icons/main/foryou/Card2.webp'
import Card3 from '../../../../assets/icons/main/foryou/Card3.webp'
import Card4 from '../../../../assets/icons/main/foryou/Card4.webp'
import Card5 from '../../../../assets/icons/main/foryou/Card5.webp'
import Card6 from '../../../../assets/icons/main/foryou/Card6.webp'
import { motion } from 'framer-motion'

const ForYou: FC = () => {
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
							hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
						}}
						className={styles.text}
					>
						<h3>Телебон для{isMobile ? null : <br />} вашего бизнеса</h3>
					</motion.div>
					{isMobile ? (
						<div className={styles.column}>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.5 }}
								variants={{
									visible: { opacity: 1, y: 0 },
									hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
								}}
								className={styles.row}
							>
								<div className={styles.small_card}>
									<Image src={Card1} alt={''} loading="lazy" />
									<p>Барберы</p>
								</div>
								<div className={styles.small_card}>
									<Image src={Card2} alt={''} loading="lazy" />
									<p>Студии</p>
								</div>
							</motion.div>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.5 }}
								variants={{
									visible: { opacity: 1, y: 0 },
									hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
								}}
								className={styles.row}
							>
								<div className={styles.small_card}>
									<Image src={Card3} alt={''} loading="lazy" />
									<p>Мастера</p>
								</div>
								<div className={styles.small_card}>
									<Image src={Card4} alt={''} loading="lazy" />
									<p>Салоны</p>
								</div>
							</motion.div>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.5 }}
								variants={{
									visible: { opacity: 1, y: 0 },
									hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
								}}
								className={styles.small_card}
							>
								<Image src={Card5} alt={''} loading="lazy" />
								<p>Бровисты</p>
							</motion.div>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.5 }}
								variants={{
									visible: { opacity: 1, y: 0 },
									hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
								}}
								className={styles.small_card}
							>
								<Image src={Card6} alt={''} loading="lazy" />
								<p>Посмотреть всё</p>
							</motion.div>
						</div>
					) : (
						<div className={styles.column}>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.5 }}
								variants={{
									visible: { opacity: 1, y: 0 },
									hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
								}}
								className={styles.row}
							>
								<div className={styles.small_card}>
									<Image src={Card1} alt={''} loading="lazy" />
									<p>Барберы</p>
								</div>
								<div className={styles.small_card}>
									<Image src={Card2} alt={''} loading="lazy" />
									<p>Студии</p>
								</div>
								<div className={styles.small_card}>
									<Image src={Card3} alt={''} loading="lazy" />
									<p>Мастера</p>
								</div>
							</motion.div>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.5 }}
								variants={{
									visible: { opacity: 1, y: 0 },
									hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
								}}
								className={styles.row}
							>
								<div className={styles.small_card}>
									<Image src={Card4} alt={''} loading="lazy" />
									<p>Салоны</p>
								</div>
								<div className={styles.small_card}>
									<Image src={Card5} alt={''} loading="lazy" />
									<p>Бровисты</p>
								</div>
								<div className={styles.small_card}>
									<Image src={Card6} alt={''} loading="lazy" />
									<p>Посмотреть всё</p>
								</div>
							</motion.div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default ForYou
