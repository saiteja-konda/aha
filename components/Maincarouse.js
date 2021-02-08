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
      dynamicHeight={true}
    >
      <div>
        <img
          src="/Aha/Main Carousel/ColorP.jpg"
          style={{
            objectPosition: "center",
            objectFit: "cover",
            margin: "0px",
          }}
        />
      </div>
      <div>
        <img
          src="/Aha/Main Carousel/Khadhi.jpg"
          style={{
            objectPosition: "center",
            objectFit: "cover",
            margin: "0px",
          }}
        />
      </div>
      <div>
        <img
          src="/Aha/Main Carousel/Krack.jpg"
          style={{
            objectPosition: "center",
            objectFit: "cover",
            margin: "0px",
          }}
        />
      </div>
      <div>
        <img
          src="/Aha/Main Carousel/Sam Jam.jpg"
          style={{
            objectPosition: "center",
            objectFit: "cover",
            margin: "0px",
          }}
        />
      </div>
      <div>
        <img
          src="/Aha/Main Carousel/Super Over.jpg"
          style={{
            objectPosition: "center",
            objectFit: "cover",
            margin: "0px",
          }}
        />
      </div>
      <div>
        <img
          src="/Aha/Main Carousel/Mail.jpg"
          style={{
            objectPosition: "center",
            objectFit: "cover",
            margin: "0px",
          }}
        />
      </div>
    </Carousel>
  );
};

export default MainCarouse;
