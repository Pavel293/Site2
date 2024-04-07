import React, { FC } from 'react'
import styles from './HeroPrice.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import HeroChatImage from '../../../../assets/icons/HeroChatImage.png'
import HeroPhoneImage from '../../../../assets/icons/HeroPhoneImage.png'
import Link from 'next/link'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import CommonButton from '@/ui/button/CommonButton'

interface HeroProps {
	nextBlockRef: React.RefObject<HTMLDivElement>
}

const HeroPrice: FC<HeroProps> = ({ nextBlockRef }) => {
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
					<h1 itemProp="name">
						<span>Две недели бесплатно: </span> откройте новые возможности
						вместе с Telebon
					</h1>
				</div>
				<div className={styles.additionalText}>
					<p itemProp="description">
						Никаких хитростей - после окончания пробного периода цена
						фиксированная
					</p>
				</div>
				<noindex>
					<CommonButton
						href="https://lk.telebon.ru/registration"
						color={'primary'}
						size={'s'}
					>
						Попробовать
					</CommonButton>
				</noindex>
				<div className={styles.phone_image} onClick={scrollToComponent}>
					<IconInstance name={EIcons.callimage} />
				</div>
			</div>
		</div>
	)
}

export default HeroPrice
