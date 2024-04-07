import styled from 'styled-components'
import themelight from '../../../styles/colors'

interface ButtonProps {
	color?: 'primary' | 'orange' | 'gray' | 'gray02' | 'ghost'
	size?: 'l' | 'm' | 's' | 'xs'
}

export const StyledButton = styled.button<ButtonProps>`
	transition: 0.5s ease;
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${({ size }) => {
		if (size) {
			switch (size) {
				case 'l':
					return '664px'
				case 'm':
					return '505px'
				case 's':
					return '360px'
				case 'xs':
				default:
					return '120px'
			}
		} else {
			return '360px'
		}
	}};
	height: 80px;
	border-radius: 24px;
	background: ${({ color }) => {
		if (color) {
			switch (color) {
				case 'gray':
					return themelight.color.btn_gray
				case 'gray02':
					return themelight.color.btn_gray02
				case 'ghost':
					return themelight.color.transparent
				case 'orange':
					return themelight.color.btn_orange
				case 'primary':
				default:
					return themelight.color.btn_primary
			}
		} else {
			return themelight.color.btn_primary
		}
	}};
	font-weight: 700;
	font-size: 24px;
	line-height: 33px;
	color: ${({ color }) => {
		if (color) {
			switch (color) {
				case 'gray':
					return themelight.text.white01
				case 'ghost':
					return themelight.text.base01
				case 'orange':
					return themelight.text.white01
				case 'primary':
				default:
					return themelight.text.white01
			}
		} else {
			return themelight.text.white01
		}
	}};
	user-select: none;
	&:hover {
		background: ${({ color }) => {
			if (color) {
				switch (color) {
					case 'gray':
						return themelight.color.btn_gray_hover
					case 'gray02':
						return themelight.color.btn_gray02_hover
					case 'ghost':
						return themelight.color.btn_gray_hover
					case 'orange':
						return themelight.color.btn_orange_hover
					case 'primary':
					default:
						return themelight.color.btn_primary_hover
				}
			} else {
				return themelight.color.btn_primary
			}
		}};
		color: ${({ color }) => {
			if (color) {
				switch (color) {
					case 'gray':
						return themelight.text.white01
					case 'ghost':
						return themelight.text.white01
					case 'orange':
						return themelight.text.white01
					case 'primary':
					default:
						return themelight.text.white01
				}
			} else {
				return themelight.text.white01
			}
		}};
	}
	&:active {
		background: rgba(0, 0, 0, 0.1);
	}
	&[disabled] {
		background: ${themelight.color.gray02};
		cursor: not-allowed;
	}
	@media (max-width: 1600px) {
		width: ${({ size }) => {
			if (size) {
				switch (size) {
					case 'l':
						return '530px'
					case 'm':
						return '380px'
					case 's':
						return '270px'
					case 'xs':
					default:
						return '100px'
				}
			} else {
				return '270px'
			}
		}};
		height: 60px;
		border-radius: 18px;
		font-size: 18px;
	}
	@media (max-width: 1300px) {
		width: ${({ size }) => {
			if (size) {
				switch (size) {
					case 'l':
						return '400px'
					case 'm':
						return '295px'
					case 's':
						return '210px'
					case 'xs':
					default:
						return '80px'
				}
			} else {
				return '210px'
			}
		}};
		height: 50px;
		border-radius: 15px;
		font-size: 14px;
	}
	@media (max-width: 992px) {
		width: ${({ size }) => {
			if (size) {
				switch (size) {
					case 'l':
						return '270px'
					case 'm':
						return '190px'
					case 's':
						return '140px'
					case 'xs':
					default:
						return '60px'
				}
			} else {
				return '140px'
			}
		}};
		height: 40px;
		border-radius: 11px;
		font-size: 11px;
	}
	@media (max-width: 768px) {
		width: ${({ size }) => {
			if (size) {
				switch (size) {
					case 'l':
						return '92vw'
					case 'm':
						return '92vw'
					case 's':
						return '92vw'
					case 'xs':
					default:
						return '92vw'
				}
			} else {
				return '92vw'
			}
		}};
		height: 14.4vw;
		border-radius: 5.3vw;
		font-size: 4vw;
	}
`
