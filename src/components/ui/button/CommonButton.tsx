import React, { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import styles from './CommonButton.module.scss'

interface ButtonProps {
	href: string
	children: React.ReactNode
	className?: string
}

const CommonButton: FC<ButtonProps> = ({ href, children, className }) => {
	return (
		<button className={cn(styles.button, className)}>
			<Link href={href}>{children}</Link>
		</button>
	)
}

export default CommonButton
