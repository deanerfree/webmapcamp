import styled from "styled-components"

export const Wrapper = styled.div`
	margin-top: 2vh;
	padding: 0px 10px 0px 10px;
	height: 100%;
	max-height: 43vh;
	width: 70vw;
	border: ${(props) => props.theme.borders.outline};
	border-radius: ${(props) => props.theme.borders.borderRadius};
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
