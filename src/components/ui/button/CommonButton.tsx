import React, { FC } from 'react'
import { StyledButton } from './CommonButton.styled'
import Link from 'next/link'

interface ButtonProps {
	href?: string
	color?: 'primary' | 'orange' | 'gray' | 'gray02' | 'ghost'
	size?: 'l' | 'm' | 's' | 'xs'
	children: React.ReactNode
	className?: string
	disabled?: boolean
	type?: 'submit' | 'button' | 'reset'
}

const CommonButton: FC<ButtonProps> = ({
	href,
	color,
	size,
	children,
	disabled,
	type = 'button',
}) => {
	return (
		<>
			{href ? (
				<Link href={href}>
					<StyledButton
						color={color}
						size={size}
						type={type}
						disabled={disabled}
					>
						{children}
					</StyledButton>
				</Link>
			) : (
				<StyledButton color={color} size={size} type={type} disabled={disabled}>
					{children}
				</StyledButton>
			)}
		</>
	)
}

export default CommonButton
