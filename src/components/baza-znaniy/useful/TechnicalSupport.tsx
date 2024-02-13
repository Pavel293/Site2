import React, { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import Link from 'next/link'
import Image from 'next/image'
import Img66 from '../../../assets/baza-znaniy/img66.svg'

const TechnicalSupport: FC = () => {
	return (
		<Meta title="Техническая поддежка" description="Техническая поддержка">
			<div>
				<p
					style={{
						textAlign: 'left',
						margin: '5vh',
						fontSize: '16px',
					}}
				>
					<Link href="/baza-znaniy">Назад</Link>
				</p>
				<div
					style={{
						width: '60vw',
						margin: '0 20vw',
						display: 'flex',
						alignSelf: 'center',
						flexDirection: 'column',
						gap: '5px',
					}}
				>
					<h1 style={{ marginBottom: '20px' }}>
						Техническая поддержка пользователя в системе Telebon
					</h1>
					<p>
						Связь с технической поддержкой можно осуществить одним из трех
						способов:
						<br />- через Техподдержку в блоке «Мессенджеры» и выделена синим
						значком. <Image src={Img66} alt={''} />;
						<br />- по телефону 8-812-507-63-33;
						<br />- по электронной почте hello@telebon.ru.
					</p>
				</div>
			</div>
		</Meta>
	)
}

export default TechnicalSupport
