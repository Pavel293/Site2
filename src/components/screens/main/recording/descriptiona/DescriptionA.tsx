import React, { FC, useRef, useState } from 'react'
import styles from './DescriptionA.module.scss'
import cn from 'classnames'
import TextAnimation from '@/ui/animation/text-animation/TextAnimation'
import DescriptionBackground from '../../../../../assets/icons/description/DescriptionBackground.png'
import DescriptionBackgroundMobile from '../../../../../assets/icons/description/DescriptionBackgroundMobile.png'
import Image from 'next/image'
import { propoData } from '@/screens/main/recording/descriptiona/propo-data'
import { EIcons, Icon as IconInstance } from '../../../../../assets/icons/icon'
import useMatchMedia from '@/hooks/useMatchMedia'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SliderItem from '@/screens/main/recording/descriptiona/item/SliderItem'

export interface PropoData {
	title: string
	icon: React.ReactNode
	img: React.ReactNode
	description: string
}

const DescriptionA: FC = () => {
	const texts = ['простая', 'удобная']
	const [activeIndex, setActiveIndex] = useState<number>(0)
	const isMobile = useMatchMedia('768')

	const handleClick = (index: number) => {
		setActiveIndex(index)
	}

	const arrowRef = useRef(null)
	const settings = {
		dots: false,
		infinite: true,
		speed: 350,
		slidesToShow: 3,
		slidesToScroll: 1,
		swipeToSlide: true,
		arrows: false,
	}

	const cardDisc = propoData?.map((item, i) => (
		<SliderItem item={item} key={i} index={i} />
	))

	return (
		<div className={cn(styles.base, `wrapper`)}>
			{/*<div className={styles.animtext}>*/}
			{/*	<h1>*/}
			{/*		По-настоящему&nbsp; <TextAnimation texts={texts} />*/}
			{/*	</h1>*/}
			{/*	<h1>запись клиентов</h1>*/}
			{/*</div>*/}
			<div className={styles.box}>
				<div className={styles.row}>
					<div className={styles.column}>
						<div className={styles.text}>
							<h2>Ознакомьтесь с функциями</h2>
							<p>Все самое необходимое, без лишних настроек</p>
						</div>
						{isMobile ? (
							<div className={styles.slider_container}>
								{isMobile ? (
									<div className={styles.image_mobile}>
										<Image
											src={DescriptionBackgroundMobile}
											alt="Описание фона"
										/>
									</div>
								) : null}
								<Slider {...settings} ref={arrowRef}>
									{cardDisc}
								</Slider>
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
						) : (
							propoData?.map((item: PropoData, index) => (
								<div
									className={cn(styles.card, {
										[styles.active]: index === activeIndex,
									})}
									key={index}
									onMouseEnter={() => handleClick(index)}
								>
									<div className={styles.circle}>{item.icon}</div>
									<p>{item.title}</p>
									{index === activeIndex ? (
										<div className={styles.additional_text}>
											<div className={styles.container}>
												<p>{item.description}</p>
												<button className={styles.additional_button}>
													Перейти
												</button>
											</div>
										</div>
									) : null}
								</div>
							))
						)}
						{isMobile ? null : <button>ПОПРОБОВАТЬ БЕСПЛАТНО</button>}
					</div>
					{isMobile ? null : (
						<div className={styles.image}>
							<Image
								src={DescriptionBackground}
								alt="Описание фона"
								className={styles.background}
							/>

							{propoData[activeIndex]?.img}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default DescriptionA
