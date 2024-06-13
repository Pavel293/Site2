import React, { FC } from 'react'
import styles from './CenterButton.module.scss'
import cn from 'classnames'

interface CenterButtonProps {
	icon?: React.ReactNode
	text: string
}

const CenterButton: FC<CenterButtonProps> = ({ icon, text }) => {
	return (
		<div className={cn(styles.base, 'wrapper')}>
			<button>
				{icon}
				{text}
			</button>
		</div>
	)
}

export default CenterButton
