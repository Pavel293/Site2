import React, { FC } from 'react'
import styles from './Recording.module.scss'
import cn from 'classnames'
import useMatchMedia from '@/hooks/useMatchMedia'
import Image from 'next/image'
import MacBookJournal from '../../../../assets/icons/MacBookJournal.png'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'

const Recording: FC = () => {
	const isMobile = useMatchMedia('768')
	return (
		<div
			className={cn(styles.fuck, 'wrapper')}
			itemScope
			itemType="http://schema.org/SoftwareApplication"
		>
			<div className={styles.main_container}>
				<h2>
					Индивидуальные и групповые записи в CRM-системе для сферы услуг:
					удобство и преимущества перед традиционными методами
				</h2>
				<div className={styles.video_container}>
					<p>
						Современные технологии предлагают бизнесу множество инновационных
						инструментов для улучшения процессов работы, в том числе и записи
						клиентов.
					</p>
					<video className={styles.video} autoPlay loop muted>
						<source
							src="/video/create_solo_recording_on_computer.mp4"
							type="video/mp4"
						/>
						Ваш браузер не поддерживает видео
					</video>
				</div>
				<div></div>
				<div className={styles.video_container}>
					<p>
						Индивидуальные и групповые записи в CRM-системе для сферы услуг -
						это эффективное решение, которое значительно упрощает и оптимизирует
						взаимодействие с клиентами.
					</p>
					<video className={styles.video} autoPlay loop muted>
						<source
							src="/video/create_group_recording_on_computer.mp4"
							type="video/mp4"
						/>
						Ваш браузер не поддерживает видео
					</video>
				</div>
			</div>
		</div>
	)
}

export default Recording
