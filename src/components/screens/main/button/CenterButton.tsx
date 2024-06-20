import React, { FC } from 'react'
import styles from './CenterButton.module.scss'
import cn from 'classnames'
import Link from 'next/link'

interface CenterButtonProps {
	icon?: React.ReactNode
	text: string
}

const CenterButton: FC<CenterButtonProps> = ({ icon, text }) => {
	return (
		<div className={cn(styles.base, 'wrapper')}>
			<Link href={'https://lk.telebon.ru/registration'} target={'_blank'}>
				<button>
					{icon}
					{text}
				</button>
			</Link>
		</div>
	)
}

export default CenterButton
