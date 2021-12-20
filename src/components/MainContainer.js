import { useContext } from "react"

import { MainContainer as MContainer } from "../styles"
import { ParkCampContext } from "../context/parkCampContext"
import Map from "./Map"
import Accordion from "./accordion/Accordion"
import DataDisplay from "./dataDisplay/DataDisplay"
import { Grid, Col, Row } from "../styles/dataStyle"

const MainContainer = () => {
	const { parkDataArray, campgroundArray } = useContext(ParkCampContext)
	// console.log(parkDataArray)
	return (
		<MContainer>
			{parkDataArray.length > 0 ? (
				<Grid>
					<Col size={1} height={45}>
						<Accordion
							parkDataArray={parkDataArray}
							campgroundArray={campgroundArray}
						/>
					</Col>
					<Col size={2}>
						<Row height={"90vh"}>
							<Map parkDataArray={parkDataArray} />
						</Row>
					</Col>
				</Grid>
			) : (
				<p>Loading...</p>
			)}
		</MContainer>
	)
}

export default MainContainer
