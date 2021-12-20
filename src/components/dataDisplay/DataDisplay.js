import React, { useContext } from "react"
import { Wrapper } from "../../styles/dataStyle"
import { ParkCampContext } from "../../context/parkCampContext"
import ParkDataBrief from "./ParkDataBrief"

const DataDisplay = () => {
	const { parkDataArray, activePoint, selectedPark } =
		useContext(ParkCampContext)
	return <Wrapper>{selectedPark ? <ParkDataBrief /> : <p>Here</p>}</Wrapper>
}

export default DataDisplay
