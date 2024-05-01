import React, { FC } from 'react'
import styles from './Hero.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import HeroPhoneImage from '../../../../assets/icons/HeroPhoneImage.png'
import CommonButton from '@/ui/button/CommonButton'

interface HeroProps {
	nextBlockRef: React.RefObject<HTMLDivElement>
}

const Hero: FC<HeroProps> = ({ nextBlockRef }) => {
	// const scrollToComponent = () => {
	// 	if (nextBlockRef.current) {
	// 		const windowHeight = window.innerHeight
	// 		const { top, height } = nextBlockRef.current.getBoundingClientRect()
	// 		const scrollPosition =
	// 			top + window.scrollY - (windowHeight / 2 - height / 2)
	// 		window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
	// 	}
	// }
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
						<div className={styles.additionalText}>
							<p itemProp="description">
								Увеличьте количество записей и автоматизируйте работу с
								клиентской базой
							</p>
						</div>
					</div>
					<noindex>
						<CommonButton
							href="https://lk.telebon.ru/registration"
							color={'primary'}
							size={'s'}
							target={'_blank'}
						>
							Попробовать
						</CommonButton>
					</noindex>
				</div>
				<div className={styles.right}>
					<div>
						<Image src={HeroPhoneImage} alt={'Телеграм бот'} />
					</div>
					{/*<div className={styles.phone_image} onClick={scrollToComponent}>*/}
					{/*	<IconInstance name={EIcons.callimage} />*/}
					{/*</div>*/}
				</div>
			</div>
		</div>
	)
}

export default Hero
