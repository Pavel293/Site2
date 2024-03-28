import React, { useRef } from 'react'
import styles from './AuthTelebot.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import SliderItem from '@/screens/telebot/auth/slideritem/SliderItem'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import AuthTelebotImg from '../../../../assets/icons/AuthTelebot.svg'
import { propoData } from '@/screens/telebot/auth/promo-data'
export interface ICard {
	icon: any
	title: string
	description: string
}

interface Props {
	data: ICard[]
	arrowRef: React.MutableRefObject<null>
}

const AuthTelebot = () => {
	const arrowRef = useRef(null)
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		arrows: false,
	}

	const cardDisc = propoData?.map((item, i) => (
		<SliderItem item={item} key={i} />
	))
	return (
		<>
			<div className={cn(styles.fuck, `wrapper`)}>
				<div className={styles.left}>
					<div className={styles.text}>
						<Image
							src={AuthTelebotImg}
							alt={
								'Чтобы начать пользоваться ботом, зарегистрируйте личый кабинет Telebon!'
							}
						></Image>
						<h2>Авторизация</h2>
						<p>
							Чтобы начать пользоваться ботом, зарегистрируйте личый кабинет
							Telebon!
						</p>
					</div>
					<button className={styles.button}>Зарегистрироваться</button>
				</div>

				<div className={styles.container}>
					<div
						className={`${styles.switch} ${styles.left}`}
						onClick={() => {
							if (arrowRef && arrowRef.current) {
								//@ts-ignore
								arrowRef.current.slickPrev()
							}
						}}
					>
						<IconInstance name={EIcons.arrowforwardleft} />
					</div>
					<Slider {...settings} ref={arrowRef}>
						{cardDisc}
					</Slider>
					<div
						className={`${styles.switch} ${styles.right}`}
						onClick={() => {
							if (arrowRef && arrowRef.current) {
								//@ts-ignore
								arrowRef.current.slickNext()
							}
						}}
					>
						<IconInstance name={EIcons.arrowforwardright} />
					</div>
				</div>
			</div>
		</>
	)
}

export default AuthTelebot
