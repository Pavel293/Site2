import { HoverIcon1 } from './HoverIcon1'
import { HoverIcon2 } from './HoverIcon2'
import { HoverIcon3 } from './HoverIcon3'
import { HoverIcon4 } from './HoverIcon4'
import { HoverIcon5 } from './HoverIcon5'
import { HoverIcon6 } from './HoverIcon6'

export enum EIcons {
	hover1,
	hover2,
	hover3,
	hover4,
	hover5,
	hover6,
}

const ICONS: Record<EIcons, any> = {
	[EIcons.hover1]: HoverIcon1,
	[EIcons.hover2]: HoverIcon2,
	[EIcons.hover3]: HoverIcon3,
	[EIcons.hover4]: HoverIcon4,
	[EIcons.hover5]: HoverIcon5,
	[EIcons.hover6]: HoverIcon6,
}

interface IIconProps {
	name: EIcons
}

export function Icon(props: IIconProps) {
	const { name } = props

	const ChosenIcon = ICONS[name]
	return <ChosenIcon />
}
