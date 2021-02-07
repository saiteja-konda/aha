import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const MainCarouse = () => {
  return (
    <Carousel
    //   className="presentation-mode"
      infiniteLoop
      centerMode
      showThumbs={false}
      showStatus={false}
    >
      <div>
        <img src="/Aha/Main Carousel/ColorP.jpg" />
      </div>
      <div>
        <img src="/Aha/Main Carousel/Khadhi.jpg" />
      </div>
      <div>
        <img src="/Aha/Main Carousel/Krack.jpg" />
      </div>
      <div>
        <img src="/Aha/Main Carousel/Sam Jam.jpg" />
      </div>
      <div>
        <img src="/Aha/Main Carousel/Super Over.jpg" />
      </div>
      <div>
        <img src="/Aha/Main Carousel/Mail.jpg" />
      </div>
    </Carousel>
  );
};

export default MainCarouse;
