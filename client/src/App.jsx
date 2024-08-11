// import { CardSlider } from "./components/CardSlider/CardSlider";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Slider } from "./components/Slider/Slider";
import { SliderProvider } from "./context/SliderContext";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
      <SliderProvider>
        <Header />

        <Slider />
        {/* <CardSlider /> */}
        <Footer />
        <Toaster position="bottom-right" />
      </SliderProvider>
    </>
  );
}

export default App;
