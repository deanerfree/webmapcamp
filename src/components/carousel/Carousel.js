import { ImageWrapper, SliderImage } from "../../styles/dataStyle"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carousel = ({ ...props }) => {
	const { images } = props
	const settings = {
		dots: true,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		className: "slides",
		marginBottom: "20px",
	}

	return (
		<Slider {...settings}>
			{images.map((image) => {
				return (
					<ImageWrapper>
						<SliderImage src={image.url} loading='lazy' />{" "}
					</ImageWrapper>
				)
			})}
		</Slider>
	)
}

export default Carousel
