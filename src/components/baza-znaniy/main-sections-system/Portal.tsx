import React, { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import Link from 'next/link'
import Img79 from '../../../assets/baza-znaniy/img79.svg'
import Img80 from '../../../assets/baza-znaniy/img80.svg'
import Img81 from '../../../assets/baza-znaniy/img81.svg'
import Img82 from '../../../assets/baza-znaniy/img82.svg'
import Img83 from '../../../assets/baza-znaniy/img83.svg'
import Img84 from '../../../assets/baza-znaniy/img84.svg'
import Image from 'next/image'
import styles from '../BazaZnaniy.module.scss'

const Portal: FC = () => {
	return (
		<Meta title="Портал" description="Портал">
			<div className={styles.infobox}>
				<p className={styles.altp}>
					<Link href="/baza-znaniy">Назад</Link>
				</p>
				<div className={styles.textbox}>
					<h1>Портал</h1>
					<p>
						Раздел «Портал» находится в левом нижнем углу экрана. Он содержит в
						себе информацию о количестве подключенных сотрудников к системе
						Telebon, подключенном тарифе и сроке его окончания.
					</p>
					<Image src={Img79} alt={''} />
					<li>
						Изменение тарифа. Чтобы изменить тариф нужно выбрать его из
						предложенных. <Image src={Img80} alt={''} /> Далее нужно указать
						количество сотрудников, которые будут работать в системе. При выборе
						тарифа и количества сотрудников программа автоматически рассчитает
						условия и стоимость тарифа. <Image src={Img81} alt={''} /> При
						нажатии кнопки «Применить», произойдет переход на страницу оплаты
						выбранного тарифа. После оплаты информация о подключенном тарифе в
						«Портале» изменится. <Image src={Img82} alt={''} />
					</li>
					<li>
						· Добавление сотрудников. На некоторых тарифах система Telebon
						позволяет добавлять дополнительное количество сотрудников. Для этого
						нужно пройти в раздел «Портал», выбрать требуемое количество
						добавляемых сотрудников, программа автоматически рассчитывает
						стоимость. <Image src={Img83} alt={''} /> При нажатии кнопки
						«Применить», произойдет переход на страницу оплаты. После оплаты
						количество мест для сотрудников увеличится.{' '}
						<Image src={Img84} alt={''} />
					</li>
				</div>
			</div>
		</Meta>
	)
}

export default Portal
