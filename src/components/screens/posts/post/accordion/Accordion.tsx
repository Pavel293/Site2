import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './Accordion.module.scss'
import cn from 'classnames'
import useMatchMedia from '@/hooks/useMatchMedia'
import { motion } from 'framer-motion'
import { EIcons, Icon } from '../../../../../assets/icons/icon'
import Link from 'next/link'
import { CardFAQ, formatDescription } from '@/screens/posts/post/home/Home'
import { ComponentPageFaq } from '@/screens/posts/interfaces'

interface AccordionProps {
	data: ComponentPageFaq
}

export type Height = 'auto' | number | `${number}%`

const Accordion: FC<AccordionProps> = ({ data }) => {
	const isMobile = useMatchMedia('768')
	const [activeIndices, setActiveIndices] = useState<Height[]>([])
	const [heights, setHeights] = useState<number[]>([])
	const contentRefs = useRef<(HTMLDivElement | null)[]>([])

	const toggleAccordion = (index: number) => {
		setActiveIndices(prev =>
			prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index],
		)
	}

	useEffect(() => {
		const resizeObservers: ResizeObserver[] = contentRefs.current
			.map((ref, index) => {
				if (ref) {
					const observer = new ResizeObserver(() => {
						setHeights(prevHeights => {
							const newHeights = [...prevHeights]
							newHeights[index] = ref.scrollHeight
							return newHeights
						})
					})
					observer.observe(ref)
					return observer
				}
				return null
			})
			.filter((observer): observer is ResizeObserver => observer !== null)

		return () => {
			resizeObservers.forEach(observer => observer.disconnect())
		}
	}, [data])

	const heightVariants = data.Faq_card.map((_, index) => ({
		visible: {
			height: heights[index] || 'auto',
			padding: '3.125vw 0 1.0417vw',
		},
		hidden: { height: 0, padding: '0' },
	}))

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.up}>
				<h3>Часто задаваемые {isMobile ? null : <br />}вопросы</h3>
			</div>
			<div className={styles.container}>
				{data.Faq_card.map((item, index) => (
					<motion.div
						key={index}
						className={styles.accordionItem}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
						}}
					>
						<div
							className={styles.accordionHeader}
							onClick={() => toggleAccordion(index)}
						>
							<h4>{item.Question}</h4>
							<motion.div
								initial="hidden"
								animate={activeIndices.includes(index) ? 'visible' : 'hidden'}
								transition={{ duration: 0.5 }}
								variants={{
									visible: { rotate: '200grad' },
									hidden: { rotate: 0 },
								}}
							>
								<Icon name={EIcons.triangle} />
							</motion.div>
						</div>
						<motion.div
							initial="hidden"
							animate={activeIndices.includes(index) ? 'visible' : 'hidden'}
							transition={{ duration: 0.5 }}
							variants={heightVariants[index]}
							className={styles.accordionContent}
							ref={el => (contentRefs.current[index] = el)}
						>
							<div>{formatDescription(item.Answer)}</div>
						</motion.div>
					</motion.div>
				))}
				<div className={styles.buttons}>
					<Link href={'https://lk.telebon.ru/registration'} target={'_blank'}>
						<button className={styles.black} aria-labelledby="Регистрация">
							Регистрация
						</button>
					</Link>
					<Link href={'https://lk.telebon.ru/auth'} target={'_blank'}>
						<button aria-labelledby="Войти">Войти</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Accordion
