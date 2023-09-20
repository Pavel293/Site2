import { FC, useEffect, useState } from 'react'
import styles from './Header.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import LogoImage from '../../../assets/icons/logo.svg'
import LogoText from '../../../assets/icons/logo-text.svg'
import { links } from '@/components/layout/header/header.data'
import Link from 'next/link'
import { navVariants } from '@/utils/motion'
import { motion } from 'framer-motion'

const Header: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<motion.header
			variants={navVariants}
			initial="hidden"
			whileInView="show"
			className={cn('wrapper', styles.header)}
		>
			<div className={styles.logo}>
				<Link href="/">
					{/*<Image src={LogoImage} alt="logoImage" />*/}
					<Image src={LogoText} alt="logotext" />
				</Link>
			</div>

			<ul className={cn(isOpen && styles.active)}>
				{links.map(link => (
					<li key={link.title}>
						<Link href={link.link} className="text-link">
							{link.title}
						</Link>
					</li>
				))}
				<li className={cn(styles.auth, styles.free)}>
					<Link href="/free">Попробовать бесплатно</Link>
				</li>
				<li className={styles.auth}>
					<Link href="/auth">Войти</Link>
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
		</motion.header>
	)
}

export default Header
