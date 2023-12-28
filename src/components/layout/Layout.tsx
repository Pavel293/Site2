import { FC } from 'react'
import { IType } from '@/shared/types/option.types'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import styles from './Layout.module.scss'

const Layout: FC<IType> = ({ children }) => {
	const is404Page =
		typeof window !== 'undefined' && window.location.pathname === '/404'

	return (
		<div className={styles.container}>
			{!is404Page ? (
				<>
					<Header />
					{children}
					<Footer />
				</>
			) : (
				<>{children}</>
			)}
		</div>
	)
}

export default Layout
