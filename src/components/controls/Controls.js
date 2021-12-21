import { useContext } from "react"
import { ResetMapZoom } from "../../svg"
import { ParkCampContext } from "../../context/parkCampContext"
import { Wrapper } from "../../styles/controlsStyle"

const Controls = () => {
	const { goToLocation } = useContext(ParkCampContext)
	return (
		<Wrapper>
			<button
				style={{
					backgroundColor: "transparent",
					backgroundRepeat: "no-repeat",
					border: "none",
					cursor: "pointer",
					overflow: "hidden",
					outline: "none",
				}}
				onClick={() => goToLocation(37.83667174, -119.77431935000001, 4)}>
				<ResetMapZoom />
			</button>
		</Wrapper>
	)
}

export default Controls
