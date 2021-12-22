import { createContext, useState, useEffect, useRef } from "react"
import axios from "axios"
import { FlyToInterpolator } from "react-map-gl"
export const ParkCampContext = createContext()

const ParkCampContextProvider = (props) => {
	const [campgroundArray, setCampgroundArray] = useState([])
	const [parkDataArray, setParkDataArray] = useState([])
	// const [tempData, setTempData] = useState([])
	const [activePoint, setActivePoint] = useState(null)
	const [subActivePoint, setSubActivePoint] = useState(null)
	const [lng, setLng] = useState(-119.77431935000001)
	const [lat, setLat] = useState(37.83667174)
	const [zoom, setZoom] = useState(4)
	const [selectedPark, setSelectedPark] = useState(null)
	const [open, setOpen] = useState(false)

	const [viewport, setViewPort] = useState({
		latitude: lat,
		longitude: lng,
		zoom: zoom,
	})
	const openWeatherKey = process.env.REACT_APP_OPENWEATHER_APIKEY
	const mapRef = useRef()

	const getTempData = async (lat, lng) => {
		try {
			const data = await axios(
				`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${openWeatherKey}`
			)

			if (data.status === 200) {
				console.log(data)
			}
			return data
		} catch (error) {
			console.error(error.message)
		}
	}

	const getData = async () => {
		try {
			const data = await axios("/api/v1/parkLocations")
			const campgroundData = await axios("/api/v1/campgrounds")
			if (data.status === 200) {
				setParkDataArray(data.data.filteredData)
			}
			if (campgroundData.status === 200) {
				setCampgroundArray(campgroundData.data.initialCampsiteData)
			}
		} catch (error) {
			console.error("This is the error:", error.message)
		}
	}

	const goToLocation = (lat, lng, zoom) => {
		setViewPort({
			...viewport,
			longitude: lng,
			latitude: lat,
			zoom: zoom,
			transitionDuration: "auto",
			transitionInterpolator: new FlyToInterpolator({ speed: 1.2 }),
			// transitionEasing: d3.easeCubic,
		})
	}

	useEffect(() => {
		getData()
	}, [])

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
		<ParkCampContext.Provider
			value={{
				campgroundArray,
				parkDataArray,
				activePoint,
				mapRef,
				setActivePoint,
				goToLocation,
				zoom,
				setZoom,
				lng,
				setLng,
				lat,
				setLat,
				viewport,
				setViewPort,
				getTempData,
				selectedPark,
				setSelectedPark,
				subActivePoint,
				setSubActivePoint,
				toggleDisplay,
			}}>
			{props.children}
		</ParkCampContext.Provider>
	)
}

export default ParkCampContextProvider
