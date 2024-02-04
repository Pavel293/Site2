import { FC, useEffect, useState } from 'react'
import styles from './Header.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import LogoImageNew from '../../../assets/icons/LogoImageNew.svg'
import Link from 'next/link'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { EIcons, Icon as IconInstance } from '../../../assets/icons/icon'

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
		<motion.nav
			className={cn('wrapper', styles.header)}
			variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
			animate={hidden ? 'hidden' : 'visible'}
			transition={{ duration: 0.35, ease: 'easeInOut' }}
		>
			<div className={styles.headerContent}>
				<div className={styles.logo}>
					<Link href="/">
						<Image src={LogoImageNew} alt="logotext" />
					</Link>
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
							<span
								style={{
									display: 'inline-flex',
									verticalAlign: 'middle',
									marginLeft: '10px',
									height: '20px',
								}}
							>
								<IconInstance name={EIcons.entericon} />
							</span>
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
	)
}

export default Header
