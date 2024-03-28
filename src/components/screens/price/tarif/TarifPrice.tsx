import React, { FC } from 'react'
import styles from './TarifPrice.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import Recording from '../../../../assets/icons/PriceRecording.png'
import Journal from '../../../../assets/icons/PriceJournal.png'
import Analitycs from '../../../../assets/icons/PriceAnalitycs.png'
import Messenger from '../../../../assets/icons/PriceMessenger.png'
import TaskBook from '../../../../assets/icons/PriceTaskBook.png'
import Finance from '../../../../assets/icons/PriceFinance.png'
const TarifPrice: FC = () => {
	return (
		<div className={cn(styles.fuck, 'wrapper')}>
			<div className={styles.main_container}>
				<div className={styles.title}>
					<h2>Что входит в 10 рублей в день?</h2>
				</div>
				<div className={styles.row}>
					<div className={styles.left}>
						<div className={styles.card}>
							<div className={styles.recording}>
								<div className={styles.text}>
									<p className={styles.title}>Онлайн-запись</p>
									<p>
										Индивидуальная или групповая запись для сферы услуг, а
										онлайн-запись со стороны Ваших клиентов реализована в
										<span>
											<Link href={'/telegram-bot'}> Telegram-боте</Link>
										</span>
									</p>
								</div>
								<Image src={Recording} alt={'Онлайн-запись'} />
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.taskbook}>
								<div className={styles.text}>
									<p className={styles.title}>Задачник</p>
									<p>Канбан-доска для назначения задач сотрудникам</p>
								</div>
								<Image src={TaskBook} alt={'Задачник'} />
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.finance}>
								<div className={styles.text}>
									<p className={styles.title}>Финансы</p>
									<p>
										Возможность учета приходов и расходов по платежам и
										продаваемым товарам
									</p>
								</div>
								<Image src={Finance} alt={'Финансы'} />
							</div>
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.card}>
							<div className={styles.journal}>
								<div className={styles.text}>
									<p className={styles.title}>Журнал записи</p>
									<p>Точная сводка данных по оказанным услугам</p>
								</div>
								<Image src={Journal} alt={'Журнал записи'} />
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.messenger}>
								<div className={styles.text}>
									<p className={styles.title}>Внутренний чат</p>
									<p>Вся рабочая переписка с сотрудниками в одном месте</p>
								</div>
								<div className={styles.image}>
									<Image src={Messenger} alt={'Внутренний чат'} />
								</div>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.analitycs}>
								<div className={styles.text}>
									<p className={styles.title}>Аналитика</p>
									<p>Точная сводка данных по оказанным услугам </p>
								</div>
								<Image src={Analitycs} alt={'Аналитика'} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TarifPrice
