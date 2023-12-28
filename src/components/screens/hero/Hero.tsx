import { FC } from 'react'
import styles from './Hero.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import TextAnimation from '@/ui/animation/text-animation/TextAnimation'
import { EIcons, Icon as IconInstance } from '../../../assets/icons/icon'
import DialogImage from '../../../assets/icons/DialogImage.svg'
import Link from 'next/link'
const Hero: FC = () => {
	const texts = [
		'телефонии',
		'клиентской базы',
		'маркетинга',
		'контроля качества',
	]
	return (
		<div className={cn(styles.fuck, 'wrapper')}>
			<div className={cn(styles.left)}>
				<div className={styles.head}>
					<h1>
						Запись на услуги и автоматизация
						<TextAnimation texts={texts} />
					</h1>
				</div>
				<div className={styles.additionalText}>
					<p>
						Для индивидуальных и групповых услуг
						<br /> Интуитивно понятный дизайн
						<br /> Постоянная техподдержка
					</p>
					<div className={cn(styles.active, styles.buttons)}>
						<span className={styles.auth}>
							<Link href="/auth">Войти</Link>
						</span>
						<span className={cn(styles.auth, styles.reg)}>
							<Link href="/auth">
								<span>Попробовать бесплатно</span>
								<span
									style={{
										display: 'inline-flex',
										verticalAlign: 'middle',
										marginLeft: '10px',
										height: '20px',
									}}
								>
									<IconInstance name={EIcons.arrowrightoutline} />
								</span>
							</Link>
						</span>
					</div>
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.image}>
					<Image src={DialogImage} alt="Dialog Image" />
				</div>
			</div>
		</div>
	)
}

export default Hero
