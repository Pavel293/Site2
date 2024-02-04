import React, { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import Link from 'next/link'
import Image from 'next/image'
import Img5 from '../../../assets/baza-znaniy/img5.svg'
import Img6 from '../../../assets/baza-znaniy/img6.svg'
import Img7 from '../../../assets/baza-znaniy/img7.svg'

const PersonalInformation: FC = () => {
	return (
		<Meta title="Личная информация" description="Личная информация">
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
						Личная информация пользователя
					</h1>
					<p>
						Для начала работы необходимо проверить и, при необходимости,
						отредактировать всю информацию о себе. Для этого открываем «Личный
						кабинет», который открывается по нажатию на своё имя в правом
						верхнем углу, либо в правом верхнем углу «рабочего стола».
					</p>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '20px',
							alignItems: 'center',
						}}
					>
						<Image src={Img5} alt={'Переход в личный кабинет'} />
						<Image src={Img6} alt={'Рабочий стол'} />
					</div>
					<p>
						Личный кабинет позволяет изменять данные о пользователе текущего
						аккаунта; <br />
						-Фамилию имя отчество; <br />
						-Пароль; <br />
						-Бегунок, который активирует возможность владельцу организации быть
						одновременно и сотрудником (у сотрудников, добавленных в систему
						руководителем, ползунок активируется автоматически); <br />
						-Указать свой график работы
					</p>
					<Image src={Img7} alt={'Личный кабинет'} />
				</div>
			</div>
		</Meta>
	)
}

export default PersonalInformation
