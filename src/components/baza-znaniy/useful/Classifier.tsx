import React, { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import Link from 'next/link'
import Image from 'next/image'
import Img58 from '../../../assets/baza-znaniy/img58.svg'
import Img59 from '../../../assets/baza-znaniy/img59.svg'
import Img60 from '../../../assets/baza-znaniy/img60.svg'
import Img61 from '../../../assets/baza-znaniy/img61.svg'
import Img62 from '../../../assets/baza-znaniy/img62.svg'
import Img63 from '../../../assets/baza-znaniy/img63.svg'
import styles from '../BazaZnaniy.module.scss'

const Classifier: FC = () => {
	return (
		<Meta
			title="Классификация"
			description="Классификация"
			image="logo_preview.png"
		>
			<div className={styles.infobox}>
				<p className={styles.altp}>
					<Link href="/baza-znaniy">Назад</Link>
				</p>
				<div className={styles.textbox}>
					<h1>Классификаторы категорий услуг</h1>
					<p>
						Классификаторы необходимы для разграничения Клиентов на определенные
						категории при записи на услуги. Настройка осуществляется при
						создании «Категории услуг» в разделе «Компания» {'>'} «Услуги
						компании» {'>'} «Добавить категорию». Если категория услуги уже
						создана, но нажмите кнопку «редактировать» напротив названия.{' '}
						<Image src={Img58} alt={''} /> Названия (не должны повторяться)
						классификаторов могут быть различные и выделяются определенным
						цветом (не должен повторяться), как пример:{' '}
						<Image src={Img59} alt={''} />
					</p>
					<br />
					<p>
						Важно, чтобы после ввода каждого классификатора вы нажали на кнопку
						«Добавить классификатор»
					</p>
					<Image src={Img60} alt={''} />
					<br />
					<p>
						Раздел с заполненными классификаторами выглядит следующим образом:
					</p>
					<Image src={Img61} alt={''} />
					<br />
					<p>
						При добавлении записи в журнал, классификатор добавляется нажатием
						«+» рядом с выбранным Клиентом. Выбираете нужны и он привязывается в
						записи.
					</p>
					<Image src={Img62} alt={''} />
					<Image src={Img63} alt={''} />
				</div>
			</div>
		</Meta>
	)
}

export default Classifier
