import React, { FC, ReactNode, useState } from 'react'
import styles from './Rate.module.scss'
import cn from 'classnames'
import { propoData } from './promo-data'

const Rate = () => {
	return (
		<>
			<div className={cn(styles.fuck, 'wrapper')}>
				<h1>TELEBON - идеальный напарник</h1>
				<div className={styles.container}>
					{propoData.map((item, index) => (
						<div className={styles.card} key={index}>
							<h2>{item.title}</h2>
							<p>{item.description}</p>
							<h3>{index + 1}</h3>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Rate
