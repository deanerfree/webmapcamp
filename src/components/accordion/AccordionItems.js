import React, { useState, useContext } from "react"
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
		parkDataArray,
		goToLocation,
		setSelectedPark,
	} = useContext(ParkCampContext)
	const { campground, images, name, index, key, ...rest } = props
	const [open, setOpen] = useState(false)

	const toggleDisplay = () => {
		setOpen(!open)
		goToLocation(
			parseFloat(parkDataArray[activePoint].latitude),
			parseFloat(parkDataArray[activePoint].longitude)
		)
		console.log(parkDataArray[activePoint])
		setSelectedPark(parkDataArray[activePoint])
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
			{campground.map((camp) => {
				return (
					<ListItemStyle open={open} key={camp.id}>
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
