import React from 'react'
import Meta from '@/utils/meta/Meta'
import styles from './Home.module.scss'
import Link from 'next/link'

export interface Post {
	id: string;
	attributes: {
		title: string;
		description: string;
		content: Array<{ type: string; children: Array<{ text: string; type: string }> }>;
		url: string;
		createdAt: string;
		updatedAt: string;
	};
}

interface HomeProps {
	posts: Post[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
	const validPosts = Array.isArray(posts) ? posts : [];

	return (
		<Meta
			title="Посты"
			description="Новый сервис онлайн-записи с возможностью записи Клиентов в Telegram"
			image="logo_preview.png"
		>
			<div className={styles.wrapper}>
				<div className={styles.up}></div>
				{validPosts.map((post) => (
					<Link href={`/posts/${post.attributes.url}`} key={post.id}>
						<h2>{post.attributes.title}</h2>
						<p>{post.attributes.description}</p>
					</Link>
				))}
			</div>
		</Meta>
	);
};

export default Home
