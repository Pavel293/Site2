import React, { FC, useRef } from 'react'
import styles from './SliderBlock.module.scss'
import cn from 'classnames'
import SliderItem from '@/screens/main/slider/item/SliderItem'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { propoData } from '@/screens/main/slider/propo-data'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'

export interface ICard {
	icon: React.ReactNode
	title: React.ReactNode
	image: React.ReactNode
}

const SliderBlock: FC = () => {
	const arrowRef = useRef(null)
	const settings = {
		dots: false,
		infinite: true,
		speed: 350,
		slidesToShow: 6,
		slidesToScroll: 1,
		swipeToSlide: true,
		arrows: false,
	}

	const cardDisc = propoData?.map((item, i) => (
		<SliderItem item={item} key={i} index={i} />
	))
	return (
		<div className={cn(styles.base)}>
			<div className={styles.main_container}>
				<div className={styles.text}>
					<h2>Telebon идеально подходит</h2>
					<div className={styles.tp}>
						<p style={{ marginLeft: '23vw' }}>
							Для специалистов и компаний в сфере услуг.
							<br />
							Поддерживается запись на индивидуальные и групповыхе услуги
						</p>
						<div
							style={{ display: 'flex', flexDirection: 'row', gap: '0.4167vw' }}
						>
							<div
								className={styles.switch}
								onClick={() => {
									if (arrowRef && arrowRef.current) {
										//@ts-ignore
										arrowRef.current.slickPrev()
									}
								}}
							>
								<IconInstance name={EIcons.buttonarrowleftwhite} />
							</div>
							<div
								className={styles.switch}
								onClick={() => {
									if (arrowRef && arrowRef.current) {
										//@ts-ignore
										arrowRef.current.slickNext()
									}
								}}
							>
								<IconInstance name={EIcons.buttonarrowrightwhite} />
							</div>
						</div>
					</div>
				</div>
				<div className={styles.slider_container}>
					<div className={styles.gradient_left}></div>
					<Slider {...settings} ref={arrowRef}>
						{cardDisc}
					</Slider>
					<div className={styles.gradient_right}></div>
				</div>
			</div>
		</div>
	)
}

export default SliderBlock
