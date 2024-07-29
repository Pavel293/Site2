import Head from 'next/head'
import { FC, useEffect } from 'react'

import Favicons from './Favicons'
import { IType } from '@/shared/types/option.types'
import { accessColor } from '@/config/constants'

const HeadProvider: FC<IType> = ({ children }) => {
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

			;(function (d: Document, w: Window, id: string) {
				if (d.getElementById(id)) return
				const ts = d.createElement('script') as HTMLScriptElement
				ts.type = 'text/javascript'
				ts.async = true
				ts.id = id
				ts.src = 'https://top-fwz1.mail.ru/js/code.js'
				const f = () => {
					const s = d.getElementsByTagName('script')[0]
					if (s.parentNode) {
						s.parentNode.insertBefore(ts, s)
					}
				}
				// Современная проверка браузера вместо устаревшего window.opera
				if (
					w.navigator.userAgent.includes('Opera') ||
					w.navigator.userAgent.includes('OPR')
				) {
					d.addEventListener('DOMContentLoaded', f, false)
				} else {
					f()
				}
			})(document, window, 'tmr-code')

			if (!window._tmr) {
				window._tmr = []
			}
			window._tmr.push({
				id: '3518034',
				type: 'pageView',
				start: new Date().getTime(),
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
			{/*<NextProgressBar*/}
			{/*	color={accessColor}*/}
			{/*	startPosition={0.3}*/}
			{/*	stopDelayMs={200}*/}
			{/*	height={3}*/}
			{/*/>*/}
			<Head>
				{/* <!-- Top.Mail.Ru counter --> */}
				<noscript>6zk0syi22z79zb81</noscript>
				<noscript>
					<div>
						<img
							src="https://top-fwz1.mail.ru/counter?id=3478248;js=na"
							style={{ position: 'absolute', left: '-9999px' }}
							alt="Top.Mail.Ru"
						/>
					</div>
				</noscript>
				{/* <!-- /Top.Mail.Ru counter --> */}
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1.0"
				/>
				<meta name="yandex-verification" content="71a52d8ec1db8eaa" />
				<Favicons />
				<meta name="theme-color" content="#ffffff" />
				<meta name="msapplication-navbutton-color" content="#ffffff" />
				<meta name="apple-mobile-web-app-status-bar-style" content="#ffffff" />
			</Head>
			{children}
		</>
	)
}

export default HeadProvider
