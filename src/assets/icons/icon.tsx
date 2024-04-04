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
import { BrushOutline } from './BrushOutline'
import { AttractionsOutline } from './AttractionsOutline'
import { AutoOutline } from './AutoOutline'
import { BuildOutline } from './BuildOutline'
import { GavelOutline } from './GavelOutline'
import { HeartOutline } from './HeartOutline'
import { SchoolOutline } from './SchoolOutline'
import { SportsOutline } from './SportsOutline'
import { ArrowForwardLeft } from './ArrowForwardLeft'
import { ArrowForwardRight } from './ArrowForwardRight'
import { UsersAuduo } from './UsersAuduo'
import { Robot } from './Robot'
import { ContactSupport } from './ContactSupport'
import { SupportCall } from './SupportCall'
import { SupportMail } from './SupportMail'
import { SupportPhone } from './SupportPhone'
import { SupportMailAddress } from './SupportMailAddress'
import { SupportWorkingHours } from './SupportWorkingHours'
import { SupportPhoneBold } from './SupportPhoneBold'
import { SupportMailAddressSmall } from './SupportMailAddressSmall'
import { DownloadApp } from './DownloadApp'
import { HowToReg } from './HowToReg'
import { AccountCircle } from './AccountCircle'
import { ContactSupportSmall } from './ContactSupportSmall'
import { CallImage } from './CallImage'
import { CircleBolt } from './CircleBolt'
import { Click } from './Click'
import { Marketing } from './Marketing'
import { HourGlass } from './HourGlass'
import { Success } from './Success'
import { ArrowLeft } from './ArrowLeft'
import { CookieIcon } from './CookieIcon'
import { ContentCopy } from './ContentCopy'
import { Error } from './Error'
import { Triangle } from './Triangle'

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
	brushoutline,
	attractionsoutline,
	autooutline,
	buildoutline,
	gaveloutline,
	heartoutline,
	sportsoutline,
	schooloutline,
	arrowforwardleft,
	arrowforwardright,
	usersauduo,
	robot,
	contactsupport,
	supportcall,
	supportmail,
	supportphone,
	supportmailaddress,
	supportworkinghours,
	supportphonebold,
	supportmailaddresssmall,
	downloadapp,
	howtoreg,
	accountcircle,
	contactsupportsmall,
	callimage,
	circlebolt,
	click,
	marketing,
	hourglass,
	success,
	arrowleft,
	cookie,
	contentcopy,
	errorimage,
	triangle,
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
	[EIcons.brushoutline]: BrushOutline,
	[EIcons.attractionsoutline]: AttractionsOutline,
	[EIcons.autooutline]: AutoOutline,
	[EIcons.buildoutline]: BuildOutline,
	[EIcons.gaveloutline]: GavelOutline,
	[EIcons.heartoutline]: HeartOutline,
	[EIcons.schooloutline]: SchoolOutline,
	[EIcons.sportsoutline]: SportsOutline,
	[EIcons.arrowforwardleft]: ArrowForwardLeft,
	[EIcons.arrowforwardright]: ArrowForwardRight,
	[EIcons.usersauduo]: UsersAuduo,
	[EIcons.robot]: Robot,
	[EIcons.contactsupport]: ContactSupport,
	[EIcons.supportcall]: SupportCall,
	[EIcons.supportmail]: SupportMail,
	[EIcons.supportphone]: SupportPhone,
	[EIcons.supportphonebold]: SupportPhoneBold,
	[EIcons.supportmailaddress]: SupportMailAddress,
	[EIcons.supportmailaddresssmall]: SupportMailAddressSmall,
	[EIcons.supportworkinghours]: SupportWorkingHours,
	[EIcons.downloadapp]: DownloadApp,
	[EIcons.howtoreg]: HowToReg,
	[EIcons.accountcircle]: AccountCircle,
	[EIcons.contactsupportsmall]: ContactSupportSmall,
	[EIcons.callimage]: CallImage,
	[EIcons.circlebolt]: CircleBolt,
	[EIcons.click]: Click,
	[EIcons.marketing]: Marketing,
	[EIcons.hourglass]: HourGlass,
	[EIcons.success]: Success,
	[EIcons.arrowleft]: ArrowLeft,
	[EIcons.cookie]: CookieIcon,
	[EIcons.contentcopy]: ContentCopy,
	[EIcons.errorimage]: Error,
	[EIcons.triangle]: Triangle,
}

interface IIconProps {
	name: EIcons
}

export function Icon(props: IIconProps) {
	const { name } = props

	const ChosenIcon = ICONS[name]
	return <ChosenIcon />
}
