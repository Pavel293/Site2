import React, { FC } from 'react'
import styles from './SliderItem.module.scss'

interface IProps {
	item: ICard
}

interface ICard {
	icon: any
	title: string
	description: string
}

const SliderItem: FC<IProps> = props => {
	const { item } = props

	return (
		<div className={styles.card}>
			{item.icon}
			<p className={styles.title}>{item.title}</p>
			<p>{item.description}</p>
		</div>
	)
}

export default SliderItem
