import React, { FC } from 'react'
import styles from './Footer.module.scss'
import { EIcons, Icon as IconInstance } from '../../../assets/icons/icon'
import Image from 'next/image'
import FooterPhone from '../../../assets/icons/footeri/FooterPhone.png'

const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.main_container}>
				<div className={styles.row}>
					<div className={styles.contact}>
						<div className={styles.logo}>
							<IconInstance name={EIcons.footerlogomark} />
						</div>
						<p className={styles.title}>Контакты</p>
						<div className={styles.main}>
							<div className={styles.card}>
								<IconInstance name={EIcons.footerphone} />
								<IconInstance name={EIcons.footerphonenumber} />
							</div>
							<div className={styles.card}>
								<IconInstance name={EIcons.footermail} />
								<IconInstance name={EIcons.footeremail} />
							</div>
							<div className={styles.card}>
								<IconInstance name={EIcons.footermail} />
								<IconInstance name={EIcons.footerwhatsup} />
							</div>
						</div>
						<div className={styles.download}>
							<IconInstance name={EIcons.footerappstore} />
							<IconInstance name={EIcons.footergoogleplay} />
							<IconInstance name={EIcons.footerrustore} />
						</div>
					</div>
					<div className={styles.phone}>
						<Image src={FooterPhone} alt={''} />
					</div>
					<div className={styles.column}>
						<p className={styles.title}>СИСТЕМА</p>
						<div className={styles.line}></div>
						<p>Регистрация</p>
						<p>Войти</p>
					</div>
					<div className={styles.column}>
						<p className={styles.title}>ВОЗМОЖНОСТИ</p>
						<div className={styles.line}></div>
						<p>Электронный журнал</p>
						<p>Задачник</p>
						<p>Финансы</p>
						<p>Мессенджер</p>
					</div>
					<div className={styles.column}>
						<p className={styles.title}>ПРАВОВАЯ ИНФОРМАЦИЯ</p>
						<div className={styles.line}></div>
						<p>Пользовательское соглашение</p>
						<p>Лицензионный договор</p>
						<p>Конфиденциальность</p>
						<div className={styles.social}>
							<IconInstance name={EIcons.footertelegramicon} />
							<IconInstance name={EIcons.footervkicon} />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.presentation}>
				<p className={styles.title}>Презентация Telebon</p>
				<p>
					Покажем платформу в деле на ваших примерах
					<br /> и поможем сделать выбор. Свяжемся в течение
					<br /> рабочего дня
				</p>
				<button>ОСТАВИТЬ ЗАЯВКУ</button>
			</div>
		</div>
	)
}

export default Footer
