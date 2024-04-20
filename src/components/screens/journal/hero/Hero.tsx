import React, { FC } from 'react'
import styles from './Hero.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import HeroPhoneImage from '../../../../assets/icons/HeroPhoneImageJournal.png'
import CommonButton from '@/ui/button/CommonButton'
import useMatchMedia from '@/hooks/useMatchMedia'

interface HeroProps {
	nextBlockRef: React.RefObject<HTMLDivElement>
}

const Hero: FC<HeroProps> = ({ nextBlockRef }) => {
	const isMobile = useMatchMedia('768')
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
							Электронный журнал записи клиентов в CRM-системе:
							{isMobile ? <> </> : <br />}
							<span>
								удобное и эффективное решение
								<br />
								для сферы услуг
							</span>
						</h1>
					</div>
					<div className={styles.additionalText}>
						<p itemProp="description">
							Хотите оптимизировать процесс записи клиентов и повысить
							<br />
							эффективность работы своего бизнеса? Электронный журнал записи
							клиентов в <span>Telebon</span> - идеальное решение для сферы
							услуг!
						</p>
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
				</div>
			</div>
		</div>
	)
}

export default Hero
