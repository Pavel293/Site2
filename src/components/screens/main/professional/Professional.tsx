import React, { FC, useState } from 'react'
import styles from './Professional.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import ProfessionalPhoneThirdLeft from '../../../../assets/icons/professional/ProfessionalPhoneThirdLeft.png'
import ProfessionalMenuSecondUp from '../../../../assets/icons/professional/ProfessionalMenuSecondUp.png'
import ProfessionalPhoneSecondRight from '../../../../assets/icons/professional/ProfessionalPhoneSecondRight.png'
import ProfessionalPhoneSecondLeft from '../../../../assets/icons/professional/ProfessionalPhoneSecondLeft.png'
import ProfessionalRecordThirdUp from '../../../../assets/icons/professional/ProfessionalRecordThirdUp.png'
import TelegramGif from '../../../../assets/icons/recording/TelegramGif.gif'
import RecordingTelegram from '../../../../assets/icons/recording/RecordingTelegram.png'
import useMatchMedia from '@/hooks/useMatchMedia'

const Professional: FC = () => {
	const [hover, setHover] = useState(false)
	const isMobile = useMatchMedia('768')

	return (
		<div className={cn(styles.base, `wrapper`)}>
			{isMobile ? (
				<div className={styles.main_container}>
					<div className={styles.column}>
						<div className={styles.third}>
							<div className={styles.image}></div>
							<div className={styles.text}>
								<p className={styles.name}>
									КАЛЕНДАРЬ И РАСПИСАНИЕ
									<br />
									<span>
										Контролирую график и<br /> расписание
									</span>
								</p>
								<div className={styles.row_item}>
									<div className={styles.point}></div>
									<p>Онлайн запись 24/7</p>
								</div>

								<div className={styles.row_item}>
									<div className={styles.point}></div>
									<p>Автоматические уведомления</p>
								</div>
								<div className={styles.row_item}>
									<div className={styles.point}></div>
									<p>Гибкие настройки и кастомизация</p>
								</div>
								<div className={styles.row_item}>
									<div className={styles.point}></div>
									<p>Учёт занятости сотрудников и ресурсов</p>
								</div>
								<div className={styles.row_item}>
									<div className={styles.point}></div>
									<p>Статусы клиентов</p>
								</div>
							</div>
						</div>
						<div className={styles.first}>
							<div className={styles.image}></div>
							<div className={styles.text}>
								<p className={styles.name}>
									ПРОДАЖИ И ФИНАНСЫ
									<br />
									<span>
										Начала вести финансы
										<br /> и учёт дохода
									</span>
								</p>
								<div className={styles.row_item}>
									<div className={styles.point}></div>
									<p>Аналитика доходов</p>
								</div>
								<div className={styles.row_item}>
									<div className={styles.point}></div>
									<p>Показатели выручки</p>
								</div>
								<div className={styles.row_item}>
									<div className={styles.point}></div>
									<p>История платежей</p>
								</div>
								<div className={styles.row_item}>
									<div className={styles.point}></div>
									<p>Кассы и счета</p>
								</div>
								<div className={styles.row_item}>
									<div className={styles.point}></div>
									<p>Способы оплаты</p>
								</div>
								<div className={styles.row_item}>
									<div className={styles.point}></div>
									<p>Продажа товаров и услуг</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className={styles.main_container}>
					<div className={styles.text}>
						<h3>
							Основные функции для
							<br /> профессионалов
						</h3>
					</div>
					<div className={styles.column}>
						<div className={styles.first}>
							<div className={styles.image}></div>
							<div className={styles.text}>
								<p className={styles.name}>
									ПРОДАЖИ И ФИНАНСЫ
									<br />
									<span>
										Начала вести финансы и<br /> учёт дохода
									</span>
								</p>
								<div className={styles.row_item}>
									<div className={styles.point}></div>
									<p>Аналитика доходов</p>
								</div>

								<div className={styles.row_item}>
									<div className={styles.point}></div>
									<p>Показатели выручки</p>
								</div>
								<div className={styles.row_item}>
									<div className={styles.point}></div>
									<p>История платежей</p>
								</div>
								<div className={styles.row_item}>
									<div className={styles.point}></div>
									<p>Продажа товаров и услуг</p>
								</div>
								<div className={styles.row_item}>
									<div className={styles.point}></div>
									<p>Кассы и счета</p>
								</div>
								<div className={styles.row_item}>
									<div className={styles.point}></div>
									<p>Способы оплаты</p>
								</div>
							</div>
						</div>
						<div className={styles.second}>
							<div className={styles.row}>
								<div
									className={styles.up}
									onMouseEnter={() => {
										setHover(true)
										setTimeout(() => {
											setHover(false)
										}, 1500)
									}}
								>
									<div className={styles.text}>
										<p>Открыла Онлайн-запись</p>
										<span>
											Стандартную через сайт, плюс добавила Telegram бота.
											Клиентам нравится
										</span>
									</div>
									<Image src={hover ? TelegramGif : RecordingTelegram} alt="" />
								</div>
								<div className={styles.right}>
									<Image src={ProfessionalPhoneSecondRight} alt={''} />
								</div>
								<div className={styles.left}>
									<Image src={ProfessionalPhoneSecondLeft} alt={''} />
									<div className={styles.text}>
										<p>Приятно работать</p>
										<span>
											Все перед глазами, не надо отвлекаться от
											<br /> текущих дел
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.third}>
							<div className={styles.text}>
								<p className={styles.name}>
									РАСПИСАНИЕ И КЛИЕНТЫ
									<br />
									<span>
										Контролирую график и<br /> расписание
									</span>
								</p>
								<div className={styles.row_item}>
									<div className={styles.point}></div>
									<p>Онлайн запись 24/7</p>
								</div>

								<div className={styles.row_item}>
									<div className={styles.point}></div>
									<p>Автоматические уведомления и напоминания</p>
								</div>
								<div className={styles.row_item}>
									<div className={styles.point}></div>
									<p>Гибкие настройки и кастомизация</p>
								</div>
								<div className={styles.row_item}>
									<div className={styles.point}></div>
									<p>Учёт занятости сотрудников и ресурсов</p>
								</div>
								<div className={styles.row_item}>
									<div className={styles.point}></div>
									<p>Статусы клиентов, и автоматический перевод</p>
								</div>
							</div>
							<div className={styles.image}></div>
						</div>
						<div className={styles.fourth}>
							<div className={styles.row}>
								<div className={styles.left}></div>
								<div className={styles.center}></div>
								<div className={styles.right}>
									<Image src={ProfessionalPhoneThirdLeft} alt={''} />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Professional
