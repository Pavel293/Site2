import React, { FC } from 'react'
import styles from './Description.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import img1 from '../../../../assets/icons/main/png/img1.png'
import img2 from '../../../../assets/icons/main/png/img2.png'
import img3 from '../../../../assets/icons/main/png/img3.png'
import img4 from '../../../../assets/icons/main/png/img4.png'
import img5 from '../../../../assets/icons/main/png/img5.png'
import img6 from '../../../../assets/icons/main/png/img6.png'
import img7 from '../../../../assets/icons/main/png/img7.png'
import img8 from '../../../../assets/icons/main/png/img8.png'
import img9 from '../../../../assets/icons/main/png/img9.png'
import img10 from '../../../../assets/icons/main/png/img10.png'
import img11 from '../../../../assets/icons/main/png/img11.png'
import img12 from '../../../../assets/icons/main/png/img12.png'
import img13 from '../../../../assets/icons/main/png/img13.png'
import img14 from '../../../../assets/icons/main/png/img14.png'
import img15 from '../../../../assets/icons/main/png/img15.png'
import img16 from '../../../../assets/icons/main/png/img16.png'
import img17 from '../../../../assets/icons/main/png/img17.png'
import img18 from '../../../../assets/icons/main/png/img18.png'
import img19 from '../../../../assets/icons/main/png/img19.png'
import img20 from '../../../../assets/icons/main/png/img20.png'
import img21 from '../../../../assets/icons/main/png/img21.png'
import DescriptionFire from '../../../../assets/icons/description/DescriptionFire.png'

const Description: FC = () => {
	return (
		<div className={cn(styles.base, 'wrapper')}>
			<div className={styles.main_container}>
				<div className={styles.text}>
					<Image src={DescriptionFire} alt={''} />
					<h2>Это революция в Онлайн записи</h2>
					<p>
						Стоимость модуля и хостинг: <span>0 ₽</span>
						<br />
						Подключение: <span>~7 минут</span>
					</p>
					<IconInstance name={EIcons.descriptionstars} />
				</div>
				<div className={styles.anim_container}>
					<div className={styles.box}>
						<div className={styles.row}>
							<div className={styles.column}>
								<Image src={img1} alt={''} />
								<Image src={img2} alt={''} />
								<Image src={img3} alt={''} />
								<Image src={img4} alt={''} />
								<Image src={img5} alt={''} />
								<Image src={img6} alt={''} />
								<Image src={img7} alt={''} />
								<Image src={img1} alt={''} />
								<Image src={img2} alt={''} />
								<Image src={img3} alt={''} />
								<Image src={img4} alt={''} />
								<Image src={img5} alt={''} />
								<Image src={img6} alt={''} />
								<Image src={img7} alt={''} />
							</div>
							<div className={styles.column}>
								<Image src={img8} alt={''} />
								<Image src={img9} alt={''} />
								<Image src={img10} alt={''} />
								<Image src={img11} alt={''} />
								<Image src={img12} alt={''} />
								<Image src={img13} alt={''} />
								<Image src={img14} alt={''} />
								<Image src={img8} alt={''} />
								<Image src={img9} alt={''} />
								<Image src={img10} alt={''} />
								<Image src={img11} alt={''} />
								<Image src={img12} alt={''} />
								<Image src={img13} alt={''} />
								<Image src={img14} alt={''} />
							</div>
							<div className={styles.column}>
								<Image src={img15} alt={''} />
								<Image src={img16} alt={''} />
								<Image src={img17} alt={''} />
								<Image src={img18} alt={''} />
								<Image src={img19} alt={''} />
								<Image src={img20} alt={''} />
								<Image src={img21} alt={''} />
								<Image src={img15} alt={''} />
								<Image src={img16} alt={''} />
								<Image src={img17} alt={''} />
								<Image src={img18} alt={''} />
								<Image src={img19} alt={''} />
								<Image src={img20} alt={''} />
								<Image src={img21} alt={''} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Description
