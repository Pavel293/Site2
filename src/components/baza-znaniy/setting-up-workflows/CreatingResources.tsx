import React, { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import Link from 'next/link'
import Image from 'next/image'
import Img10 from '../../../assets/baza-znaniy/img10.svg'
import Img11 from '../../../assets/baza-znaniy/img11.svg'
import Img13 from '../../../assets/baza-znaniy/img13.svg'

const CreatingResources: FC = () => {
	return (
		<Meta
			title="Создание пространства для оказания услуг"
			description="Создание пространства для оказания услуг"
		>
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
						Создание пространства для оказания услуг
					</h1>
					<p>
						Любая услуга оказывается в определенном пространстве: офисное
						помещение, кабинет, бокс и т.д. В системе Telebon это называется
						«Кабинет». Для его создания необходимо выбрать вкладку «Компания»{' '}
						{'>'} «Ресурсы»
					</p>
					<br />
					<Image src={Img10} alt={'Настройка режима работы организации'} />
					<br />
					<p>
						Нажимаем «Добавить кабинет». Система позволяет нам редактировать:
					</p>
					<li>
						Название кабинета, которое будет отображаться в «журнале записи»;
					</li>
					<li>
						Вместимость кабинета (данная функция позволяет показать возможности
						наполняемости кабинета при групповой услуге, больше максимально
						указанного количества Клиентов на услугу не попадет, что позволит
						Вам избежать неловких ситуаций с перегруженностью);
					</li>
					<li>Время работы кабинета.</li>
					<br />
					<Image src={Img11} alt={'Настройка режима работы организации'} />
					<br />
					<p>
						В зависимости от ситуации, созданный кабинет можно редактировать или
						удалить. Добавить кабинет возможно еще одним способом «Компания»{' '}
						{'>'} «Сводка» {'>'} «Ресурсы» функциональная кнопка «Добавить»
					</p>
					<br />
					<Image src={Img13} alt={'Настройка режима работы организации'} />
				</div>
			</div>
		</Meta>
	)
}

export default CreatingResources
