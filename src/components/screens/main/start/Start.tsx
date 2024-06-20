import React, { FC, useRef } from 'react'
import styles from './Start.module.scss'
import cn from 'classnames'
import useMatchMedia from '@/hooks/useMatchMedia'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Start: FC = () => {
	const isMobile = useMatchMedia('768')
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

	return (
		<div className={cn(styles.base, 'wrapper')}>
			<div className={styles.text}>
				<p>Служба поддержки</p>
				{isMobile ? (
					<span>
						Помогают решить любой возникший
						<br /> вопрос по работе с системой
					</span>
				) : (
					<span>
						Помогают решить любой возникший вопрос по <br />
						работе с системой
					</span>
				)}
			</div>
			{isMobile ? (
				<div className={styles.main_container}>
					<div className={styles.slider_container}>
						<Slider {...settings} ref={arrowRef}>
							<div className={styles.card}>
								<div
									style={{
										background: '#F6B03C0D',
										padding: '9.2308vw 6.1538vw',
										borderRadius: '3.0769vw',
										height: '100%',
									}}
								>
									<div
										style={{
											background: '#09101C4D',
											padding: '9.2308vw 6.1538vw',
											borderRadius: '3.0769vw',
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'space-between',
											height: '100%',
										}}
									>
										<div className={styles.text}>
											<p>
												Узнают <br />
												потребности
											</p>
											<span>
												Расскажут как удобно и<br /> быстро начать работу
											</span>
										</div>
										<div className={styles.num}>
											<p>1</p>
										</div>
									</div>
								</div>
							</div>
							<div className={styles.card}>
								<div
									style={{
										background: '#F6B03C0D',
										padding: '9.2308vw 6.1538vw',
										borderRadius: '3.0769vw',
										height: '100%',
									}}
								>
									<div
										style={{
											background: '#09101C80',
											padding: '9.2308vw 6.1538vw',
											borderRadius: '3.0769vw',
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'space-between',
											height: '100%',
											position: 'relative',
										}}
									>
										<div className={styles.circle}></div>
										<div className={styles.text}>
											<p>
												Перенесут все
												<br />
												данные
											</p>
											<span>
												Возьмут на себя все
												<br /> трудности с переездом
											</span>
										</div>
										<div className={styles.num}>
											<p>2</p>
										</div>
									</div>
								</div>
							</div>
							<div className={styles.card}>
								<div
									style={{
										background: '#F6B03C0D',
										padding: '9.2308vw 6.1538vw',
										borderRadius: '3.0769vw',
										height: '100%',
									}}
								>
									<div
										style={{
											background: '#09101C',
											padding: '9.2308vw 6.1538vw',
											borderRadius: '3.0769vw',
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'space-between',
											height: '100%',
										}}
									>
										<div className={styles.text}>
											<p>
												Компенсируем
												<br /> переезд
											</p>
											<span>
												Предоставят компенсацию
												<br /> лицензий других систем
											</span>
										</div>
										<div className={styles.num}>
											<p>3</p>
										</div>
									</div>
								</div>
							</div>
						</Slider>
					</div>
				</div>
			) : (
				<div className={styles.main_container}>
					<div className={styles.card}>
						<div className={styles.text}>
							<p>
								Узнают <br />
								потребности
							</p>
							<span>
								Расскажем как удобно и <br />
								быстро начать работу
							</span>
						</div>
						<div className={styles.num}>
							<p>1</p>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.text}>
							<p>
								Перенесут <br />
								все данные
							</p>
							<span>
								Возьмут на себя все трудности с<br /> переездом
							</span>
						</div>
						<div className={styles.num}>
							<p>2</p>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.text}>
							<p>
								Согласуют
								<br /> бесплатный период
							</p>
							<span>
								Компенсируем лицензии
								<br /> других систем
							</span>
						</div>
						<div className={styles.num}>
							<p>3</p>
						</div>
					</div>
					<div className={styles.circle}></div>
				</div>
			)}
		</div>
	)
}

export default Start
