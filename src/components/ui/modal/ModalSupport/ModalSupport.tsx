import React, { useEffect } from 'react'
import styles from './ModalSupport.module.scss'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import cn from 'classnames'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
}

const ModalSupport: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	const [isClosing, setIsClosing] = React.useState(false)

	useEffect(() => {
		if (!isOpen) {
			setIsClosing(true)
		}
	}, [isOpen])

	const handleClose = () => {
		setIsClosing(false)
		onClose()
	}

	return (
		<div
			className={cn(styles.modalOverlay, {
				[styles.active]: isOpen,
				[styles.closing]: isClosing,
			})}
			onClick={handleClose}
		>
			<div className={styles.modal}>
				<IconInstance name={EIcons.success} />
				<p className={styles.title}>Спасибо!</p>
				<p>Скоро мы с Вами свяжемся 🤙🏻 </p>
				<button>
					<div className={styles.arrow}>
						<IconInstance name={EIcons.arrowleft} />
						Вернуться на главную
					</div>
				</button>
			</div>
		</div>
	)
}

export default ModalSupport
