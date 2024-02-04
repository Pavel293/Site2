import React, { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import Link from 'next/link'
import Image from 'next/image'
import Img4 from '../../../assets/baza-znaniy/img4.svg'

const Interface: FC = () => {
	return (
		<Meta title="Интерфейс" description="Интерфейс">
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
					<h1 style={{ marginBottom: '20px' }}>Интерфейс</h1>
					<p>
						Первое, что Вы видите после регистрации – это «Журнал записи». Левый
						сайдбар содержит основные элементы функциональной составляющей
						Telebon:
					</p>
					<li>Журнал записи;</li>
					<li>График работы;</li>
					<li>Клиенты;</li>
					<li>Задачи;</li>
					<li>Вызов;</li>
					<li>Мессенджер;</li>
					<li>Маркетинг;</li>
					<li>Компания;</li>
					<li>Финансы;</li>
					<li>Аналитика.</li>
					<p>
						В верхнем сайдбаре отображается название Вашей организации, Ваша
						должность в системе, дата и день недели, а также функциональные
						кнопки «Рабочий стол», «Обратная связь», «Создание», «Заметки» и
						иконка профиля, которая даёт возможность перехода в «Личный кабинет»
						и в раздел «Компания».
					</p>
					<Image src={Img4} alt={'Интерфейс'} />
				</div>
			</div>
		</Meta>
	)
}

export default Interface
