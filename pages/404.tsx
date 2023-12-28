import Error from '@/screens/404/404'

export default function ErrorPage() {
	return (
		<div
			style={{
				position: 'relative',
				zIndex: '999',
				height: '100%',
				width: '100%',
				inset: '0',
			}}
		>
			<Error />
		</div>
	)
}
