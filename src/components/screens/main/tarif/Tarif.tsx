import React, { FC, useState } from 'react'
import styles from './Tarif.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Image from 'next/image'
import Circle from '../../../../assets/icons/tarif/TarifCircle.png'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'

const Tarif: FC = () => {
	const [isActive, setIsActive] = useState(false)
	const [isFirstClick, setIsFirstClick] = useState(true)
	const isMobile = useMatchMedia('768')

	const toggleActive = () => {
		setIsActive(true)
		if (isFirstClick) {
			setTimeout(() => {
				window.open('https://lk.telebon.ru/registration', '_blank')
			}, 700)
			setIsFirstClick(false)
		} else {
			window.open('https://lk.telebon.ru/registration', '_blank')
		}
	}
	return (
		<div className={cn(styles.base, 'wrapper')}>
			<div className={styles.main_container}>
				<div className={styles.row}>
					<div className={styles.grid}>
						<div className={styles.text}>
							{isMobile ? (
								<h3>
									Попробуйте весь
									<br /> функционал
									<br /> бесплатно
								</h3>
							) : (
								<h3>Попробуйте бесплатно</h3>
							)}
							{isMobile ? null : (
								<p>
									Telebon предоставляет бесплатный пробный период
									<br /> в течении первых 14 дней после регистрации
								</p>
							)}
						</div>
						{isMobile ? (
							<div className={styles.column}>
								<div className={styles.rows}>
									<div className={styles.card}>
										<div className={styles.icon}>
											<IconInstance name={EIcons.tarifbell} />
										</div>
										<div className={styles.text}>
											<p>Уведомления</p>
										</div>
									</div>
									<div className={styles.card}>
										<div className={styles.icon}>
											<IconInstance name={EIcons.tarifchair} />
										</div>
										<div className={styles.text}>
											<p>Ресурсы</p>
										</div>
									</div>
									<div className={styles.card}>
										<div className={styles.icon}>
											<IconInstance name={EIcons.tarifstatistic} />
										</div>
										<div className={styles.text}>
											<p>Аналитика</p>
										</div>
									</div>
								</div>
								<div className={styles.rows}>
									<div className={styles.card}>
										<div className={styles.icon}>
											<IconInstance name={EIcons.tarifclients} />
										</div>
										<div className={styles.text}>
											<p>Клиенты</p>
										</div>
									</div>
									<div className={styles.card}>
										<div className={styles.icon}>
											<IconInstance name={EIcons.tarifcalendar} />
										</div>
										<div className={styles.text}>
											<p>Расписание</p>
										</div>
									</div>
									<div className={styles.card}>
										<div className={styles.icon}>
											<IconInstance name={EIcons.tariftelegram} />
										</div>
										<div className={styles.text}>
											<p>Бот записи</p>
										</div>
									</div>
								</div>
								<div className={styles.rows}>
									<div className={styles.card}>
										<div className={styles.icon}>
											<IconInstance name={EIcons.tarifphone} />
										</div>
										<div className={styles.text}>
											<p>Приложение</p>
										</div>
									</div>

									<div className={styles.card}>
										<div className={styles.icon}>
											<IconInstance name={EIcons.tarifsale} />
										</div>
										<div className={styles.text}>
											<p>Продажи</p>
										</div>
									</div>
									<div className={styles.card}>
										<div className={styles.icon}>
											<IconInstance name={EIcons.tarifcalc} />
										</div>
										<div className={styles.text}>
											<p>Финасы</p>
										</div>
									</div>
								</div>
								<div style={{ height: '12.8205vw' }}></div>
								<div className={styles.trial}>
									<p>У Вас на счету · 150 руб</p>
									<span>
										Бесплатный пробный период 14
										<br /> дней
									</span>
									<Link
										href={'https://lk.telebon.ru/registration'}
										target={'_blank'}
									>
										<button>Активировать</button>
									</Link>
								</div>
							</div>
						) : (
							<div className={styles.column}>
								<div className={styles.rows}>
									<div className={styles.card}>
										<div className={styles.icon}>
											<IconInstance name={EIcons.tarifcalendar} />
										</div>
										<div className={styles.text}>
											<p>Журнал записи</p>
										</div>
									</div>
									<div className={styles.card}>
										<div className={styles.icon}>
											<IconInstance name={EIcons.tariftelegram} />
										</div>
										<div className={styles.text}>
											<p>Онлайн-запись</p>
										</div>
									</div>
									<div className={styles.card}>
										<div className={styles.icon}>
											<IconInstance name={EIcons.tarifclients} />
										</div>
										<div className={styles.text}>
											<p>Клиентская база</p>
										</div>
									</div>
								</div>
								<div className={styles.rows}>
									<div className={styles.card}>
										<div className={styles.icon}>
											<IconInstance name={EIcons.tarifsale} />
										</div>
										<div className={styles.text}>
											<p>Продажи</p>
										</div>
									</div>
									<div className={styles.card}>
										<div className={styles.icon}>
											<IconInstance name={EIcons.tarifchair} />
										</div>
										<div className={styles.text}>
											<p>Ресурсы</p>
										</div>
									</div>
									<div className={styles.card}>
										<div className={styles.icon}>
											<IconInstance name={EIcons.tarifplanet} />
										</div>
										<div className={styles.text}>
											<p>Управление сетью</p>
										</div>
									</div>
								</div>
								<div className={styles.rows}>
									<div className={styles.card}>
										<div className={styles.icon}>
											<IconInstance name={EIcons.tarifstatistic} />
										</div>
										<div className={styles.text}>
											<p>Аналитика и учёт</p>
										</div>
									</div>

									<div className={styles.card}>
										<div className={styles.icon}>
											<IconInstance name={EIcons.tarifphone} />
										</div>
										<div className={styles.text}>
											<p>Доступ с мобильного</p>
										</div>
									</div>
									<div className={styles.card}>
										<div className={styles.icon}>
											<IconInstance name={EIcons.tarifcalc} />
										</div>
										<div className={styles.text}>
											<p>Финасы и кассы</p>
										</div>
									</div>
								</div>
								<div className={styles.rows}>
									<div className={styles.card}>
										<div className={styles.icon}>
											<IconInstance name={EIcons.tarifbell} />
										</div>
										<div className={styles.text}>
											<p>Уведомления</p>
										</div>
									</div>
									<div
										className={
											isActive ? cn(styles.card, styles.active) : styles.card
										}
										onClick={toggleActive}
									>
										<div className={styles.text}>
											<p>АКТИВИРОВАТЬ ПЛАТФОРМУ</p>
										</div>
										<div className={styles.checkbox}>
											<div className={styles.circle}></div>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
					{isMobile ? null : (
						<div className={styles.image}>
							<Image src={Circle} alt={''} />
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Tarif
