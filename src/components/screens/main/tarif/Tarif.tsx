import React, { FC } from 'react'
import styles from './Tarif.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import CommonButton from '@/ui/button/CommonButton'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import TarifPhoneImage from '../../../../assets/icons/TarifPhoneImage.png'
import Image from 'next/image'
import useMatchMedia from '@/hooks/useMatchMedia'
const Tarif: FC = () => {
	const isMobile = useMatchMedia('768')
	return (
		<div className={cn(styles.fuck, 'wrapper')}>
			<div className={styles.box}>
				{isMobile ? null : <IconInstance name={EIcons.roublecircle} />}
				<div className={styles.main_container}>
					<div className={styles.title}>
						<h2>10 рублей за Всё</h2>
						<p>
							Давайте мы возьмем все сложности на себя? Ознакомьтесь с нашей
							ценовой политикой
						</p>
					</div>
					{isMobile ? null : (
						<CommonButton href="/price" color={'orange'} size={'m'}>
							Попробовать
						</CommonButton>
					)}
				</div>
				<Image src={TarifPhoneImage} alt={'10 рублей за Всё'} />
				{isMobile ? (
					<CommonButton href="/price" color={'orange'} size={'fill'}>
						Попробовать
					</CommonButton>
				) : null}
			</div>
		</div>
	)
}

export default Tarif
