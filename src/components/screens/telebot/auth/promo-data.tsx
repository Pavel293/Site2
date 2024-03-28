import Image from 'next/image'
import SwiperTelebot1 from '../../../../assets/icons/SwiperTelebot1.png'
import SwiperTelebot2 from '../../../../assets/icons/SwiperTelebot2.png'
import SwiperTelebot3 from '../../../../assets/icons/SwiperTelebot3.png'
import SwiperTelebot4 from '../../../../assets/icons/SwiperTelebot4.png'
export const propoData = [
	{
		icon: <Image src={SwiperTelebot1} alt={'Авторизация'} />,
	},
	{
		icon: <Image src={SwiperTelebot2} alt={'Давайте знакомиться'} />,
	},
	{
		icon: <Image src={SwiperTelebot3} alt={'Настраиваем работу'} />,
	},
	{
		icon: <Image src={SwiperTelebot4} alt={'Завершение регистрации'} />,
	},
]
