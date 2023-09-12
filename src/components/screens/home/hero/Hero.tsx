import { FC } from 'react'
import styles from './Hero.module.scss'
import Image from 'next/image'
import HeroImage from '../../../../assets/hero.png'
import cn from 'classnames'
import Button from '@/ui/button/Button'

const Hero: FC = () => {
	return (
		<div className={cn('wrapper', styles.fuck)}>
			<div className={styles.left}>
				<div className={styles.head}>
					<h1>
						CRM система для
						<br /> Вашего бизнеса
					</h1>
					<h4>Новый уровень взаимоотношения с клиентами</h4>
				</div>
				<div className={styles.btns}>
					<Button>Начать организовывать процессы</Button>
					<Button>Попробовать бесплатно</Button>
				</div>
			</div>

			<div className={styles.right}>
				<Image
					className="relative  top-0"
					priority
					quality={100}
					layout="responsive"
					src={HeroImage}
					alt="Hero"
				/>
			</div>
		</div>
	)
}

export default Hero
