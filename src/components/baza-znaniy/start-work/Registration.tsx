import React, { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import Link from 'next/link'
import Img1 from '../../../assets/baza-znaniy/img1.svg'
import Img2 from '../../../assets/baza-znaniy/img2.svg'
import Img3 from '../../../assets/baza-znaniy/img3.svg'
import Image from 'next/image'
import styles from '../BazaZnaniy.module.scss'

const Registration: FC = () => {
	return (
		<Meta title="Регистрация" description="Регистрация">
			<div className={styles.infobox}>
				<p className={styles.altp}>
					<Link href="/baza-znaniy">Назад</Link>
				</p>
				<div className={styles.textbox}>
					<h1>Регистрация</h1>
					<p>
						Для начала работы необходимо перейти на сайт{' '}
						<span>
							<Link href={'https://lk.telebon.ru/auth'}>lk.telebon.ru</Link>
						</span>{' '}
						и начать регистрацию в системе. Вам необходимо указать свой
						мобильный телефон, постоянно используемую электронную почту, а также
						придумать и запомнить пароль.
					</p>
					<Image
						style={{ margin: '0 auto' }}
						src={Img1}
						alt={'Окно регистрации'}
					/>
					<p>
						После этого необходимо завершить регистрацию, указав Ваше имя и
						город, в котором находится Ваш бренд (организация). Название бренда
						(организации) вносится в свободной форме. Вы в любой момент можете
						отредактировать данные о себе и о своей организации.
					</p>
					<Image src={Img2} alt={'Окно регистрации'} />
					<Image src={Img3} alt={'Окно регистрации'} />
				</div>
			</div>
		</Meta>
	)
}

export default Registration
