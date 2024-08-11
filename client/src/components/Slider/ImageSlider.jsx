import { useEffect, useState } from "react"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import { useSliderContext } from "../../context/SliderContext";

export const ImageSlider = ({ Images }) => {

    const [imageIndex, setImageIndex] = useState(0);
    const { setIsModalOpen } = useSliderContext();

    useEffect(() => {
        const timer = setTimeout(() => {
            showNextImage()
        }, 5000);

        return () => {
            clearTimeout(timer)
        }
    }, [imageIndex])

    function showNextImage() {
        setImageIndex(index => {
            if (index === Images.length - 1) return 0
            return index + 1
        })
    }

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return Images.length - 1
            return index - 1
        })
    }

    return (
        <>
            <section
                className="relative w-full h-full"
            >
                <div className="flex w-full h-full overflow-hidden">
                    {Images.map(({ url, alt }, index) => (
                        <img
                            key={url}
                            src={url}
                            alt={alt}
                            aria-hidden={imageIndex !== index}
                            className="object-cover w-full h-full flex-shrink-0 flex-grow-0 transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(${-100 * imageIndex}%)` }}
                        />
                    ))}
                </div>
                <button
                    onClick={showPrevImage}
                    className="absolute top-0 bottom-0 left-0 p-4 cursor-pointer transition-colors duration-100 ease-in-out hover:bg-black/20 focus-visible:bg-black/20"
                    aria-label="View Previous Image"
                >
                    <ArrowBigLeft aria-hidden className="w-8 h-8 stroke-white" />
                </button>
                <button
                    onClick={showNextImage}
                    className="absolute top-0 bottom-0 right-0 p-4 cursor-pointer transition-colors duration-100 ease-in-out hover:bg-black/20 focus-visible:bg-black/20"
                    aria-label="View Next Image"
                >
                    <ArrowBigRight aria-hidden className="w-8 h-8 stroke-white" />
                </button>
                <button className="absolute bottom-2 right-16 outline-0 hover:shadow-md hover:scale-105 transition-all ease-out hover:shadow-black border-none rounded-full py-1 bg-black text-white px-6 text-center"
                    onClick={() => setIsModalOpen(true)}
                >
                    Book Appointment
                </button>
                <div className="absolute gap-1 bottom-2 left-1/2 transform -translate-x-1/2 hidden md:flex">
                    {Images.map((_, index) => (
                        <button
                            key={index}
                            className="w-4 h-4 cursor-pointer transition-transform duration-100 ease-in-out hover:scale-110 focus-visible:scale-110"
                            onClick={() => setImageIndex(index)}
                        >
                            {index === imageIndex ? (
                                <CircleDot aria-hidden className="w-full h-full stroke-white fill-black" />
                            ) : (
                                <Circle aria-hidden className="w-full h-full stroke-white fill-black" />
                            )}
                        </button>
                    ))}
                </div>
            </section>
        </>
    )
}