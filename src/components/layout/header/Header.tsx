import { FC } from 'react'
import styles from './Header.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import LogoImage from '../../../assets/icons/logo.svg'
import LogoText from '../../../assets/icons/logo-text.svg'
import { links } from '@/components/layout/header/header.data'
import Link from 'next/link'

const Header: FC = () => {
	return (
		<header className={cn('wrapper', styles.header)}>
			<div className={styles.logo}>
				<Link href="/">
					<Image src={LogoImage} alt="logoImage" />
					<Image src={LogoText} alt="logotext" />
				</Link>
			</div>
			<ul>
				{links.map(link => (
					<li key={link.title}>
						<Link href={link.link} className="text-link">
							{link.title}
						</Link>
					</li>
				))}
				<li className={styles.auth}>
					<Link href="/auth">Войти</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header
