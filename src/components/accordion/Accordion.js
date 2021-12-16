import AccordionItems, { AccordionSection } from "./AccordionItems"

const Accordion = ({ parkDataArray }) => {
	return (
		<AccordionSection>
			{parkDataArray.map((park, index) => {
				return (
					<AccordionItems
						campground={park.campground}
						description={park.description}
						index={index}
						key={park.id}
						name={park.name}
						images={park.images}
						latitude={parseFloat(park.latitude)}
						longitude={parseFloat(park.longitude)}
					/>
				)
			})}
		</AccordionSection>
	)
}

export default Accordion
