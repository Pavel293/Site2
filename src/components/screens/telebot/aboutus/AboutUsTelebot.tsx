import React, { FC } from 'react'
import styles from './AboutUsTelebot.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'

const AboutUsTelebot: FC = () => {
	return (
		<div className={cn(styles.fuck, 'wrapper')}>
			<div className={styles.main_container}>
				<div className={styles.title}>
					<h2>Почему именно Telegram-бот?</h2>
				</div>
				<div className={styles.column}>
					<div className={styles.row}>
						<div className={styles.card}>
							<IconInstance name={EIcons.circlebolt} />
							<p className={styles.title}><span>Ускорение</span> бизнес-процессов</p>
							<p className={styles.description}>
								Настройте возможность онлайн-записи при помощи бота и забудьте про ручную запись Клиентов на услуги
							</p>
						</div>
						<div className={styles.card}>
							<IconInstance name={EIcons.click} />
							<p className={styles.title}>Простота <span>использования</span></p>
							<p className={styles.description}>
								Клиенту не нужно писать информацию о себе. Он может записаться в несколько кликов просто перейдя по
								ссылке в приложение Telegram
							</p>
						</div>
					</div>
					<div className={styles.row}>
						<div className={styles.card}>
							<IconInstance name={EIcons.marketing} />
							<p className={styles.title}>Упрощает <span>рекламу бренда</span></p>
							<p className={styles.description}>
								Просто заполните данные об услугах, их исполнителях и рабочие графики. Telebon автоматически сгенерирует
								ссылку, которую можно будет прикрепить в любой рекламный блок
							</p>
						</div>
						<div className={styles.card}>
							<IconInstance name={EIcons.hourglass} />
							<p className={styles.title}>В ногу со <span>временем</span></p>
							<p className={styles.description}>Telegram, на текущий момент, самый популярный мессенджер. Пришло время влиться и получать новых
								Клиентов</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUsTelebot
