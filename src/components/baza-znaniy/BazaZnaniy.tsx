import React, { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import styles from './BazaZnaniy.module.scss'
import Link from 'next/link'

const BazaZnaniy: FC = () => {
	return (
		<Meta
			title="База знаний"
			description="База знаний"
			image="home_preview.jpg"
		>
			<div className={styles.wrapper}>
				<p>TELEBON</p>
				<div className={styles.container}>
					<div className={styles.box}>
						<h1>Начало работы с Телебон</h1>
						<Link href="/baza-znaniy/registration">
							<h2>Регистрация</h2>
						</Link>
						<Link href="/baza-znaniy/interface">
							<h2>Интерфейс</h2>
						</Link>
					</div>
					<div className={styles.box}>
						<h1>Настройка рабочих процессов</h1>
						<Link href="/baza-znaniy/personal-information">
							<h2>Личная информация</h2>
						</Link>
						<Link href="/baza-znaniy/setting-up-a-work-schedule">
							<h2>Настройка графика работы организации</h2>
						</Link>
						<Link href="/baza-znaniy/creating-resources">
							<h2>Создание ресурсов (кабинетов) для оказания услуг</h2>
						</Link>
						<Link href="/baza-znaniy/category">
							<h2>Категория услуг и услуги</h2>
						</Link>
						<Link href="/baza-znaniy/employee">
							<h2>Сотрудники</h2>
						</Link>
					</div>
					<div className={styles.box}>
						<h1>Основные разделы системы</h1>
						<Link href="/baza-znaniy/recording-log">
							<h2>Журнал записи</h2>
						</Link>
						<Link href="/baza-znaniy/clients">
							<h2>Клиенты</h2>
						</Link>
						<Link href="/baza-znaniy/category">
							<h2>Категории услуг и услуги</h2>
						</Link>
						<Link href="/baza-znaniy/employee">
							<h2>Сотрудники</h2>
						</Link>
						<Link href="/baza-znaniy/finance">
							<h2>Финансы</h2>
						</Link>
						<Link href="/baza-znaniy/portal">
							<h2>Портал</h2>
						</Link>
					</div>
					<div className={styles.box}>
						<h1>Полезное</h1>
						<Link href="/baza-znaniy/role-model">
							<h2>Ролевая модель</h2>
						</Link>
						{/*<Link href="/baza-znaniy/classifier">*/}
						{/*	<h2>Классификаторы</h2>*/}
						{/*</Link>*/}
						<Link href="/baza-znaniy/importing-clients">
							<h2>Импорт клиентов</h2>
						</Link>
						{/*<Link href="/baza-znaniy/rate">*/}
						{/*	<h2>Тарифы</h2>*/}
						{/*</Link>*/}
						<Link href="/baza-znaniy/technical-support">
							<h2>Техподдержка</h2>
						</Link>
					</div>
				</div>
			</div>
		</Meta>
	)
}

export default BazaZnaniy
