import { FC } from 'react'
import styles from './Hero.module.scss'
import Image from 'next/image'
import HeroImage from '../../../../assets/hero.png'
import cn from 'classnames'

const Hero: FC = () => {
	return (
		<div className={cn('wrapper', styles.fuck)}>
			<div className={styles.left}>
				<div className={styles.head}>
					<h1>CRM система для Вашего бизнеса</h1>
					<h4>Новый уровень взаимоотношения с клиентами</h4>
				</div>
				<div className={styles.btns}>
					<button>Начать организовывать процессы</button>
					<button>Попробовать бесплатно</button>
				</div>
			</div>

			<div className={styles.right}>
				<Image
					className="relative  top-0"
					priority
					unoptimized
					src={HeroImage}
					alt="Hero"
				/>
			</div>
		</div>
	)
}

export default Hero
