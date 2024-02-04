import { HoverIcon1 } from './HoverIcon1'
import { HoverIcon2 } from './HoverIcon2'
import { HoverIcon3 } from './HoverIcon3'
import { HoverIcon4 } from './HoverIcon4'
import { HoverIcon5 } from './HoverIcon5'
import { HoverIcon6 } from './HoverIcon6'
import { LogoIcon } from './LogoIcon'
import { ArrowRightOutline } from './ArrowRightOutline'
import { LogoMark } from './LogoMark'
import { Background } from './Background'
import { CalendarOutline } from './CalendarOutline'
import { SquareOutline } from './SquareOutline'
import { StatisticsOutline } from './StatisticsOutline'
import { Users3Outline } from './Users3Outline'
import { WalletOutline } from './WalletOutline'
import { Grid } from './Grid'
import { Soon } from './Soon'
import { Journal } from './Journal'
import { Telegram } from './Telegram'
import { LogoTextTop } from './LogoTextTop'
import { EnterIcon } from './EnterIcon'
import { LaptopIcon } from './LaptopIcon'
import { RectangleSplit4UnevenOutline } from './RectangleSplit4UnevenOutline'
import { MoneyCircleOutline } from './MoneyCircleOutline'
import { DocumentTextOutline } from './DocumentTextOutline'
import { TelegramIcon } from './TelegramIcon'

export enum EIcons {
	hover1,
	hover2,
	hover3,
	hover4,
	hover5,
	hover6,
	logoicon,
	arrowrightoutline,
	logomark,
	background,
	calendaroutline,
	squareoutline,
	statisticsoutline,
	walletoutline,
	users3outline,
	grid,
	soon,
	journal,
	telegram,
	logotexttop,
	entericon,
	laptopicon,
	rectanglesplit4unevenoutline,
	moneycircleoutline,
	documenttextoutline,
	telegramicon,
}

const ICONS: Record<EIcons, any> = {
	[EIcons.hover1]: HoverIcon1,
	[EIcons.hover2]: HoverIcon2,
	[EIcons.hover3]: HoverIcon3,
	[EIcons.hover4]: HoverIcon4,
	[EIcons.hover5]: HoverIcon5,
	[EIcons.hover6]: HoverIcon6,
	[EIcons.logoicon]: LogoIcon,
	[EIcons.arrowrightoutline]: ArrowRightOutline,
	[EIcons.logomark]: LogoMark,
	[EIcons.background]: Background,
	[EIcons.calendaroutline]: CalendarOutline,
	[EIcons.squareoutline]: SquareOutline,
	[EIcons.statisticsoutline]: StatisticsOutline,
	[EIcons.users3outline]: Users3Outline,
	[EIcons.walletoutline]: WalletOutline,
	[EIcons.grid]: Grid,
	[EIcons.soon]: Soon,
	[EIcons.journal]: Journal,
	[EIcons.telegram]: Telegram,
	[EIcons.logotexttop]: LogoTextTop,
	[EIcons.entericon]: EnterIcon,
	[EIcons.laptopicon]: LaptopIcon,
	[EIcons.rectanglesplit4unevenoutline]: RectangleSplit4UnevenOutline,
	[EIcons.moneycircleoutline]: MoneyCircleOutline,
	[EIcons.documenttextoutline]: DocumentTextOutline,
	[EIcons.telegramicon]: TelegramIcon,
}

interface IIconProps {
	name: EIcons
}

export function Icon(props: IIconProps) {
	const { name } = props

	const ChosenIcon = ICONS[name]
	return <ChosenIcon />
}
