import React from 'react'
import styles from './Support.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import DialogImage from '../../../assets/icons/SupportImage.svg'

const Support = () => {
	return (
		<div className={cn(styles.fuck, 'wrapper')}>
			<div className={cn(styles.left)}>
				<div className={styles.head}>
					<h1>Настоящая техническая поддержка</h1>
				</div>
				<div className={styles.box}>
					<div className={styles.additionalText}>
						<h2>Помогаем</h2>
						<p>
							Наша команда всегда на связи и готова ответить на вопросы и решить
							все проблемы.
						</p>
						<h2>Не используем ботов</h2>
						<p>Наша техподдержка работает без роботов. Только живые люди!</p>
						<h2>Всегда на связи</h2>
						<p>
							Мы всегда рады обратной связи, вашим идеям и предложениям.
							Напишите нам hello@telebon.ru
						</p>
					</div>
				</div>
			</div>
			<div className={styles.right}>
				<div style={{ position: 'relative', width: '432px', height: '457px' }}>
					<Image src={DialogImage} alt="Dialog Image" />
				</div>
			</div>
		</div>
	)
}

export default Support
