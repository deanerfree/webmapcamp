// import React, { useContext } from "react"
// import { ParkCampContext } from "../../context/parkCampContext"
import { DescriptionWrapper } from "../../styles/dataStyle"
import { ListCard } from "../../styles/accordionStyle"
import Carousel from "../carousel/Carousel"
const ParkDataBrief = ({ ...props }) => {
	// const { parkDataArray, activePoint, subActivePoint } =
	// 	useContext(ParkCampContext)
	const { name, description, images } = props

	return (
		<ListCard>
			<h3 style={{ margin: "10px" }}>{name || "Nothing here"}</h3>
			<Carousel images={images} />
			<DescriptionWrapper>{description || null}</DescriptionWrapper>
		</ListCard>
	)
}

export default ParkDataBrief
