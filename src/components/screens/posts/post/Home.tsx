import React from 'react';
import Meta from '@/utils/meta/Meta';
import styles from './Home.module.scss';
import { Post } from '@/screens/posts/list/Home'

interface HomeProps {
	post: Post;
}

const Home: React.FC<HomeProps> = ({ post }) => {
	console.log(post)
	return (
		<Meta
			title={post.attributes.title}
			description={post.attributes.description}
			image="logo_preview.png"
		>
			<div className={styles.wrapper}>
				<div className={styles.up}></div>
				<h2>{post.attributes.title}</h2>
				{post.attributes.content.map((paragraph, index) => (
					<p key={index}>{paragraph.children[0].text}</p>
				))}
			</div>
		</Meta>
	);
};

export default Home
