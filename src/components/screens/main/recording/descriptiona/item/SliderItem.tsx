import React, { FC } from 'react'
import styles from './SliderItem.module.scss'
import cn from 'classnames'
import { PropoData } from '@/screens/main/recording/descriptiona/DescriptionA'

interface IProps {
	item: PropoData
	index: number
}

const SliderItem: FC<IProps> = props => {
	const { item, index } = props
	return (
		<div className={styles.base}>
			<div className={styles.card}>
				<div className={styles.image}>{item.img}</div>
				<p>{item.description}</p>
				<div className={styles.row}>
					<div className={styles.icon}>{item.icon}</div>
					<p>{item.title}</p>
				</div>
			</div>
		</div>
	)
}

export default SliderItem
