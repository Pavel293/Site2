import { WalletOutline } from './WalletOutline'
import { ArrowList } from './ArrowList'
import { Analytic } from './Analytic'
import { ButtonArrowRight } from './ButtonArrowRight'
import { RightArrow } from './RightArrow'
import { Close } from './Close'
import { Success } from './Success'
import { ButtonIcon } from './ButtonIcon'
import { ButtonArrowLeftWhite } from './ButtonArrowLeftWhite'
import { GooglePlayIcon } from './GooglePlayIcon'
import { AppStoreIcon } from './AppStoreIcon'
import { ButtonArrowRightWhite } from './ButtonArrowRightWhite'
import { ButtonArrowRightBlack } from './functions/ButtonArrowRightBlack'
import { UserIcon } from './UserIcon'
import { X } from './X'
import { FooterLogomark } from './footeri/FooterLogomark'
import { FooterAppStore } from './footeri/FooterAppStore'
import { FooterEmail } from './footeri/FooterEmail'
import { FooterGooglePlay } from './footeri/FooterGooglePlay'
import { FooterPhone } from './footeri/FooterPhone'
import { FooterRuStore } from './footeri/FooterRuStore'
import { FooterWhatsUp } from './footeri/FooterWhatsUp'
import { FooterWhatsUpIcon } from './footeri/FooterWhatsUpIcon'
import { FooterVKIcon } from './footeri/FooterVKIcon'
import { FooterTelegramIcon } from './footeri/FooterTelegramIcon'
import { FooterMail } from './footeri/FooterMail'
import { FooterPhoneNumber } from './footeri/FooterPhoneNumber'
import { FooterVK } from './footeri/FooterVK'
import { FooterTG } from './footeri/FooterTG'
import { Triangle } from './Triangle'

export enum EIcons {
	walletoutline,
	arrowlist,
	analytic,
	buttonarrowright,
	buttonarrowrightwhite,
	buttonarrowleftwhite,
	rightarrow,
	close,
	success,
	buttonicon,
	googleplayicon,
	appstoreicon,
	buttonarrowrightblack,
	usericon,
	x,
	footerlogomark,
	footerappstore,
	footergoogleplay,
	footeremail,
	footerphone,
	footerrustore,
	footerwhatsup,
	footervkicon,
	footerwhatsupicon,
	footertelegramicon,
	footermail,
	footerphonenumber,
	footervk,
	footertg,
	triangle,
}

const ICONS: Record<EIcons, any> = {
	[EIcons.walletoutline]: WalletOutline,
	[EIcons.arrowlist]: ArrowList,
	[EIcons.analytic]: Analytic,
	[EIcons.buttonarrowright]: ButtonArrowRight,
	[EIcons.buttonarrowrightwhite]: ButtonArrowRightWhite,
	[EIcons.buttonarrowleftwhite]: ButtonArrowLeftWhite,
	[EIcons.rightarrow]: RightArrow,
	[EIcons.close]: Close,
	[EIcons.success]: Success,
	[EIcons.buttonicon]: ButtonIcon,
	[EIcons.googleplayicon]: GooglePlayIcon,
	[EIcons.appstoreicon]: AppStoreIcon,
	[EIcons.buttonarrowrightblack]: ButtonArrowRightBlack,
	[EIcons.usericon]: UserIcon,
	[EIcons.x]: X,
	[EIcons.footerlogomark]: FooterLogomark,
	[EIcons.footerappstore]: FooterAppStore,
	[EIcons.footeremail]: FooterEmail,
	[EIcons.footergoogleplay]: FooterGooglePlay,
	[EIcons.footerphone]: FooterPhone,
	[EIcons.footerrustore]: FooterRuStore,
	[EIcons.footerwhatsup]: FooterWhatsUp,
	[EIcons.footerwhatsupicon]: FooterWhatsUpIcon,
	[EIcons.footervkicon]: FooterVKIcon,
	[EIcons.footertelegramicon]: FooterTelegramIcon,
	[EIcons.footermail]: FooterMail,
	[EIcons.footerphonenumber]: FooterPhoneNumber,
	[EIcons.footervk]: FooterVK,
	[EIcons.footertg]: FooterTG,
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
