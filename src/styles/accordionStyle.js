import styled, { css, keyframes } from "styled-components"

const slideDown = keyframes`
  0% {
    height: 0;}
  100% {
    height: 40px;
  }
`

const slideUp = keyframes`
  0% {
    height:20px;

  } 100% {
		height: 0;
  }
`

export const ParkDescription = styled.div`
	padding: 20px;
	display: none;
	height: 400px;
	width: 200px;
	z-index: 999;
	background-color: ${(props) => props.theme.colors.button};
	border-radius: ${(props) => props.theme.borders.borderRadius};
	border: ${(props) => props.theme.borders.outline};
	/* position: absolute; */
	transition: 0.3s ease-out;
	transform: translate(125%, -20%);
	transition: 1000 ease-out;
`

export const Title = styled.div``

export const ListStyle = styled.div`
	display: flex;
	color: ${(props) =>
		props.open
			? props.theme.fontColor.fontColorS
			: props.theme.fontColor.fontColorU};
	justify-content: space-between;
	align-items: center;
	padding: 15px 10px;
	background: ${(props) =>
		props.open ? props.theme.colors.active : props.theme.colors.button};
	cursor: pointer;
	border-bottom: ${(props) => props.theme.borders.bottomBorder};
	overflow: hidden;
	${(props) =>
		props.animated &&
		css`
			&:hover {
				background-size: cover;
				font-size: ${(props) => props.theme.fontSize.fontS};
				background: ${(props) => props.theme.colors.hlghtButtn};
				color: ${(props) => props.theme.fontColor.fontColorS};
				transform: translate(0%, -5%);
				transition: 0.3s ease-out;
			}
			&:active {
				background: ${(props) => props.theme.colors.active};
			}
		`};
`

export const ListItemStyle = styled.div`
	display: ${({ open }) => (open ? "flex" : "none")};
	position: relative;
	border-bottom: ${(props) => props.theme.borders.bottomBorder};
	animation: ${({ open }) => (open ? slideDown : slideUp)} 1000ms ease-in-out
		forwards;
	align-items: center;
	padding: 2px;
	&:hover {
		background: ${(props) => props.theme.colors.subHlght};
	}
`

export const ListContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 10px;
	border-radius: 6px;
	border: ${(props) => props.theme.borders.outline};
	width: 300px;
	max-height: 90vh;
	overflow: hidden;
`
export const Cheveron = styled.div`
	transform: rotate(0deg);
	transform: ${({ open }) => (open ? `rotate(0deg)` : `rotate(90deg)`)};
	transition: all 0.3s ease-out;
`
