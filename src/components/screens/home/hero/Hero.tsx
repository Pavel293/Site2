import { FC } from 'react'
import styles from './Hero.module.scss'
import Image from 'next/image'
import HeroImage from '../../../../assets/hero.png'
import cn from 'classnames'
import Button from '@/ui/button/Button'
import { motion } from 'framer-motion'
import { staggerContainer, slideIn, textVariant, zoomIn } from '@/utils/motion'
import TextAnimation from '@/ui/animation/text-animation/TextAnimation'

const Hero: FC = () => {
	const texts = [
		'телефонии',
		'клиентской базы',
		'маркетинга',
		'контроля качества',
	]
	return (
		<motion.div
			variants={staggerContainer()}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className={cn(styles.fuck, 'wrapper')}
		>
			<div className={cn(styles.left)}>
				<div className={styles.head}>
					<motion.h1 variants={textVariant(1.1)}>
						Запись на услуги и автоматизация
						<TextAnimation texts={texts} />
					</motion.h1>
					<motion.h4 variants={textVariant(1.2)}>
						<span className="text-primary ">TELEBON</span> - Сервис для роста
						продаж и количества записей
					</motion.h4>
				</div>
				<motion.form variants={textVariant(1.3)} className={styles.form}>
					<input placeholder="Ваш адрес электронной почты" />
					<Button>Попробовать</Button>
				</motion.form>
			</div>

			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className={styles.right}
			>
				<Image
					className="relative  top-0"
					priority
					placeholder="blur"
					quality={100}
					layout="responsive"
					src={HeroImage}
					alt="Hero"
				/>
			</motion.div>
		</motion.div>
	)
}

export default Hero
