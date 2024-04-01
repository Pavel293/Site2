import React, { FC } from 'react'
import styles from './PortalPrice.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import PortalScreen from '../../../../assets/icons/PortalScreen.png'
const PortalPrice: FC = () => {
	return (
		<div className={cn(styles.fuck, 'wrapper')}>
			<div className={styles.main_container}>
				<div className={styles.title}>
					<h2>Telebon использует ежедневное списание средств</h2>
					<p>Вы можете пополнять баланс любыми суммами в любое время</p>
				</div>
				<div className={styles.image}>
					<Image
						src={PortalScreen}
						alt={
							'Telebon использует ежедневное списание средств, чтобы Вы могли ' +
							'пополнять баланс любыми суммами в любое удобное время'
						}
					/>
				</div>
			</div>
		</div>
	)
}

export default PortalPrice
