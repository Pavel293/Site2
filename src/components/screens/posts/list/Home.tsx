import React from 'react'
import Meta from '@/utils/meta/Meta'
import styles from './Home.module.scss'
import Link from 'next/link'

export interface ImageDetails {
	ext: string
	hash: string
	height: number
	mime: string
	name: string
	path: null
	size: number
	sizeInBytes: number
	url: string
	width: number
}

export interface ImagePost {
	alternativeText: string
	caption: null | string
	createdAt: string
	formats: {
		large: ImageDetails
		medium: ImageDetails
		small: ImageDetails
		thumbnail: ImageDetails
	}
	hash: string
	height: number
	mime: string
	name: string
	previewUrl: null
	provider: string
	provider_metadata: null
	size: number
	updatedAt: string
	url: string
	width: number
}

export interface Post {
	id: string
	attributes: {
		title: string
		description: string
		content: Array<{
			type: string
			children: Array<{ text: string; type: string }>
			image?: ImagePost
		}>
		url: string
		createdAt: string
		updatedAt: string
	}
}

interface HomeProps {
	posts: Post[]
}

const Home: React.FC<HomeProps> = ({ posts }) => {
	const validPosts = Array.isArray(posts) ? posts : []

	return (
		<Meta
			title="Посты"
			description="Новый сервис онлайн-записи с возможностью записи Клиентов в Telegram"
			image="logo_preview.png"
		>
			<div className={styles.wrapper}>
				<div className={styles.up}></div>
				{validPosts.map(post => (
					<Link href={`/posts/${post.attributes.url}`} key={post.id}>
						<div className={styles.card}>
							<h2>{post.attributes.title}</h2>
							<p>{post.attributes.description}</p>
						</div>
					</Link>
				))}
			</div>
		</Meta>
	)
}

export default Home
