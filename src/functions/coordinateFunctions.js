export const calcLatLongMidpoint = (arr) => {
	const maxMin = findMaxMin(arr)
	let midpoint = 0
	if (maxMin.max > 0) {
		midpoint = (maxMin.max + maxMin.min) / 2
	} else {
		midpoint = -(Math.abs(maxMin.max) + Math.abs(maxMin.min)) / 2
	}
	return midpoint
}

const findMaxMin = (y) => {
	let value = {}
	value.max = Math.max(...y)
	value.min = Math.min(...y)
	return value
}

export const buildArray = (data) => {
	let latLongArr = {}
	let latArray = []
	let longArray = []
	data.forEach((item) => {
		latArray.push(parseFloat(item.latitude))
		longArray.push(parseFloat(item.longitude))
	})
	latLongArr.latArray = latArray
	latLongArr.longArray = longArray
	return latLongArr
}
