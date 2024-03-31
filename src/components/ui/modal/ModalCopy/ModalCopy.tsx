import React, { FC, useEffect } from 'react'
import styles from './ModalCopy.module.scss'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'

interface ModalMessageProps {
	isOpen: boolean
	onClose: () => void
}

const ModalCopy: FC<ModalMessageProps> = ({ isOpen, onClose }) => {
	useEffect(() => {
		let timer: NodeJS.Timeout
		if (isOpen) {
			timer = setTimeout(() => {
				onClose()
			}, 1500)
		}
		return () => clearTimeout(timer)
	}, [isOpen, onClose])

	return isOpen ? (
		<div className={styles.successMessage}>
			<IconInstance name={EIcons.contentcopy} />
			<p>Данные скопированы</p>
		</div>
	) : null
}

export default ModalCopy
