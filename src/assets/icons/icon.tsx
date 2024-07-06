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
}

interface IIconProps {
	name: EIcons
}

export function Icon(props: IIconProps) {
	const { name } = props

	const ChosenIcon = ICONS[name]
	return <ChosenIcon />
}
