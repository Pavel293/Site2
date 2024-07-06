import React, { FC, useEffect, useState } from 'react'
import styles from './Nums.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Image from 'next/image'
import { useFormik } from 'formik'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'
import Card1 from '../../../../assets/icons/nums/NumsCard1.png'
import Card2 from '../../../../assets/icons/nums/NumsCard2.png'
import Card3 from '../../../../assets/icons/nums/NumsCard3.png'
import Card4 from '../../../../assets/icons/nums/NumsCard4.png'

const Nums: FC = () => {
	const isMobile = useMatchMedia('768')

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.container}>
				<div className={styles.column}>
					<p style={{ paddingLeft: '1.0417vw' }}>В цифрах</p>
					<div className={styles.row}>
						<div className={styles.card}>
							<Image src={Card1} alt={''} />
							<div className={styles.text}>
								<p>Более 3000+<br />
									мастеров</p>
								<span>по всей России{isMobile ? <br /> : null} доверяют Телебон</span>
							</div>
						</div>
						<div className={styles.card}>
							<Image src={Card2} alt={''} />
							<div className={styles.text}>
								<p>10 млн +<br />
									записей</p>
								<span>создано нашими{isMobile ? <br /> : null} пользователями</span>
							</div>
						</div>
					</div>
					<div className={styles.row}>
						<div className={styles.card}>
							<Image src={Card3} alt={''} />
							<div className={styles.text}>
								<p>33% создано<br />
									онлайн</p>
								<span>на сайте{isMobile ? <br /> : null} и в Telegram ботах</span>
							</div>
						</div>
						<div className={styles.card}>
							<Image src={Card4} alt={''} />
							<div className={styles.text}>
								<p>25% рост<br />
									конверсии</p>
								<span>после запуска модуля{isMobile ? <br /> : null} Telegram</span>
							</div>
						</div>
					</div>
					<button>Начать бесплатно</button>
				</div>
			</div>
		</div>
	)
}

export default Nums
