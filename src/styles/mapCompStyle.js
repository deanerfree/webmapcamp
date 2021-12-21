import styled from "styled-components"

export const MapContainer = styled.div`
	border: ${(props) => props.theme.borders.outline};
	border-radius: ${(props) => props.theme.borders.borderRadius};
	overflow: hidden;
	position: relative;
`
