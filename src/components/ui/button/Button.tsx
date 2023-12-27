import { ReactNode } from 'react'
import { FC } from 'react'
import cn from 'classnames'
import { TChildren } from '@/ui/button/button.types'
import styles from './Button.module.scss'

interface ButtonProps extends TChildren {
	disabled?: boolean
	className?: string
	onClick?: () => void
	icon?: ReactNode
	secondary?: boolean
}

const Button: FC<ButtonProps> = ({
	children,
	disabled,
	className,
	onClick,
	icon,
	secondary,
}) => {
	const buttonClasses = cn(className, {
		'btn-primary': !secondary,
		'btn-secondary': secondary,
	})

	return (
		<button onClick={onClick} disabled={disabled} className={'btn-primary'}>
			<span className={styles.buttonContent}>
				{children}
				{icon && <span className={styles.icon}>{icon}</span>}
			</span>
		</button>
	)
}

export default Button
