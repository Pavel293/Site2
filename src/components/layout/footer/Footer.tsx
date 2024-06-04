import React, { FC } from 'react'
import styles from './Footer.module.scss'
import { EIcons, Icon as IconInstance } from '../../../assets/icons/icon'
import Image from 'next/image'
import FooterPhone from '../../../assets/icons/footeri/FooterPhone.png'
import Link from 'next/link'

const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.main_container}>
				<div className={styles.common}>
					<IconInstance name={EIcons.footerlogomark} />
					<p className={styles.title}>Присоединяйтесь</p>
					<p>
						Промокод бонус:{' '}
						<Link href={'https://lk.telebon.ru/registration'} target={'_blank'}>
							Start
						</Link>
					</p>
					<div className={styles.buttons}>
						<Link
							href={'https://apps.apple.com/ru/app/telebon/id6502614961'}
							target={'_blank'}
						>
							<IconInstance name={EIcons.footerappstore} />
						</Link>
						<Link href={'/'}>
							<IconInstance name={EIcons.footergoogleplay} />
						</Link>
					</div>
				</div>
				<div className={styles.links}>
					<div className={styles.row}>
						<div className={styles.contact}>
							<p className={styles.title}>КОНТАКТЫ</p>
							<div className={styles.main}>
								<div className={styles.card}>
									<IconInstance name={EIcons.footerphone} />
									<IconInstance name={EIcons.footerphonenumber} />
								</div>
								<div className={styles.card}>
									<IconInstance name={EIcons.footermail} />
									<IconInstance name={EIcons.footeremail} />
								</div>
								<Link href={'https://wa.me/79956780440'} target={'_blank'}>
									<div className={styles.card}>
										<IconInstance name={EIcons.footerwhatsupicon} />
										<IconInstance name={EIcons.footerwhatsup} />
									</div>
								</Link>
							</div>
						</div>
						<div
							style={{ display: 'flex', flexDirection: 'row', gap: '3.125vw' }}
						>
							<div className={styles.column}>
								<p className={styles.title}>КАРТА САЙТА</p>
								<div className={styles.line}></div>
								<p>Тарифы</p>
								<p>Бот для записи</p>
							</div>
							<div className={styles.column}>
								<p className={styles.title}>ДОКУМЕНТЫ</p>
								<div className={styles.line}></div>
								<p>Пользовательское соглашение</p>
								<p>Лицензионный договор</p>
								<p>Конфиденциальность</p>
								{/*<div className={styles.social}>*/}
								{/*	<IconInstance name={EIcons.footertelegramicon} />*/}
								{/*	<IconInstance name={EIcons.footervkicon} />*/}
								{/*</div>*/}
							</div>
						</div>
					</div>
				</div>
				<div className={styles.present}>
					<div className={styles.box}>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<p className={styles.title}>Презентация Telebon</p>
							<p>Покажем систему в деле, ответим на все интересующие вопросы</p>
						</div>
						<button>Запросить презентацию</button>
					</div>
				</div>
				<div className={styles.bottom}>
					<p>© ООО Группа Компаний «Белый Медведь»</p>
					<div
						style={{
							width: '0.1042vw',
							height: '0.1042vw',
							borderRadius: '100%',
							background: '#647084',
						}}
					></div>
					<span>4345410051</span>
					<span>1154345004582</span>
				</div>
			</div>
		</div>
	)
}

export default Footer
