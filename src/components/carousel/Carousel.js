import { ImageWrapper, SliderImage } from "../../styles/dataStyle"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

const handleDragStart = (e) => e.preventDefault()

const Carousel = ({ ...props }) => {
	const { images } = props
	const items = images.map((image) => {
		return (
			<SliderImage
				src={image.url}
				onDragStart={handleDragStart}
				role='presentation'
			/>
		)
	})
	return (
		<ImageWrapper>
			<AliceCarousel
				animationType='fadeout'
				animationDuration={800}
				disableButtonsControls
				infinite
				mouseTracking
				items={items}
			/>
		</ImageWrapper>
	)
}

export default Carousel
