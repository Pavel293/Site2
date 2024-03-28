import React, { useRef, useState } from 'react'
import styles from './Rate.module.scss'
import cn from 'classnames'
import { propoData } from './promo-data'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import SliderItem from '@/screens/main/rate/slideritem/SliderItem'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export interface ICard {
	icon: any
	title: string
	description: string
}

interface Props {
	data: ICard[]
	arrowRef: React.MutableRefObject<null>
}

const Rate = () => {
	const arrowRef = useRef(null)
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
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
				<h2>
					Telebon подойдет для мастеров различных направлений в сфере услуг
				</h2>
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

export default Rate
