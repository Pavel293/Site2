import { FC } from 'react'
import styles from './Hero.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import TextAnimation from '@/ui/animation/text-animation/TextAnimation'
import LaptopTelebon from '../../../assets/icons/LaptopTelebon.svg'
import Link from 'next/link'
const Hero: FC = () => {
	const texts = [
		'телефонии',
		'клиентской базы',
		'маркетинга',
		'контроля качества',
	]
	return (
		<div className={cn(styles.fuck, 'wrapper')}>
			<div className={cn(styles.left)}>
				<div className={styles.head}>
					<h1 itemProp="name">
						Запись на услуги и автоматизация
						<TextAnimation texts={texts} />
					</h1>
				</div>
				<div className={styles.additionalText} itemProp="description">
					<p>Бесплатный сервис для компаний и частных специалистов</p>
					<div className={cn(styles.active, styles.buttons)}>
						<span className={styles.auth}>
							<Link href="https://lk.telebon.ru/registration">
								Настроить за 5 минут
							</Link>
						</span>
					</div>
				</div>
				<div className={styles.image}>
					<Image src={LaptopTelebon} alt={''} />
				</div>
			</div>
		</div>
	)
}

export default Hero
