import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Image from 'next/image'
import Slider1 from '../../../../assets/icons/slider/Slider1.png'
import Slider2 from '../../../../assets/icons/slider/Slider2.png'
import Slider3 from '../../../../assets/icons/slider/Slider3.png'
import Slider4 from '../../../../assets/icons/slider/Slider4.png'
import Slider5 from '../../../../assets/icons/slider/Slider5.png'
import Slider6 from '../../../../assets/icons/slider/Slider6.png'
import Slider7 from '../../../../assets/icons/slider/Slider7.png'
import Slider8 from '../../../../assets/icons/slider/Slider8.png'
import Slider9 from '../../../../assets/icons/slider/Slider9.png'
import Slider10 from '../../../../assets/icons/slider/Slider10.png'

export const propoData = [
	{
		icon: <IconInstance name={EIcons.brush} />,
		title: (
			<>
				Бровистам и<br />
				лешмейкерам
			</>
		),
		image: <Image src={Slider1} alt={''} />,
	},
	{
		icon: <IconInstance name={EIcons.barber} />,
		title: <>Барберам</>,
		image: <Image src={Slider2} alt={''} />,
	},
	{
		icon: <IconInstance name={EIcons.cosmetic} />,
		title: <>Косметологам</>,
		image: <Image src={Slider3} alt={''} />,
	},
	{
		icon: <IconInstance name={EIcons.manicure} />,
		title: (
			<>
				Мастерам
				<br />
				маникюра
			</>
		),
		image: <Image src={Slider4} alt={''} />,
	},
	{
		icon: <IconInstance name={EIcons.massage} />,
		title: (
			<>
				Студиям
				<br />
				массажа
			</>
		),
		image: <Image src={Slider5} alt={''} />,
	},
	{
		icon: <IconInstance name={EIcons.mirror} />,
		title: (
			<>
				Визажистам и <br />
				парикмахерам
			</>
		),
		image: <Image src={Slider6} alt={''} />,
	},
	{
		icon: <IconInstance name={EIcons.tatoo} />,
		title: <>Тату студиям</>,
		image: <Image src={Slider7} alt={''} />,
	},
	{
		icon: <IconInstance name={EIcons.towel} />,
		title: (
			<>
				Спортивным
				<br />
				объектам
			</>
		),
		image: <Image src={Slider8} alt={''} />,
	},
	{
		icon: <IconInstance name={EIcons.soap} />,
		title: <>Преподавателям</>,
		image: <Image src={Slider9} alt={''} />,
	},
	{
		icon: <IconInstance name={EIcons.spa} />,
		title: (
			<>
				SPA и фитнес
				<br />
				центрам
			</>
		),
		image: <Image src={Slider10} alt={''} />,
	},
]
