import React, { FC, useState } from 'react'
import styles from './Professional.module.scss'
import cn from 'classnames'
import TextAnimation from '@/ui/animation/text-animation/TextAnimation'
import DescriptionBackground from '../../../../assets/icons/DescriptionBackground.png'
import Image from 'next/image'
import { propoData } from '@/screens/main/descriptiona/propo-data'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import imp from '../../../../assets/icons/professional/ProfessionalBackgroundFirst.png'
import PoifessionalPhoneThirdLeft from '../../../../assets/icons/professional/PoifessionalPhoneThirdLeft.png'
const Professional: FC = () => {
	return (
		<div className={cn(styles.base, `wrapper`)}>
			<div className={styles.main_container}>
				<div className={styles.text}>
					<h3>
						Работайте вместе
						<br /> с профессионалами
					</h3>
				</div>
				<div className={styles.column}>
					<div className={styles.row}>
						<div className={styles.first}></div>
						<div className={styles.second}>
							<div className={styles.column}>
								<div className={styles.up}>
									<div className={styles.circle}>
										<IconInstance name={EIcons.linkarrow} />
									</div>
								</div>
								<div className={styles.row}>
									<div className={styles.left}></div>
									<div className={styles.right}>
										<div className={styles.circle}>
											<IconInstance name={EIcons.linkarrow} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.row}>
						<div className={styles.third}>
							<div className={styles.row}>
								<div className={styles.left}>
									<Image src={PoifessionalPhoneThirdLeft} alt={''} />
									<div className={styles.circle}>
										<IconInstance name={EIcons.linkarrow} />
									</div>
								</div>
								<div className={styles.column}>
									<div className={styles.up}></div>
									<div className={styles.bottom}></div>
								</div>
							</div>
						</div>
						<div className={styles.fourth}></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Professional
