import React, { FC, useState } from 'react'
import styles from './Recording.module.scss'
import cn from 'classnames'
import RecordingPhone from '../../../../assets/icons/recording/RecordingPhone.png'
import RecordingPhoneJournal from '../../../../assets/icons/recording/RecordingPhoneJournal.png'
import Click from '../../../../assets/icons/recording/Click.png'
import Image from 'next/image'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Cards from '@/screens/main/recording/cards/Cards'
import DescriptionA from '@/screens/main/recording/descriptiona/DescriptionA'
import TelegramGif from '../../../../assets/icons/recording/TelegramGif.gif'
import RecordingTelegram from '../../../../assets/icons/recording/RecordingTelegram.png'

const Recording: FC = () => {
	const [hover, setHover] = useState(false)
	return (
		<div className={cn(styles.base, `wrapper`)}>
			<DescriptionA />
			<div className={styles.main_container}>
				<div className={styles.left}>
					<div className={styles.left_head}>
						<div className={styles.hrow}>
							<div className={styles.left_head}>
								<h2>Революция в онлайн записи</h2>
								<p>Персональный Telegram бот</p>
							</div>
							<div className={styles.circle}>
								<IconInstance name={EIcons.linkarrow} />
							</div>
						</div>
						<div className={styles.line}></div>
					</div>
					<div className={styles.image}>
						<div className={styles.phone}>
							<Image src={RecordingPhone} alt={''} />
						</div>
						<div className={styles.click}>
							<Image src={Click} alt={''} />
						</div>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.right_head}>
						<div className={styles.text}>
							<h3>Предоставьте клиентам возможность записываться свободно</h3>
							<p>
								Вашим клиентам больше не потребуется искать Ваш номер телефона
								или страницу в соцсетях. Он сможет просто открыть Telegram
							</p>
						</div>
						<div>
							<IconInstance name={EIcons.recordingtelegram} />
						</div>
						<div className={styles.circle}>
							<IconInstance name={EIcons.linkarrow} />
						</div>
					</div>
					<div className={styles.row}>
						<div
							className={styles.telegram_block}
							onMouseEnter={() => {
								setHover(true)
								setTimeout(() => {
									setHover(false)
								}, 1500)
							}}
						>
							<div className={styles.circle}>
								<IconInstance name={EIcons.linkarrow} />
							</div>
							<p>ПОДРОБНЕЕ</p>
							<Image src={hover ? TelegramGif : RecordingTelegram} alt="" />
						</div>
						<div className={styles.phone_block}>
							<div className={styles.circle}>
								<IconInstance name={EIcons.linkarrow} />
							</div>
							<Image src={RecordingPhoneJournal} alt={''} />
						</div>
					</div>
				</div>
			</div>
			<Cards />
		</div>
	)
}

export default Recording
