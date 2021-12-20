import React, { useContext } from "react"
import { ParkCampContext } from "../../context/parkCampContext"
const ParkDataBrief = () => {
	const { parkDataArray, activePoint, subActivePoint, selectedPark } =
		useContext(ParkCampContext)

	return (
		<div>
			<h3>
				{activePoint !== null
					? parkDataArray[activePoint].name
					: subActivePoint !== null
					? subActivePoint.name
					: "Hover over Park"}
			</h3>
			<p>
				{activePoint !== null
					? parkDataArray[activePoint].description
					: subActivePoint !== null
					? subActivePoint.description
					: null}
			</p>
		</div>
	)
}

export default ParkDataBrief
