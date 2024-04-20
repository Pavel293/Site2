import React, { FC } from 'react'
import styles from './Solution.module.scss'
import cn from 'classnames'
import useMatchMedia from '@/hooks/useMatchMedia'
import Image from 'next/image'
import MacBookJournal from '../../../../assets/icons/MacBookJournal.png'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'

const Solution: FC = () => {
	const isMobile = useMatchMedia('768')
	return (
		<div
			className={cn(styles.fuck, 'wrapper')}
			itemScope
			itemType="http://schema.org/SoftwareApplication"
		>
			<div className={styles.main_container}>
				<h2>
					С помощью этого
					<br />
					инновационного инструмента, вы сможете
				</h2>
				<div className={styles.bottom}>
					<div className={styles.row}>
						<div className={styles.card}>
							<IconInstance name={EIcons.successoutline} />
							<p>Управлять расписанием сотрудников</p>
						</div>
						<div className={styles.card}>
							<IconInstance name={EIcons.successoutline} />
							<p>Легко и быстро записывать клиентов на услуги без накладок</p>
						</div>
						<div className={styles.card}>
							<IconInstance name={EIcons.successoutline} />
							<p>Отслеживать их историю взаимодействия с вашей компанией</p>
						</div>
						<div className={styles.card}>
							<IconInstance name={EIcons.successoutline} />
							<p>Видеть все важные детали на одном экране</p>
						</div>
					</div>
					<Image src={MacBookJournal} alt={''} />
				</div>
			</div>
		</div>
	)
}

export default Solution
