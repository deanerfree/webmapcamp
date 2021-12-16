import React, { useContext } from "react"
import { ParkCampContext } from "../../context/parkCampContext"
const ParkDataBrief = () => {
	const { parkDataArray, activePoint } = useContext(ParkCampContext)
	return (
		<div>
			<p>
				{activePoint !== null
					? parkDataArray[activePoint].description
					: "Hover over Park"}
			</p>
		</div>
	)
}

export default ParkDataBrief
