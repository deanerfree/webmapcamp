import React, { useContext } from "react"
import { ParkCampContext } from "../../context/parkCampContext"
// import { ImageWrapper, SliderImage } from "../../styles/dataStyle"
import Carousel from "../carousel/Carousel"
const ParkDataBrief = ({ ...props }) => {
	const { parkDataArray, activePoint, subActivePoint } =
		useContext(ParkCampContext)
	const { name, description, images } = props

	return (
		<div>
			<h3>{name || "Nothing here"}</h3>
			<Carousel images={images} />
			<p>{description || null}</p>
		</div>
	)
}

export default ParkDataBrief
