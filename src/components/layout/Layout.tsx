import { FC, Suspense, useEffect, useState } from 'react'
import { IType } from '@/shared/types/option.types'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import styles from './Layout.module.scss'
import { useRouter } from 'next/router'
import { fetchPosts } from '../../lib/api'
import { getPostById } from '../../lib/queries'

const Layout: FC<IType> = ({ children }) => {
	const [is404Page, setIs404Page] = useState(false)
	const [postPaths, setPostPaths] = useState<string[]>([])
	const [loading, setLoading] = useState(true)
	const router = useRouter()

	useEffect(() => {
		const res = getPostById('5')
		console.log(res)
	}, [])

	const getPostPaths = async () => {
		const posts = await fetchPosts()
		const paths = posts.map(
			(post: { attributes: { url: string } }) => `/blog/${post.attributes.url}`,
		)
		setPostPaths(paths)
		setLoading(false)
	}

	useEffect(() => {
		getPostPaths()

		const handleRouteChange = (url: string) => {
			const validUrls = [
				'/price',
				'/',
				'/aboutus',
				'/info/licence',
				'/info/agreement',
				'/info/privacy-policy',
				'/blog',
				'/admin',
				...postPaths,
			]
			if (url === '/404' || !validUrls.includes(url)) {
				setIs404Page(true)
			} else {
				setIs404Page(false)
			}
		}

		if (!loading) {
			handleRouteChange(router.pathname)
		}

		router.events.on('routeChangeComplete', handleRouteChange)

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.pathname])

	return (
		<div className={styles.container}>
			<>
				{!is404Page ? (
					<>
						<Header />
						<Suspense>{children}</Suspense>
						<Footer />
					</>
				) : (
					<Suspense>{children}</Suspense>
				)}
			</>
		</div>
	)
}

export default Layout
