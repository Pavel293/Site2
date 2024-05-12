import React, { FC } from 'react'
import styles from './SliderItem.module.scss'
import cn from 'classnames'
import { ICard } from '@/screens/main/slider/SliderBlock'

interface IProps {
	item: ICard
	index: number
}

const SliderItem: FC<IProps> = props => {
	const { item, index } = props
	return (
		<div className={styles.base}>
			<div className={cn(styles.card, styles[`card${index}`])}>
				<div className={styles.icon}>{item.icon}</div>
				<p>{item.title}</p>
				<div className={styles.image}>{item.image}</div>
			</div>
		</div>
	)
}

export default SliderItem
