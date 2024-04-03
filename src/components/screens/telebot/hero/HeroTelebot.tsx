import React, { FC } from 'react'
import styles from './HeroTelebot.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import HeroChatImage from '../../../../assets/icons/HeroChatImage.png'
import HeroPhoneImage from '../../../../assets/icons/HeroPhoneImage.png'
import Link from 'next/link'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import useMatchMedia from '@/hooks/useMatchMedia'

interface HeroProps {
	nextBlockRef: React.RefObject<HTMLDivElement>
}

const HeroTelebot: FC<HeroProps> = ({ nextBlockRef }) => {
	const isMobile = useMatchMedia('768')
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
		<div className={cn(styles.fuck, 'wrapper')}>
			<div className={styles.main_container}>
				<div className={styles.head}>
					{isMobile ? (
						<h1 itemProp="name">
							Предоставьте клиентам <span>готовую форму онлайн-записи </span> в
							Telegram
						</h1>
					) : (
						<h1 itemProp="name">
							Предоставьте клиентам <span>готовую форму онлайн-записи </span>{' '}
							через Telegram
						</h1>
					)}
				</div>
				<div className={styles.additionalText}>
					{isMobile ? (
						<p itemProp="description">
							Увеличьте количество записей и автоматизируйте клиентскую базу
						</p>
					) : (
						<p itemProp="description">
							Telebon позволяет осуществлять запись на услуги простым и
							привычным способом при помощи бота за <span>10 рублей/день!</span>
						</p>
					)}
				</div>
				<div className={cn(styles.active, styles.buttons)}>
					<span className={styles.auth}>
						<Link href="https://lk.telebon.ru/registration">Подключить</Link>
					</span>
				</div>
				<div className={styles.phone_image} onClick={scrollToComponent}>
					<IconInstance name={EIcons.callimage} />
				</div>
			</div>
		</div>
	)
}

export default HeroTelebot
