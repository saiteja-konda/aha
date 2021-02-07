import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const ActionSlider = ({ data }) => {
  return (
    <Carousel className="mt-2 ml-3" responsive={responsive}>
      {data.map((movie) => (
        <div>
          <div>
            <img src={movie.src} />
          </div>
          <div>
            <p style={{ color: "#fff", fontSize: "13px" }}>{movie.title}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ActionSlider;
