import styled from "styled-components"

export const Wrapper = styled.div`
	margin-top: 2vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	padding: 10px;
	max-height: 10vh;
	width: 5;
	border: ${(props) => props.theme.borders.outline};
	border-radius: ${(props) => props.theme.borders.borderRadius};
	top: 0;
	left: 60vw;
	overflow: hidden;
	background: ${(props) => props.theme.colors.background};
`
