import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { siteName, titleMerge } from '@/config/seo.config'
import { onlyText } from '../string/clearText'
import { ISeo } from '@/utils/meta/mete.interface'

const Meta: FC<ISeo> = ({ title, description, image, children }) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.NEXT_PUBLIC_URL}${asPath}`
	const imageUrl = `https://telebon.ru/preview/${image}`
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
					<meta property="og:type" content="website" />
					<meta property="og:locale" content="ru" />
					<meta property="og:title" content={titleMerge(title)} />
					<meta property="og:url" content={currentUrl} />
					<meta property="og:image" content={imageUrl} />
					<meta property="og:image:width" content="504px" />
					<meta property="og:image:height" content="968px" />
					<meta property="og:site_name" content={siteName} />
					<meta
						property="og:description"
						content={onlyText(description, 197)}
					/>
					<meta name="yandex-verification" content="b75dacf638c09dd0" />
					<script
						dangerouslySetInnerHTML={{
							__html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(96112151, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true
          });
        `,
						}}
					/>
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
