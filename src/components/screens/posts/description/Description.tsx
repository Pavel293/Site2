import styles from './Description.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import useMatchMedia from '@/hooks/useMatchMedia'
import { motion } from 'framer-motion'
import { Card, formatDescription } from '@/screens/posts/post/home/Home'
import React, { FC } from 'react'
import Link from 'next/link'

interface DescriptionProps {
	cards: Card[]
}

const Description: FC<DescriptionProps> = ({ cards }) => {
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
							src={cards[0].image.url}
							alt={cards[0].image.alternativeText}
							loading="lazy"
							width={512}
							height={512}
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
						<h2>{cards[0].title}</h2>
						<p>{formatDescription(cards[0].description)}</p>
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
						<h2>{cards[1].title}</h2>
						<p>{formatDescription(cards[0].description)}</p>
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
							src={cards[1].image.url}
							alt={cards[1].image.alternativeText}
							loading="lazy"
							width={512}
							height={512}
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
							src={cards[2].image.url}
							alt={cards[2].image.alternativeText}
							loading="lazy"
							width={512}
							height={512}
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
						<h2>{cards[2].title}</h2>
						<p>{formatDescription(cards[2].description)}</p>
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
						<h2>{cards[3].title}</h2>
						<p>{formatDescription(cards[3].description)}</p>
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
							src={cards[3].image.url}
							alt={cards[3].image.alternativeText}
							loading="lazy"
							width={512}
							height={512}
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
							src={cards[4].image.url}
							alt={cards[4].image.alternativeText}
							loading="lazy"
							width={512}
							height={512}
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
						<h2>{cards[4].title}</h2>
						<p>{formatDescription(cards[4].description)}</p>
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
						<h2>{cards[5].title}</h2>
						<p>{formatDescription(cards[5].description)}</p>
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
							src={cards[5].image.url}
							alt={cards[5].image.alternativeText}
							loading="lazy"
							width={512}
							height={512}
						/>
					</motion.div>
				</div>
				<Link
					href={'https://lk.telebon.ru/registration'}
					target={'_blank'}
					style={{
						display: 'flex',
						justifyContent: isMobile ? 'center' : 'flex-start',
					}}
				>
					<button aria-labelledby="Попробовать сейчас">
						Попробовать сейчас
					</button>
				</Link>
			</div>
		</div>
	)
}

export default Description
