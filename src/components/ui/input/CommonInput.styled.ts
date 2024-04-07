import styled from 'styled-components'
import themelight from '../../../styles/colors'

export interface PaletteProps {
	palette?: 'primary' | 'orange'
}

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 48px;
	width: 667px;

	@media (max-width: 1600px) {
		width: 530px;
		gap: 28px;
	}

	@media (max-width: 1300px) {
		width: 400px;
		gap: 24px;
	}

	@media (max-width: 992px) {
		width: 270px;
		gap: 18px;
	}

	@media (max-width: 768px) {
		width: 92vw;
		gap: 4.8vw;
	}
`

export const Input = styled.div<PaletteProps>`
	display: flex;
	flex-direction: column;
	gap: 24px;

	.custom_input {
		background: ${({ palette }) => {
			if (palette) {
				switch (palette) {
					case 'orange':
						return themelight.color.white
					case 'primary':
					default:
						return themelight.color.white_smoke
				}
			} else {
				return themelight.color.white_smoke
			}
		}};
		border: 1px solid transparent;
		padding: 0 16px;
		border-radius: 12px;
		font-size: 24px;
		font-weight: 500;
		line-height: 32.78px;
		text-align: left;
		width: 100%;
		height: 80px;
	}
	@media (max-width: 1600px) {
		gap: 24px;
		.custom_input {
			padding: 0 16px;
			border-radius: 12px;
			font-size: 18px;
			line-height: 33px;
			height: 60px;
		}
	}

	@media (max-width: 1300px) {
		gap: 16px;
		.custom_input {
			padding: 0 14px;
			border-radius: 8px;
			font-size: 15px;
			line-height: 33px;
			height: 50px;
		}
	}

	@media (max-width: 992px) {
		gap: 12px;
		.custom_input {
			padding: 0 12px;
			border-radius: 8px;
			font-size: 11px;
			line-height: 33px;
			height: 40px;
		}
	}

	@media (max-width: 768px) {
		gap: 6.4vw;
		.custom_input {
			background: ${({ palette }) => {
				if (palette) {
					switch (palette) {
						case 'orange':
							return themelight.color.gray01
						case 'primary':
						default:
							return themelight.color.white_smoke
					}
				} else {
					return themelight.color.white_smoke
				}
			}};
			padding: 0 4vw;
			border-radius: 2.1vw;
			font-size: 3.8vw;
			line-height: 4vw;
			height: 10.7vw;
		}
	}
`

export const CheckboxContainer = styled.label<PaletteProps>`
	display: flex;
	flex-direction: row;
	gap: 12px;
	font-size: 20px;
	font-weight: 500;
	line-height: 27.32px;
	text-align: left;
	span {
		color: ${({ palette }) => {
			if (palette) {
				switch (palette) {
					case 'orange':
						return themelight.text.orange01
					case 'primary':
					default:
						return themelight.text.primary01
				}
			} else {
				return themelight.text.primary01
			}
		}};
	}
	.checkbox {
		color: ${({ palette }) => {
			if (palette) {
				switch (palette) {
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
		border-radius: 8px;
		width: 24px;
		height: 24px;
		cursor: pointer;
	}

	@media (max-width: 1600px) {
		gap: 12px;
		font-size: 15px;
		line-height: 20px;
		.checkbox {
			border-radius: 8px;
			width: 20px;
			height: 20px;
		}
	}

	@media (max-width: 1300px) {
		gap: 12px;
		font-size: 11px;
		line-height: 13px;
		.checkbox {
			border-radius: 8px;
			width: 18px;
			height: 18px;
		}
	}

	@media (max-width: 992px) {
		gap: 8px;
		font-size: 7px;
		line-height: 10px;
		.checkbox {
			border-radius: 4px;
			width: 12px;
			height: 12px;
		}
	}

	@media (max-width: 768px) {
		gap: 2.1vw;
		font-size: 3.2vw;
		line-height: 4vw;
		.checkbox {
			border-radius: 2.1vw;
			width: 6.4vw;
			height: 6.4vw;
		}
	}
`
