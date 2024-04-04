import { FC, useState } from 'react'
import styles from './Header.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import LogoImageNew from '../../../assets/icons/LogoImageNew.svg'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useMatchMedia from '@/hooks/useMatchMedia'

const Header: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [hidden, setHidden] = useState<boolean>(false)
	const isMobile = useMatchMedia('768')
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
							<div className={styles.logo} onClick={() => setIsOpen(false)}>
								<Image src={LogoImageNew} alt="logotext" />
							</div>
						</Link>
						<div className={styles.tabs}>
							<Link href="/price">
								<div className={styles.item}>Ценовая политика</div>
							</Link>
							<Link href="/telegram-bot">
								<div className={styles.item}>Бот для онлайн-записи</div>
							</Link>
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
						{isMobile ? (
							<li className={styles.auth} onClick={() => setIsOpen(!isOpen)}>
								<Link href="/price">
									<span>Ценовая политика</span>
								</Link>
							</li>
						) : null}
						{isMobile ? (
							<li className={styles.auth} onClick={() => setIsOpen(!isOpen)}>
								<Link href="/telegram-bot">
									<span>Бот для онлайн-записи</span>
								</Link>
							</li>
						) : null}
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
