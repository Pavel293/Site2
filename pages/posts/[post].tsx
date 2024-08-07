import { GetStaticPaths, GetStaticProps } from 'next'
import Home from '@/screens/posts/post/home/Home'
import { Post } from '@/screens/posts/list/Home'
import { fetchOnePost, fetchPosts } from '../../src/lib/api'

interface PostPageProps {
	post: Post
}

export default function PostPage({ post }: PostPageProps) {
	return <Home post={post} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await fetchPosts()
	if (!Array.isArray(posts)) {
		console.error('Expected articles to be an array but got:', posts)
	}

	const paths = posts.map((post: Post) => ({
		params: { post: post.attributes.url.toString() },
	}))

	return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postUrl = params?.post
	const posts = await fetchPosts()
	const post = posts.find((p: any) => p.attributes.url === postUrl)

	if (!post) {
		return {
			notFound: true,
		}
	}
	const fetchedPost = await fetchOnePost(post.id.toString())

	return {
		props: { post: fetchedPost },
	}
}
