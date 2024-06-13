import React, { FC, useEffect, useState } from 'react'
import styles from './Footer.module.scss'
import { EIcons, Icon as IconInstance } from '../../../assets/icons/icon'
import Image from 'next/image'
import FooterPhone from '../../../assets/icons/footeri/FooterPhone.png'
import Link from 'next/link'
import ModalSupport from '@/ui/modal/ModalSupport/ModalSupport'
import FooterImageLeft from '../../../assets/icons/footeri/FooterImageLeft.png'
import FooterImageRight from '../../../assets/icons/footeri/FooterImageRight.png'
import { motion } from 'framer-motion'

const Footer: FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [hidden, setHidden] = useState<boolean>(false)
	const [scrollStarted, setScrollStarted] = useState<boolean>(false)

	useEffect(() => {
		const handleScroll = () => {
			console.log(
				document.documentElement.scrollHeight - window.innerHeight,
				document.documentElement.scrollHeight,
				window.innerHeight,
				window.scrollY,
			)
			if (
				window.scrollY <
					document.documentElement.scrollHeight - window.innerHeight &&
				!scrollStarted
			) {
				setScrollStarted(true)
				setHidden(true)
			} else if (
				window.scrollY ===
					document.documentElement.scrollHeight - window.innerHeight &&
				scrollStarted
			) {
				setScrollStarted(false)
				setHidden(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [scrollStarted])

	return (
		<div className={styles.footer}>
			<motion.div
				className={styles.image}
				variants={{
					visible: { translateX: '0vw' },
					hidden: { translateX: '-10vw' },
				}}
				animate={hidden ? 'hidden' : 'visible'}
				transition={{ duration: 0.35, ease: 'easeInOut' }}
			>
				<Image src={FooterImageLeft} alt={''} />
			</motion.div>
			<motion.div
				className={styles.image}
				variants={{
					visible: { translateX: '0vw' },
					hidden: { translateX: '10vw' },
				}}
				animate={hidden ? 'hidden' : 'visible'}
				transition={{ duration: 0.35, ease: 'easeInOut' }}
			>
				<Image src={FooterImageRight} alt={''} />
			</motion.div>
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
								<Link href={'/'}>
									<p>Тарифы</p>
								</Link>
								<Link href={'/'}>
									<p>Бот для записи</p>
								</Link>
							</div>
							<div className={styles.column}>
								<p className={styles.title}>ДОКУМЕНТЫ</p>
								<div className={styles.line}></div>

								<Link href={'/'}>
									<p>Пользовательское соглашение</p>
								</Link>
								<Link href={'/'}>
									<p>Лицензионный договор</p>
								</Link>
								<Link href={'/'}>
									<p>Конфиденциальность</p>
								</Link>
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
						<button onClick={() => setIsModalOpen(true)}>
							Запросить презентацию
						</button>
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
			{isModalOpen ? (
				<ModalSupport
					isOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
					onClose={() => setIsModalOpen(false)}
				/>
			) : null}
		</div>
	)
}

export default Footer
