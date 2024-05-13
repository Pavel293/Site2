import React, { FC } from 'react'
import styles from './TryTelebon.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Image from 'next/image'
import ProfessionalPhoneThirdLeft from '../../../../assets/icons/professional/ProfessionalPhoneThirdLeft.png'
import TryTelebonTablet from '../../../../assets/icons/try_telebon/TryTelebonTablet.png'
import TryTelebonCalendar from '../../../../assets/icons/try_telebon/TryTelebonCalendar.png'
import ProfessionalPhoneSecondRight from '../../../../assets/icons/professional/ProfessionalPhoneSecondRight.png'
const TryTelebon: FC = () => {
	return (
		<div className={cn(styles.base, 'wrapper')}>
			<div className={styles.main_container}>
				<div className={styles.left}>
					<div className={styles.left_head}>
						<div className={styles.hrow}>
							<div className={styles.left_head}>
								<h2>Попробуйте Telebon</h2>
								<p>14 дней бесплатно, далее 10 руб в день</p>
							</div>
							<div className={styles.circle}>
								<IconInstance name={EIcons.linkarrow} />
							</div>
						</div>
						<div className={styles.line}></div>
					</div>
					<div className={styles.image}>
						<div className={styles.phone}>
							<Image src={TryTelebonTablet} alt={''} />
						</div>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.row}>
						<div className={styles.rleft}>
							<Image src={ProfessionalPhoneThirdLeft} alt={''} />
							<div className={styles.circle}>
								<IconInstance name={EIcons.linkarrow} />
							</div>
						</div>
						<div className={styles.column}>
							<div className={styles.up}>
								<div className={styles.circle}>
									<IconInstance name={EIcons.linkarrow} />
								</div>
								<Image src={ProfessionalPhoneSecondRight} alt={''} />
							</div>
							<div className={styles.bottom}>
								<div className={styles.calendar}>
									<Image src={TryTelebonCalendar} alt={''} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TryTelebon
