import React, { FC } from 'react'
import styles from './Start.module.scss'
import cn from 'classnames'
const Start: FC = () => {
	return (
		<div className={cn(styles.base, 'wrapper')}>
			<p>Легко начать, поможем с первыми шагами </p>
			<div className={styles.main_container}>
				<div className={styles.card}>
					<div className={styles.text}>
						<p>
							Узнаем <br />
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
							Перенесем <br />
							данные
						</p>
						<span>
							Возьмем на себя все трудности <br />с базой клиентов
						</span>
					</div>
					<div className={styles.num}>
						<p>2</p>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.text}>
						<p>
							Настроим <br />
							сервис
						</p>
						<span>
							Настроим все необходимое <br />
							для работы
						</span>
					</div>
					<button>Узнать больше</button>
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
