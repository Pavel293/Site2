import React, { FC } from 'react'
import styles from './Contact.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'

const Contact: FC = () => {
	return (
		<div className={cn(styles.base, 'wrapper')}>
			<div className={styles.main_container}>
				<div className={styles.card}>
					<div className={styles.title}>
						<p>Чат с CEO</p>
					</div>
					<div className={styles.text}>
						<p>
							Наш основатель и CEO, Михаил <br />
							Кириллов открыт для всех.{' '}
						</p>
					</div>
					<button>
						<p>Написать Михаилу</p>
						<IconInstance name={EIcons.rightarrow} />
					</button>
				</div>
				<div className={styles.card}>
					<div className={styles.title}>
						<p>Служба поддержки</p>
					</div>
					<div className={styles.text}>
						<p>
							Мы с радостью поможем решить <br />
							любую возникшую проблему.
						</p>
					</div>
					<button>
						<p>Начать</p>
						<IconInstance name={EIcons.rightarrow} />
					</button>
				</div>
				<div className={styles.card}>
					<div className={styles.title}>
						<p>Чат пользователей</p>
					</div>
					<div className={styles.text}>
						<p>
							Присоединяйтесь в наш чат для <br />
							общения с другими пользователями.
						</p>
					</div>
					<button>
						<p>Telegram</p>
						<IconInstance name={EIcons.rightarrow} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Contact
