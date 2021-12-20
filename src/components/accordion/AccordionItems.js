import React, { useState, useContext, useRef } from "react"
import { ParkCampContext } from "../../context/parkCampContext"
import {
	ListItemStyle,
	ListContainer,
	ListStyle,
	Cheveron,
	Title,
} from "../../styles/accordionStyle"
import { CheveronDown } from "../../svg"

const AccordionItems = ({ ...props }) => {
	const {
		activePoint,
		setActivePoint,
		setSubActivePoint,
		parkDataArray,
		goToLocation,
		setSelectedPark,
	} = useContext(ParkCampContext)

	const { campground, images, name, index } = props
	const [open, setOpen] = useState(false)

	const toggleDisplay = () => {
		if (open === true) {
			setOpen(false)
		}
		setSelectedPark(parkDataArray[activePoint])
		goToLocation(
			parseFloat(parkDataArray[activePoint].latitude),
			parseFloat(parkDataArray[activePoint].longitude)
		)
		setOpen(!open)
	}

	return (
		<>
			<ListStyle
				animated
				images={images[0].url}
				open={open}
				onClick={toggleDisplay}
				onMouseOver={() => setActivePoint(index)}
				onMouseOut={() => setActivePoint(null)}>
				<Title>{name}</Title>
				<Cheveron open={open}>
					<CheveronDown />
				</Cheveron>
			</ListStyle>
			{campground.map((camp, i) => {
				return (
					<ListItemStyle
						open={open}
						key={camp.id}
						onMouseOver={() => setSubActivePoint(camp)}
						onMouseOut={() => setSubActivePoint(null)}>
						{camp.name}
					</ListItemStyle>
				)
			})}
		</>
	)
}

export default AccordionItems

export const AccordionSection = (props) => {
	return <ListContainer>{props.children}</ListContainer>
}
