import React, { useEffect, useState, useContext } from "react"
import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl"
import { Tent3 as Tent, Tent4 } from "../svg"
import { MapContainer } from "../styles/mapCompStyle"

import {
	buildArray,
	calcLatLongMidpoint,
} from "../functions/coordinateFunctions"
import { ParkCampContext } from "../context/parkCampContext"

const Map = ({ parkDataArray }) => {
	const {
		mapRef,
		activePoint,
		viewport,
		setViewPort,
		setLng,
		setLat,
		goToLocation,
	} = useContext(ParkCampContext)

	const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env
	const mapboxApiKey = REACT_APP_MAPBOX_ACCESS_TOKEN

	const findMidpoint = (data) => {
		let latLongArray = buildArray(data)
		let longMidpoint = calcLatLongMidpoint(latLongArray.longArray)
		let latMidpoint = calcLatLongMidpoint(latLongArray.latArray)
		// console.log(longMidpoint, latMidpoint)
		setLng(longMidpoint)
		setLat(latMidpoint)
	}

	useEffect(() => {
		if (parkDataArray) {
			findMidpoint(parkDataArray)
		}
	}, [])

	const mapStyle = {
		height: "45vh",
		width: "100%",
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
												parseFloat(park.longitude)
											)
										}>
										<Tent />
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
				) : null}
			</ReactMapGL>
		</MapContainer>
	)
}

export default Map
