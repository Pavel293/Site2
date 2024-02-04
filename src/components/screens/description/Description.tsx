import React, { FC, ReactNode, useState } from 'react'
import styles from './Description.module.scss'
import { EIcons, Icon as IconInstance } from '../../../assets/icons/icon'
import cn from 'classnames'
import Link from 'next/link'
import { propoData } from '@/screens/description/promo-data'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import DecriptionImage from '../../../assets/icons/DescriptionImage.svg'

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
						<div className={styles.iconBox}>
							<span className={styles.icon}>
								<IconInstance name={EIcons.squareoutline} />
							</span>
						</div>
						<span className={styles.text}>Электронный журнал</span>
					</StyledButton>
					<StyledButton
						selected={selectedButton === 1}
						onClick={() => handleButtonClick(1)}
					>
						<div className={styles.iconBox}>
							<span className={styles.icon}>
								<IconInstance name={EIcons.users3outline} />
							</span>
						</div>
						<span className={styles.text}>Учёт клиентов</span>
					</StyledButton>
					<StyledButton
						selected={selectedButton === 2}
						onClick={() => handleButtonClick(2)}
					>
						<div className={styles.iconBox}>
							<span className={styles.icon}>
								<IconInstance name={EIcons.walletoutline} />
							</span>
						</div>
						<span className={styles.text}>Финансы</span>
					</StyledButton>
					<StyledButton
						selected={selectedButton === 3}
						onClick={() => handleButtonClick(3)}
					>
						<div className={styles.iconBox}>
							<span className={styles.icon}>
								<IconInstance name={EIcons.calendaroutline} />
							</span>
						</div>
						<span className={styles.text}>Задачник</span>
					</StyledButton>
					<StyledButton
						selected={selectedButton === 4}
						onClick={() => handleButtonClick(4)}
					>
						<div className={styles.iconBox}>
							<span className={styles.icon}>
								<IconInstance name={EIcons.statisticsoutline} />
							</span>
						</div>
						<span className={styles.text}>Аналитика</span>
					</StyledButton>
				</div>
				<div>
					<motion.div className={styles.buttonContent}>
						<AnimatePresence initial={false} mode={'wait'}>
							<motion.div
								key={selectedButton}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ delay: 0.2 }}
							>
								<div className={styles.textBox}>
									<h1>{item.title}</h1>
									<h4 style={{ whiteSpace: 'pre-wrap' }}>
										{item.description}{' '}
									</h4>
								</div>
								<Image src={DecriptionImage} alt={''} className={styles.icon} />
							</motion.div>
						</AnimatePresence>
					</motion.div>
				</div>
			</div>
		</>
	)
}

export default Decription
