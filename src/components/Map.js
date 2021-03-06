import React, { useEffect, useContext, useCallback } from "react"
import ReactMapGL, { Marker } from "react-map-gl"
import { Tent3 as Tent, Tent4 } from "../svg"
import { MapContainer } from "../styles/mapCompStyle"
import Controls from "./controls/Controls"

import {
	buildArray,
	calcLatLongMidpoint,
} from "../functions/coordinateFunctions"
import { ParkCampContext } from "../context/parkCampContext"

const Map = ({ parkDataArray }) => {
	const {
		mapRef,
		activePoint,
		subActivePoint,
		viewport,
		setViewPort,
		setLng,
		setLat,
		goToLocation,
	} = useContext(ParkCampContext)

	const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env
	const mapboxApiKey = REACT_APP_MAPBOX_ACCESS_TOKEN

	const findMidpoint = useCallback(
		() => (data) => {
			let latLongArray = buildArray(data)
			let longMidpoint = calcLatLongMidpoint(latLongArray.longArray)
			let latMidpoint = calcLatLongMidpoint(latLongArray.latArray)
			// console.log(longMidpoint, latMidpoint)
			setLng(longMidpoint)
			setLat(latMidpoint)
		},
		[parkDataArray]
	)

	useEffect(() => {
		if (parkDataArray) {
			findMidpoint(parkDataArray)
		}
	}, [])

	const mapStyle = {
		height: "90vh",
		width: "70vw",
	}

	return (
		<MapContainer>
			<ReactMapGL
				ref={mapRef}
				mapboxApiAccessToken={mapboxApiKey}
				mapStyle='mapbox://styles/mapbox/streets-v11'
				{...viewport}
				{...mapStyle}
				onViewportChange={(viewport) => setViewPort(viewport)}>
				{viewport.zoom < 8
					? parkDataArray.map((park) => {
							return (
								<Marker
									key={park.id}
									latitude={parseFloat(park.latitude)}
									longitude={parseFloat(park.longitude)}>
									<button
										style={{
											backgroundColor: "transparent",
											backgroundRepeat: "no-repeat",
											border: "none",
											cursor: "pointer",
											overflow: "hidden",
											outline: "none",
										}}
										onClick={() =>
											goToLocation(
												parseFloat(park.latitude),
												parseFloat(park.longitude),
												8.1
											)
										}>
										<Tent />
										{park.campground.length}
									</button>
								</Marker>
							)
					  })
					: parkDataArray.map((item) => {
							return item.campground.map((campground) => {
								return (
									<Marker
										key={campground.id}
										latitude={parseFloat(campground.latitude)}
										longitude={parseFloat(campground.longitude)}>
										<Tent />
									</Marker>
								)
							})
					  })}
				{activePoint !== null ? (
					<Marker
						latitude={parseFloat(parkDataArray[activePoint].latitude)}
						longitude={parseFloat(parkDataArray[activePoint].longitude)}>
						<Tent4 />
					</Marker>
				) : subActivePoint !== null ? (
					<Marker
						latitude={parseFloat(subActivePoint.latitude)}
						longitude={parseFloat(subActivePoint.longitude)}>
						<Tent4 />
					</Marker>
				) : null}
			</ReactMapGL>
			<Controls />
		</MapContainer>
	)
}

export default Map
