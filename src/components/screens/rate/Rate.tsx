import React, { FC, ReactNode, useState } from 'react'
import styles from './Rate.module.scss'
import { EIcons, Icon as IconInstance } from '../../../assets/icons/icon'
import cn from 'classnames'
import Link from 'next/link'

interface StyledButtonProps {
	selected?: boolean
	onClick?: () => void
	children?: ReactNode
}

const StyledButton: FC<StyledButtonProps> = ({
	selected,
	onClick,
	children,
}) => {
	const buttonClass = selected
		? `${styles['styled-button']} ${styles['selected']}`
		: styles['styled-button']

	return (
		<button className={buttonClass} onClick={onClick}>
			{children}
		</button>
	)
}

const Rate = () => {
	const [selectedButton, setSelectedButton] = useState<number>(0)

	const handleButtonClick = (index: number) => {
		setSelectedButton(index)
	}

	return (
		<>
			<div className={cn(styles.fuck, 'wrapper')}>
				<h1>Доступен каждому</h1>
				<h2>Выберите количество сотрудников</h2>
				<div
					style={{
						border: '2px solid #496FFF',
						borderRadius: '15px',
						padding: '2px',
						gap: '4px',
					}}
				>
					{['1', '2', '3', '4', '5', '6', '7', '8', '9', '10 и более'].map(
						(value, index) => (
							<StyledButton
								key={index}
								selected={selectedButton === index}
								onClick={() => handleButtonClick(index)}
							>
								{value}
							</StyledButton>
						),
					)}
				</div>
				<p>Добавить сотрудников можно в любой момент работы</p>
				<div className={styles.cards}>
					<div className={styles.fcard}>
						<div className={styles.top}>
							<div className={styles.price}>
								<h1>Free</h1>
								<h2>0 ₽ </h2>
							</div>
							<p>Для одного или нескольких пользователей</p>
						</div>
						<div className={styles.main}>
							<p>
								Журнал записи
								<br />
								График работы
								<br />
								Ресурсы
								<br />
								Канбан-доска
								<br />
								Финансы
							</p>
							<h1>за 3 сотрудников</h1>
							<Link href="/404">
								<button>Начать пользоваться</button>
							</Link>
						</div>
					</div>
					<div className={styles.scard}>
						<div className={styles.top}>
							<div className={styles.price}>
								<h1>Standart</h1>
								<h2>{(selectedButton + 1) * 200} ₽ </h2>
							</div>
							<p>
								Для эффективной работы <br />
								Доступны все модули Telebon
							</p>
						</div>
						<div className={styles.main}>
							<p>
								Журнал записи
								<br />
								График работы
								<br />
								Ресурсы
								<br />
								Канбан-доска
								<br />
								Финансы
								<br />
								Аналитика
								<br />
								Товары
							</p>
							{selectedButton == 0 ? (
								<h1>за {selectedButton + 1} сотрудника</h1>
							) : (
								<h1>за {selectedButton + 1} сотрудников</h1>
							)}
							<Link href="/404">
								<button>Попробовать бесплатно</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Rate
