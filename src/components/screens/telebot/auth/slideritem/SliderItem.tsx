import React, { FC } from 'react'
import styles from './SliderItem.module.scss'

interface ICard {
	icon: any
}

interface IProps {
	item: ICard
}

const SliderItem: FC<IProps> = props => {
	const { item } = props

	return <div className={styles.card}>{item.icon}</div>
}

export default SliderItem
