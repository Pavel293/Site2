import { FC, useState } from 'react'
import styles from './Header.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import LogoImageNew from '../../../assets/icons/LogoImageNew.svg'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Header: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [hidden, setHidden] = useState<boolean>(false)
	// const { scrollY } = useScroll() || { scrollY: 0 }
	//
	// useMotionValueEvent(scrollY, 'change', latest => {
	// 	const previous = scrollY.getPrevious()
	// 	if (latest > previous && latest > 150) {
	// 		setHidden(true)
	// 	} else {
	// 		setHidden(false)
	// 	}
	// })

	return (
		<noindex>
			<motion.nav
				className={cn('wrapper', styles.header)}
				variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
				animate={hidden ? 'hidden' : 'visible'}
				transition={{ duration: 0.35, ease: 'easeInOut' }}
			>
				<div className={styles.headerContent}>
					<div className={styles.navmenu}>
						<Link href="/">
							<div className={styles.logo}>
								<Image src={LogoImageNew} alt="logotext" />
							</div>
						</Link>
						<div className={styles.tabs}>
							<div className={styles.item}>
								<Link href="/price">Ценовая политика</Link>
							</div>
							<div className={styles.item}>
								<Link href="/telegram-bot">Бот для онлайн-записи</Link>
							</div>
						</div>
					</div>
					<ul className={cn(isOpen && styles.active)}>
						<li className={cn(styles.auth, styles.reg)}>
							<Link href="https://lk.telebon.ru/registration">
								Зарегистрироваться
							</Link>
						</li>
						<li className={styles.auth}>
							<Link href="https://lk.telebon.ru/auth">
								<span>Войти</span>
							</Link>
						</li>
					</ul>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className={cn(isOpen && styles.activeMenu, styles.menu)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</motion.nav>
		</noindex>
	)
}

export default Header
