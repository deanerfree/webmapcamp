import styled from "styled-components"

export const Wrapper = styled.div`
	margin-top: 2vh;
	position: absolute;
	padding: 0px 10px 0px 10px;
	height: 50%;
	max-height: 43vh;
	width: 30vw;
	border: ${(props) => props.theme.borders.outline};
	border-radius: ${(props) => props.theme.borders.borderRadius};
	top: 0;
	left: 50;
	overflow: hidden;
`

export const Grid = styled.div`
	display: flex;
`
export const Row = styled.div`
	/* display: flex; */
	flex-direction: row;
	height: ${(props) => props.height};
`
export const Col = styled.div`
	flex: ${(props) => props.size};
	flex-direction: column;
`

export const ImageWrapper = styled.div`
	display: block;
	height: 50%;
	position: relative;
`
export const SliderImage = styled.img`
	display: block;
	box-sizing: border-box;
	height: 21.333vw;
	width: 100% !important;
	padding: 0px 2vw;
	object-fit: cover;
`
