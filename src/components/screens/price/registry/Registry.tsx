import React, { FC } from 'react'
import styles from './Registry.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import RegistryImage from '../../../../assets/icons/RegistryImage.png'
import RegistryImageMobile from '../../../../assets/icons/RegistryImageMobile.png'
import useMatchMedia from '@/hooks/useMatchMedia'
const Registry: FC = () => {
	const isMobile = useMatchMedia('768')
	return (
		<div className={cn(styles.fuck, 'wrapper')}>
			<div className={styles.main_container}>
				{isMobile ? (
					<Image
						src={RegistryImageMobile}
						alt={'Создание Telegram-бота для онлайн-записей'}
					/>
				) : (
					<Image
						src={RegistryImage}
						alt={'Создание Telegram-бота для онлайн-записей'}
					/>
				)}
			</div>
		</div>
	)
}

export default Registry
