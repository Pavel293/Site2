import React, { FC } from 'react'
import styles from './Hero.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import HeroChatImage from '../../../../assets/icons/HeroChatImage.png'
import HeroPhoneImage from '../../../../assets/icons/HeroPhoneImageNew.png'
import Link from 'next/link'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'

interface HeroProps {
	nextBlockRef: React.RefObject<HTMLDivElement>
}

const Hero: FC<HeroProps> = ({ nextBlockRef }) => {
	const scrollToComponent = () => {
		if (nextBlockRef.current) {
			const windowHeight = window.innerHeight
			const { top, height } = nextBlockRef.current.getBoundingClientRect()
			const scrollPosition =
				top + window.scrollY - (windowHeight / 2 - height / 2)
			window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
		}
	}
	return (
		<div
			className={cn(styles.fuck, 'wrapper')}
			itemScope
			itemType="http://schema.org/SoftwareApplication"
		>
			<div className={styles.main_container}>
				<div className={cn(styles.left)}>
					<div className={styles.head}>
						<h1 itemProp="name">
							Новый сервис с <span>возможностью записи клиентов</span> в
							Telegram
						</h1>
					</div>
					<div className={styles.additionalText}>
						<p itemProp="description">
							Увеличьте количество записей и автоматизируйте клиентскую базу
						</p>
					</div>
					<noindex>
						<button className={cn(styles.active, styles.buttons)}>
							<span className={styles.auth}>
								<Link href="https://lk.telebon.ru/registration">
									Попробовать
								</Link>
							</span>
						</button>
					</noindex>
				</div>
				<div className={styles.right}>
					<div>
						<Image src={HeroChatImage} alt={'Онлайн запись на услуги'} />
					</div>
					<div>
						<Image src={HeroPhoneImage} alt={'Телеграм бот'} />
					</div>
					<div className={styles.phone_image} onClick={scrollToComponent}>
						<IconInstance name={EIcons.callimage} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
