import React, { FC } from 'react'
import styles from './Start.module.scss'
import cn from 'classnames'
const Start: FC = () => {
	return (
		<div className={cn(styles.base, 'wrapper')}>
			<div className={styles.text}>
				<p>Служба поддержки</p>
				<span>
					Помогают решить любой возникший вопрос по <br />
					работе с системой
				</span>
			</div>
			<div className={styles.main_container}>
				<div className={styles.card}>
					<div className={styles.text}>
						<p>
							Узнают <br />
							потребности
						</p>
						<span>
							Расскажем как удобно и <br />
							быстро начать работу
						</span>
					</div>
					<div className={styles.num}>
						<p>1</p>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.text}>
						<p>
							Перенесут <br />
							все данные
						</p>
						<span>
							Возьмут на себя все трудности с<br /> переездом
						</span>
					</div>
					<div className={styles.num}>
						<p>2</p>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.text}>
						<p>
							Согласуют
							<br /> бесплатный период
						</p>
						<span>
							Компенсируем лицензии
							<br /> других систем
						</span>
					</div>
					<div className={styles.num}>
						<p>3</p>
					</div>
				</div>
				<div className={styles.circle}></div>
			</div>
		</div>
	)
}

export default Start
