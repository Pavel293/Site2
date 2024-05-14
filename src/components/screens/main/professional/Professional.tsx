import React, { FC } from 'react'
import styles from './Professional.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import ProfessionalPhoneThirdLeft from '../../../../assets/icons/professional/ProfessionalPhoneThirdLeft.png'
import ProfessionalMenuSecondUp from '../../../../assets/icons/professional/ProfessionalMenuSecondUp.png'
import ProfessionalPhoneSecondRight from '../../../../assets/icons/professional/ProfessionalPhoneSecondRight.png'
import ProfessionalRecordThirdUp from '../../../../assets/icons/professional/ProfessionalRecordThirdUp.png'

const Professional: FC = () => {
	return (
		<div className={cn(styles.base, `wrapper`)}>
			<div className={styles.main_container}>
				<div className={styles.text}>
					<h3>
						Работайте вместе
						<br /> с профессионалами
					</h3>
				</div>
				<div className={styles.column}>
					<div className={styles.row}>
						<div className={styles.first}>
							<div className={styles.text}>
								<p className={styles.name}>
									Анна
									<br />
									<span>Брейдер</span>
								</p>
								<p>
									”Очень порадовала функция ТГ
									<br /> бота, клиенты довольны.”
								</p>
							</div>
						</div>
						<div className={styles.second}>
							<div className={styles.column}>
								<div className={styles.up}>
									<div className={styles.circle}>
										<IconInstance name={EIcons.linkarrow} />
									</div>
									<Image src={ProfessionalMenuSecondUp} alt={''} />
								</div>
								<div className={styles.row}>
									<div className={styles.left}>
										<div className={styles.head_right}>
											<div className={styles.record}>
												<div className={styles.logo}>
													<IconInstance name={EIcons.logomark} />
												</div>
												<p>
													Новая запись
													<br />
													<span>@TelebonRu_bot</span>
												</p>
											</div>
											<div className={styles.telegram}>
												<IconInstance name={EIcons.recordingtelegram} />
											</div>
										</div>
										<div className={styles.text}>
											<p>
												У Вас новая запись!
												<br />7 мая, 2024 • 19:00 Анна • Ольга Клиент
											</p>
										</div>
										<button>
											<p>
												<span>Посмотреть</span>
											</p>
											<IconInstance name={EIcons.linkarrow} />
										</button>
									</div>
									<div className={styles.right}>
										<div className={styles.circle}>
											<IconInstance name={EIcons.linkarrow} />
										</div>
										<Image src={ProfessionalPhoneSecondRight} alt={''} />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.row}>
						<div className={styles.third}>
							<div className={styles.row}>
								<div className={styles.left}>
									<Image src={ProfessionalPhoneThirdLeft} alt={''} />
									<div className={styles.circle}>
										<IconInstance name={EIcons.linkarrow} />
									</div>
								</div>
								<div className={styles.column}>
									<div className={styles.up}>
										<Image src={ProfessionalRecordThirdUp} alt={''} />
										<div className={styles.ellipse}>
											<IconInstance name={EIcons.plusone} />
										</div>
									</div>
									<div className={styles.bottom}>
										<div className={styles.calendar}>
											<IconInstance name={EIcons.calendar} />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.fourth}>
							<div className={styles.text}>
								<p className={styles.name}>
									Сергей
									<br />
									<span>Барбер</span>
								</p>
								<p>
									”Всё просто и очень удобно, <br />
									рекомендую. ”
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Professional
