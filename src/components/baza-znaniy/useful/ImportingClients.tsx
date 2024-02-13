import React, { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import Link from 'next/link'
import Image from 'next/image'
import Img52 from '../../../assets/baza-znaniy/img52.svg'
import Img53 from '../../../assets/baza-znaniy/img53.svg'
import Img54 from '../../../assets/baza-znaniy/img54.svg'
import Img55 from '../../../assets/baza-znaniy/img55.svg'
import Img56 from '../../../assets/baza-znaniy/img56.svg'
import Img57 from '../../../assets/baza-znaniy/img57.svg'

const ImportingClients: FC = () => {
	return (
		<Meta title="Импорт клиентов" description="Импорт клиентов">
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
					<h1 style={{ marginBottom: '20px' }}>Импорт Клиентов</h1>
					<p>
						«Импорт Клиентов» подразумевает добавление, уже существующей у Вас,
						базы в систему Telebon. Данная функция расположена в блоке
						«Клиенты».
					</p>
					<Image src={Img52} alt={''} />
					<br />
					<p>Возможны два варианта добавления через импорт:</p>
					<li>
						«Скопировать/вставить данные» (из таблицы). <br /> Для этого способа
						необходимо скопировать ячейки из таблицы Excel{' '}
						<Image src={Img53} alt={''} />, вставить в поле импорта и нажать
						кнопку «Загрузить». <Image src={Img54} alt={''} /> Далее нужно
						сопоставить Ваши данные с заголовками таблицы и нажать кнопку
						«Загрузить» <Image src={Img55} alt={''} />. Клиенты появятся в базе
						данных системы Telebon в статусе «новых Клиентов»;
					</li>
					<li>
						«Загрузить готовый документ» Excel-файлом. <br />
						Чтобы воспользоваться данным способом, необходимо выбрать
						Excel-файл, который содержит информацию о Ваших Клиентах, и
						перенести его в поле добавления, либо найти файл по указанному
						адресу на Вашем компьютере <Image src={Img56} alt={''} />.
						Сопоставьте Ваши данные с заголовками таблицы и нажмите кнопку
						«Загрузить». <Image src={Img57} alt={''} /> <br />
						Клиенты будут успешно добавлены в систему Telebon.
						<br /> Примечание: система не добавит вновь Клиента, который уже
						есть в базе Telebon, ориентиром послужит номер телефона Клиента.
					</li>
				</div>
			</div>
		</Meta>
	)
}

export default ImportingClients
