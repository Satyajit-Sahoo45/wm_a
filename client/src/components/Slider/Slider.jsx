import img1 from "../../assets/slider-images/img1.jpg"
import img2 from "../../assets/slider-images/img2.jpg"
import img3 from "../../assets/slider-images/img3.jpg"
import { Modal } from "../Modal/Modal"
import { ImageSlider } from "./ImageSlider"

const Images = [
    { url: img1, alt: "Car One" },
    { url: img2, alt: "Car Two" },
    { url: img3, alt: "Car Three" },
]

export const Slider = () => {
    return (
        <div className="w-full mx-auto">
            <ImageSlider Images={Images} />

            {
                true && <Modal />
            }
        </div>

    )
}