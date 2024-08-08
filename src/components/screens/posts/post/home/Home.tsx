import React, { useEffect, useState } from 'react'
import Meta from '@/utils/meta/Meta'
import styles from './Home.module.scss'
import { ImagePost, Post } from '@/screens/posts/list/Home'
import Hero from '@/screens/posts/post/hero/Hero'
import Description from '@/screens/posts/description/Description'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import Price from '@/screens/posts/post/price/Price'
import Accordion from '@/screens/posts/post/accordion/Accordion'

interface HomeProps {
	post: Post
}

export interface Card {
	title: string
	description: any
	image: ImagePost
}

export interface CardFAQ {
	question: string
	answer: any
}

export interface TextNode {
	text: string
	type: 'text'
	bold?: boolean
}

export const formatDescription = (content: TextNode[]): JSX.Element => {
	return (
		<p>
			{content.map((child, index) => {
				const parts = child.text.split('\n')
				return parts.map((part, partIndex) => (
					<React.Fragment key={`${index}-${partIndex}`}>
						{child.bold ? <span>{part}</span> : part}
						{partIndex < parts.length - 1 && <br />}{' '}
					</React.Fragment>
				))
			})}
		</p>
	)
}

const Home: React.FC<HomeProps> = ({ post }) => {
	console.log(post)
	const [phone, setPhone] = useState<any>(null)
	const [priceImage, setPriceImage] = useState<any>(null)
	const [background, setBackground] = useState<any>(null)
	const [cards, setCards] = useState<Card[]>([])
	const [cardsFAQ, setCardsFAQ] = useState<CardFAQ[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		setIsLoading(true)
		if (post) {
			const backgroundImage =
				post.attributes.content[2]?.children[0]?.text === 'null'
					? null
					: post.attributes.content[2]?.image

			const phoneImage =
				post.attributes.content[3]?.children[0]?.text === 'null'
					? null
					: post.attributes.content[3]?.image

			const priceImage =
				post.attributes.content[22]?.children[0]?.text === 'null'
					? null
					: post.attributes.content[22]?.image

			setBackground(backgroundImage)
			setPhone(phoneImage)
			setPriceImage(priceImage)

			// Разделение на карточки
			const cardData: Card[] = []
			for (let i = 4; i < 22; i += 3) {
				cardData.push({
					title: post.attributes.content[i]?.children[0]?.text || '',
					description: post.attributes.content[i + 1]?.children || [],
					image: post.attributes.content[i + 2]?.image as ImagePost,
				})
			}
			setCards(cardData)

			// Карточки из оставшихся элементов парами
			const cardDataFAQ: CardFAQ[] = []
			for (let i = 23; i < post.attributes.content.length; i += 2) {
				cardDataFAQ.push({
					question: post.attributes.content[i]?.children[0]?.text || '',
					answer: post.attributes.content[i + 1]?.children || [],
				})
			}
			setCardsFAQ(cardDataFAQ)
		}
		setIsLoading(false)
	}, [post])

	return (
		<>
			<Header />
			<Meta
				title={post.attributes.title}
				description={post.attributes.description}
				image="logo_preview.png"
			>
				{isLoading ? null : (
					<div className={styles.wrapper}>
						<Hero
							title={post.attributes.content[0]?.children[0]?.text}
							description={post.attributes.content[1]?.children}
							background={background}
							phone={phone}
						/>
						<Description cards={cards} />
						<Price image={priceImage} />
						<Accordion faq={cardsFAQ} />
					</div>
				)}
			</Meta>
			<Footer />
		</>
	)
}

export default Home
