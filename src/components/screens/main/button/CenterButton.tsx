import React, { FC } from 'react'
import styles from './CenterButton.module.scss'
import cn from 'classnames'
const CenterButton: FC = () => {
	return (
		<div className={cn(styles.base, 'wrapper')}>
			<button>ПОЛУЧИТЬ ДОСТУП</button>
		</div>
	)
}

export default CenterButton
