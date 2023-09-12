import { FC } from 'react'

import cn from 'classnames'

import { TChildren } from '@/ui/button/button.types'

const Button: FC<TChildren> = ({ children, disabled, className, onClick }) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={cn(className, 'btn-primary')}
		>
			{children}
		</button>
	)
}

export default Button
