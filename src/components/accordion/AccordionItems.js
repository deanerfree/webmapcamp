import React, { useState, useContext } from "react"
import { ParkCampContext } from "../../context/parkCampContext"
import {
	ListContainer,
	ListStyle,
	ListCard,
	Cheveron,
	Title,
} from "../../styles/accordionStyle"
import { CheveronDown } from "../../svg"
import ParkDataBrief from "../dataDisplay/ParkDataBrief"

const AccordionItems = ({ ...props }) => {
	const {
		activePoint,
		setActivePoint,
		setSubActivePoint,
		parkDataArray,
		goToLocation,
		setSelectedPark,
	} = useContext(ParkCampContext)

	const { campground, images, name, index, description } = props
	const [open, setOpen] = useState(false)

	const toggleDisplay = (status) => {
		setSelectedPark(parkDataArray[activePoint])
		goToLocation(
			parseFloat(parkDataArray[activePoint].latitude),
			parseFloat(parkDataArray[activePoint].longitude),
			8
		)
		setOpen(!status)
	}

	return (
		<>
			<ListStyle
				animated
				open={open}
				onClick={() => toggleDisplay(open)}
				onMouseOver={() => setActivePoint(index)}
				onMouseOut={() => setActivePoint(null)}>
				<Title>{name}</Title>
				<Cheveron open={open}>
					<CheveronDown />
				</Cheveron>
			</ListStyle>
			{open ? (
				<ParkDataBrief name={name} description={description} images={images} />
			) : null}

			{campground.map((camp, i) => {
				return (
					<div
						key={camp.id}
						onMouseOver={() => setSubActivePoint(camp)}
						onMouseOut={() => setActivePoint(null)}>
						{open ? (
							<ParkDataBrief
								name={camp.name}
								description={camp.description}
								images={camp.images}
							/>
						) : null}
					</div>
				)
			})}
		</>
	)
}

export default AccordionItems

export const AccordionSection = (props) => {
	return <ListContainer>{props.children}</ListContainer>
}
