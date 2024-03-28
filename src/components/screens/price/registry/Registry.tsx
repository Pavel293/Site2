import React, { FC } from 'react'
import styles from './Registry.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import RegistryImage from '../../../../assets/icons/RegistryImage.png'
const Registry: FC = () => {
	return (
		<div className={cn(styles.fuck, 'wrapper')}>
			<div className={styles.main_container}>
				<Image
					src={RegistryImage}
					alt={'Создание Telegram-бота для онлайн-записей'}
				/>
			</div>
		</div>
	)
}

export default Registry
