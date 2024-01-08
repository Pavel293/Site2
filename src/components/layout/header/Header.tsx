import { FC, useEffect, useState } from 'react'
import styles from './Header.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import LogoImage from '../../../assets/icons/logo.svg'
import LogoText from '../../../assets/icons/logo-text.svg'
import Link from 'next/link'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

const Header: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [hidden, setHidden] = useState<boolean>(false)
	const { scrollY } = useScroll() || { scrollY: 0 }

	useMotionValueEvent(scrollY, 'change', latest => {
		const previous = scrollY.getPrevious()
		if (latest > previous && latest > 150) {
			setHidden(true)
		} else {
			setHidden(false)
		}
	})

	return (
		<motion.nav
			className={cn('wrapper', styles.header)}
			variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
			animate={hidden ? 'hidden' : 'visible'}
			transition={{ duration: 0.35, ease: 'easeInOut' }}
		>
			<div className={styles.logo}>
				<Link href="/">
					<Image src={LogoImage} alt="logoImage" />
					<Image src={LogoText} alt="logotext" />
				</Link>
			</div>

			<ul className={cn(isOpen && styles.active)}>
				{/*{links.map(link => (*/}
				{/*	<li key={link.title}>*/}
				{/*		<Link href={link.link} className="text-link">*/}
				{/*			{link.title}*/}
				{/*		</Link>*/}
				{/*	</li>*/}
				{/*))}*/}
				<li className={cn(styles.auth, styles.reg)}>
					<Link href="https://lk.telebon.ru/registration">Регистрация</Link>
				</li>
				<li className={styles.auth}>
					<Link href="https://lk.telebon.ru/auth">Войти</Link>
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
		</motion.nav>
	)
}

export default Header
