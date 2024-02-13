import React, { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import Link from 'next/link'
import Image from 'next/image'
import Img64 from '../../../assets/baza-znaniy/img64.svg'
import Img65 from '../../../assets/baza-znaniy/img65.svg'

const RoleModel: FC = () => {
	return (
		<Meta title="Ролевая модель" description="Ролевая модель">
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
						Ролевая модель системы Telebon
					</h1>
					<p>
						В зависимости от функционала и доступных возможностей система
						предусматривает три варианта ролей:
					</p>
					<li>
						Владелец – человек, который создал аккаунт - имеет полный
						функционал, наделяется им при регистрации;
					</li>
					<li>
						Администратор - получает роль при создании его в системе владельцем
						<Image src={Img64} alt={''} />, не имеет доступа:
						<br />– Раздел «Портал»;
						<br />– Удаление сотрудников.
					</li>
					<li>
						Менеджер, получает роль при создании его в системе владельцем{' '}
						<Image src={Img64} alt={''} />, не имеет доступа:
						<br />– Раздел «Портал»;
						<br />– Раздел «Финансы»;
						<br />– Удаление сотрудников;
						<br />– Удаление Клиентов.
					</li>
					<p>
						Узнать, какая роль установлена для Вас, можно в «Личном кабинете»
						строка «Тип занятости».
					</p>
					<Image src={Img65} alt={''} />
				</div>
			</div>
		</Meta>
	)
}

export default RoleModel
