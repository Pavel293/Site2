import React, { FC } from 'react'
import styles from './AboutUs.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import useMatchMedia from '@/hooks/useMatchMedia'
const AboutUs: FC = () => {
	const isMobile = useMatchMedia('768')
	return (
		<div
			className={cn(styles.fuck, 'wrapper')}
			itemScope
			itemType="http://schema.org/Organization"
		>
			<div className={styles.main_container}>
				<div className={styles.title}>
					<h2 itemProp="name">Почему именно Telebon?</h2>
				</div>
				<div className={styles.card_container}>
					<div className={styles.card}>
						<p className={styles.p100}>100+</p>
						<p className={styles.title}>Постоянных партнеров</p>
						<p>
							Нам уже доверились и успешно работают как частные мастера, так и
							компании в сфере услуг
						</p>
					</div>
					<div className={styles.card}>
						<IconInstance name={EIcons.usersauduo} />
						<p className={styles.title}>Подстраиваемся под запросы клиентов</p>
						<p>
							Telebon готов меняться вместе с Вами. Специалисты рассмотрят любой
							запрос, найдут варианты внедрения в систему
						</p>
					</div>
				</div>
				<div className={styles.card_container}>
					<div className={styles.card}>
						<IconInstance name={EIcons.robot} />
						<p className={styles.title}>Тelegram-бот</p>
						<p>
							Возможность легкой записи для Ваших клиентов в самом популярном
							мессенджере
						</p>
					</div>
					<div className={styles.card}>
						<IconInstance name={EIcons.contactsupport} />
						{isMobile ? (
							<p className={styles.title}>
								Активная клиентская
								<br /> поддержка
							</p>
						) : (
							<p className={styles.title}>
								Активная
								<br /> клиентская поддержка
							</p>
						)}

						<p>
							Всегда на связи 24/7,
							<br /> 7 дней в неделю готовы помочь
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
