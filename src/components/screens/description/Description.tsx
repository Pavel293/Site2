import React, { FC, ReactNode, useState } from 'react'
import styles from './Description.module.scss'
import { EIcons, Icon as IconInstance } from '../../../assets/icons/icon'
import cn from 'classnames'
import Link from 'next/link'
import { propoData } from '@/screens/description/promo-data'
import { AnimatePresence, motion } from 'framer-motion'

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

const Decription = () => {
	const [selectedButton, setSelectedButton] = useState<number>(0)
	const item = propoData[selectedButton]

	const handleButtonClick = (index: number) => {
		setSelectedButton(index)
	}

	return (
		<>
			<div className={cn(styles.fuck, 'wrapper')}>
				<div className={styles.buttonBorder}>
					<StyledButton
						selected={selectedButton === 0}
						onClick={() => handleButtonClick(0)}
					>
						<span
							style={{
								display: 'inline-flex',
								verticalAlign: 'middle',
								height: '20px',
							}}
						>
							<IconInstance name={EIcons.squareoutline} />
						</span>
						<span>Журнал записи</span>
					</StyledButton>
					<StyledButton
						selected={selectedButton === 1}
						onClick={() => handleButtonClick(1)}
					>
						<span
							style={{
								display: 'inline-flex',
								verticalAlign: 'middle',
								height: '20px',
							}}
						>
							<IconInstance name={EIcons.users3outline} />
						</span>
						<span>Учёт клиентов</span>
					</StyledButton>
					<StyledButton
						selected={selectedButton === 2}
						onClick={() => handleButtonClick(2)}
					>
						<span
							style={{
								display: 'inline-flex',
								verticalAlign: 'middle',
								height: '20px',
							}}
						>
							<IconInstance name={EIcons.walletoutline} />
						</span>
						<span>Финансы</span>
					</StyledButton>
					<StyledButton
						selected={selectedButton === 3}
						onClick={() => handleButtonClick(3)}
					>
						<span
							style={{
								display: 'inline-flex',
								verticalAlign: 'middle',
								height: '20px',
							}}
						>
							<IconInstance name={EIcons.calendaroutline} />
						</span>
						<span>Задачник</span>
					</StyledButton>
					<StyledButton
						selected={selectedButton === 4}
						onClick={() => handleButtonClick(4)}
					>
						<span
							style={{
								display: 'inline-flex',
								verticalAlign: 'middle',
								height: '20px',
							}}
						>
							<IconInstance name={EIcons.statisticsoutline} />
						</span>
						<span>Аналитика</span>
					</StyledButton>
				</div>
				<div>
					<motion.div className={styles.buttonContent}>
						<AnimatePresence exitBeforeEnter={false}>
							<motion.div
								key={selectedButton}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -5 }}
								transition={{ delay: 0.2 }}
							>
								<motion.h1 layoutId="title">{item.title}</motion.h1>
								<motion.h4
									layoutId="description"
									style={{ whiteSpace: 'pre-wrap' }}
								>
									{item.description}{' '}
								</motion.h4>
								<Link href="https://lk.telebon.ru/registration">
									<motion.button layoutId="button">
										Давайте попробуем
									</motion.button>
								</Link>
							</motion.div>
						</AnimatePresence>
						<div className={styles.icon}>{item.icon}</div>
					</motion.div>
				</div>
			</div>
		</>
	)
}

export default Decription
