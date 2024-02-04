import React, { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import Link from 'next/link'

const TechnicalSupport: FC = () => {
	return (
		<Meta title="Заглушка" description="Заглушка">
			<div>
				<p
					style={{
						textAlign: 'center',
						margin: '30vh auto 30vh auto',
						fontSize: '30px',
					}}
				>
					<Link href="/baza-znaniy">TELEBON</Link>
				</p>
			</div>
		</Meta>
	)
}

export default TechnicalSupport
