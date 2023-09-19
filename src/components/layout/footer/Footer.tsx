import { FC } from 'react'
import LogoText from '../../../assets/icons/logo-text.svg'
import styles from './Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { footerVariants } from '@/utils/motion'

const Footer: FC = () => {
	return (
		<motion.footer
			variants={footerVariants}
			initial="hidden"
			whileInView="show"
			className={styles.footer}
		>
			<div className="wrapper">
				<p>© Copyright 2023. Все права защищены</p>
				<Link href="/">
					{/*<Image src={LogoImage} alt="logoImage" />*/}
					<Image src={LogoText} alt="logotext" />
				</Link>
			</div>
		</motion.footer>
	)
}

export default Footer
