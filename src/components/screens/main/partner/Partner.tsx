import React, { FC } from 'react'
import styles from './Partner.module.scss'
import cn from 'classnames'
import PartnerDocument from '../../../../assets/icons/PartnerDocument.png'
import PartnerScales from '../../../../assets/icons/PartnerScales.png'
import Image from 'next/image'
const Partner: FC = () => {
	return (
		<div className={cn(styles.fuck, 'wrapper')}>
			<div className={styles.main_container}>
				<div className={styles.title}>
					<h2>Telebon - Ваш надежный партнер</h2>
				</div>
				<div className={styles.column}>
					<div className={styles.row1}>
						<div className={styles.box1}>
							<div className={styles.row}>
								<div>
									<Image
										src={PartnerDocument}
										alt={'Сертифицированная IT компания'}
									/>
								</div>
								<div className={styles.column}>
									<p className={styles.title}>Сертифицированная IT компания</p>
									<p>
										Используем методы шифрования данных. Все сервера находятся в
										ЦОД на территории России
									</p>
								</div>
							</div>
						</div>
						<div className={styles.box2}>
							<div className={styles.column}>
								<p className={styles.title}>Гибкость и инновации</p>
								<p>
									Постоянно адаптируемся под запросы клиентов, модернизируя
									работу системы
								</p>
							</div>
						</div>
					</div>
					<div className={styles.row2}>
						<div className={styles.box3}>
							<div className={styles.column}>
								<div className={styles.title}>
									<p>Доступность платформы:</p>
									<span>99.8% uptime</span>
								</div>
								<p>
									Система всегда доступна
									<br /> Стабильно работаем без сбоев
								</p>
							</div>
						</div>
						<div className={styles.box4}>
							<div className={styles.column}>
								<p className={styles.title}>Гарантии по договору</p>
								<p>Вы защищены юридически</p>
								<div className={styles.image}>
									<Image src={PartnerScales} alt={'Гарантии по договору'} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Partner
