import React, { FC } from 'react'
import styles from './Cooperation.module.scss'
import cn from 'classnames'
import CommonButton from '@/ui/button/CommonButton'

const Cooperation: FC = () => {
	return (
		<div
			className={cn(styles.fuck, 'wrapper')}
			itemScope
			itemType="http://schema.org/SoftwareApplication"
		>
			<div className={styles.main_container}>
				<h2>
					Не отставайте от конкурентов, <span>начните сотрудничество</span> с
					Telebon уже сегодня!
				</h2>
				<CommonButton
					target={'_blank'}
					size={'m'}
					color={'orange'}
					href={'https://lk.telebon.ru/registration'}
				>
					Начать
				</CommonButton>
			</div>
		</div>
	)
}

export default Cooperation
