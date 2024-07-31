import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'
import { siteName, titleMerge } from '@/config/seo.config'
import { onlyText } from '../string/clearText'
import { ISeo } from '@/utils/meta/mete.interface'

declare global {
	interface Window {
		ym: (id: number, action: string, options: Record<string, unknown>) => void
	}
}

const Meta: FC<ISeo> = ({ title, description, image, children }) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.NEXT_PUBLIC_URL}${asPath}`
	const imageUrl = `https://telebon.ru/preview/${image}`

	useEffect(() => {
		let loadedMetrica = false
		let timerId: NodeJS.Timeout

		const loadMetrica = (e?: Event) => {
			if (e && e.type) {
				console.log(e.type)
			} else {
				console.log('DOMContentLoaded')
			}

			if (loadedMetrica) {
				return
			}

			;(function (m: any, e: Document, t: string, r: string, i: string) {
				m[i] =
					m[i] ||
					function () {
						;(m[i].a = m[i].a || []).push(arguments)
					}
				m[i].l = Number(new Date())
				const k = e.createElement(t) as HTMLScriptElement
				const a = e.getElementsByTagName(t)[0]
				k.async = true
				k.src = r
				if (a && a.parentNode) {
					a.parentNode.insertBefore(k, a)
				}
			})(
				window,
				document,
				'script',
				'https://mc.yandex.ru/metrika/tag.js',
				'ym',
			)

			window.ym(96112151, 'init', {
				clickmap: true,
				trackLinks: true,
				accurateTrackBounce: true,
			})

			loadedMetrica = true
			clearTimeout(timerId)

			window.removeEventListener('scroll', loadMetrica)
			window.removeEventListener('touchstart', loadMetrica)
			document.removeEventListener('mouseenter', loadMetrica)
			document.removeEventListener('click', loadMetrica)
			document.removeEventListener('DOMContentLoaded', loadFallback)
		}

		const loadFallback = () => {
			timerId = setTimeout(loadMetrica, 1000)
		}

		if (navigator.userAgent.indexOf('YandexMetrika') > -1) {
			loadMetrica()
		} else {
			window.addEventListener('scroll', loadMetrica, { passive: true })
			window.addEventListener('touchstart', loadMetrica)
			document.addEventListener('mouseenter', loadMetrica)
			document.addEventListener('click', loadMetrica)
			document.addEventListener('DOMContentLoaded', loadFallback)
		}

		return () => {
			clearTimeout(timerId)
			window.removeEventListener('scroll', loadMetrica)
			window.removeEventListener('touchstart', loadMetrica)
			document.removeEventListener('mouseenter', loadMetrica)
			document.removeEventListener('click', loadMetrica)
			document.removeEventListener('DOMContentLoaded', loadFallback)
		}
	}, [])

	return (
		<>
			{description ? (
				<Head>
					<title itemProp="headline">{titleMerge(title)}</title>
					<meta
						itemProp="description"
						name="description"
						content={onlyText(description, 152)}
					/>
					<link data-rel="canonical" href={currentUrl} />
					<link rel="canonical" href={currentUrl} />
					<meta name="keywords" content="" />
					<meta property="og:type" content="website" />
					<meta property="og:locale" content="ru" />
					<meta property="og:title" content={titleMerge(title)} />
					<meta property="og:url" content={currentUrl} />
					<meta property="og:site_name" content="Telebon" />
					<meta
						property="og:image"
						content="https://telebon.ru/preview/mini_logo_preview.png"
					/>
					<meta property="og:site_name" content={siteName} />
					<meta
						property="og:description"
						content={onlyText(description, 197)}
					/>
					<meta name="yandex-verification" content="b75dacf638c09dd0" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
			) : (
				<meta name="robots" content="noindex, nofollow" />
			)}
			{children}
		</>
	)
}

export default Meta
