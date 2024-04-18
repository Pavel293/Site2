import React, { useRef, useState } from 'react'
import styles from './Feedback.module.scss'
import cn from 'classnames'
import { propoData } from './promo-data'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SliderItem from '@/screens/main/feedback/slideritem/SliderItem'
export interface ICard {
	feedback: React.ReactNode
	name: string
	profession: React.ReactNode
	experience: string
	city: string
	image: React.ReactNode
	button: string
	link: string
}

interface Props {
	data: ICard[]
	arrowRef: React.MutableRefObject<null>
}

const Feedback = () => {
	const arrowRef = useRef(null)
	const settings = {
		dots: false,
		infinite: true,
		speed: 350,
		slidesToShow: 2,
		slidesToScroll: 1,
		swipeToSlide: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 769,
				settings: { slidesToShow: 1, dots: true },
			},
		],
	}

	const cardDisc = propoData?.map((item, i) => (
		<SliderItem item={item} key={i} index={i} />
	))

	return (
		<>
			<div
				className={cn(styles.fuck, `wrapper`)}
				itemScope
				itemType="http://schema.org/Service"
			>
				<h2 itemProp="name">Отзывы наших клиентов</h2>
				<div className={styles.container}>
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

export default Feedback
