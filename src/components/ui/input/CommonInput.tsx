import React, { FC, ChangeEvent } from 'react'
import styles from './CommonInput.module.scss'

interface CustomInputProps {
	placeholder: string
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	height?: number
	width?: number
	background?: string
}

const CustomInput: FC<CustomInputProps> = ({
	placeholder,
	value,
	onChange,
	height,
	width,
	background,
}) => {
	const inputStyle = {
		width: width ? `${width}px` : '664px',
		height: height ? `${height}px` : '80px',
		background: background ? `${background}` : '#f5f5f5',
	}

	return (
		<input
			type="text"
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			style={inputStyle}
			className={styles.custom_input}
		/>
	)
}

export default CustomInput
