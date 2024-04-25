import Image from 'next/image'
import React from 'react'
import MasterDiana from '../../../../assets/icons/MasterDiana.png'
import MasterSofia from '../../../../assets/icons/MasterSofia.png'
import MasterKristina from '../../../../assets/icons/MasterKristina.png'

export const propoData = [
	{
		feedback: (
			<>
				Удобный и простой процесс регистрации. Создание Telegram-бота тоже
				представилось легкой задачей, особенно когда была подробная инструкция,
				которая помогла в каждом шаге процесса. Это важно, так как четкие
				инструкции позволяют быстрее и эффективнее освоить новые навыки и
				возможности. Telebon вписывается в мой формат онлайн-уроков. Родителям
				будет удобно быстро записать своих детей ко мне на занятия!
			</>
		),
		name: 'София',
		profession: 'Репетитор английского языка',
		experience: null,
		city: 'Волгоград',
		image: <Image src={MasterSofia} alt={''} />,
		button: 'Записаться к Софии',
		link: 'https://t.me/LanguageHaven_bot',
		linkvk: 'https://t.me/syrova161',
		description: (
			<>
				“Помогу Вашему ребенку с заданием, повышу его успеваемость и подготовлю
				к контрольной работе!”
			</>
		),
		social: 'tg',
	},
	{
		feedback: (
			<>
				Большим плюсом сервиса является то, что можно подключить телеграмм-бот,
				через который удобно записаться на услуги ко мне, это прям
				палочка-выручалочка для мастера и клиентов!
				<br />
				Функционал сервиса удобен и понятен, легко разобраться.
				<br />В поддержке быстро консультируют, помогли мне разобраться с
				уведомлениями и ответили на все вопросы. Благодарю разработчиков!
			</>
		),
		name: 'Диана',
		profession: 'Бровист-визажист',
		experience: 'более 1,5 лет',
		city: 'Ульяновск',
		image: <Image src={MasterDiana} alt={''} />,
		button: 'Записаться к Диане',
		link: 'https://t.me/DkMakeupBrows_bot',
		linkvk: 'https://vk.com/feeldisha',
		description: (
			<>
				“Сделаю красивые брови и макияж любой сложности,
				<br />в соответствии с пожеланиями”
			</>
		),
		social: 'vk',
	},
	{
		feedback: (
			<>
				Очень удобное приложение, пользоваться им
				<br />
				одно удовольствие!
				<br />
				<br />
				Современный дизайн, запись через
				<br />
				Telegram-бот очень крутая!
			</>
		),
		name: 'Кристина',
		profession: <>Мастер депиляции и аппаратного массажа</>,
		experience: 'более 3-х лет',
		city: 'Липецк',
		image: <Image src={MasterKristina} alt={''} />,
		button: 'Записаться к Кристине',
		link: 'https://t.me/Massagedepilationbot',
		linkvk: 'https://vk.com/sugar_kristi',
		description: (
			<>
				“Девочки, приходите ко мне на аппаратный массаж!
				<br />Я обязательно подберу удобное время и день”
			</>
		),
		social: 'vk',
	},
]
