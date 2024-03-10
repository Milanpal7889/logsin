import { Carousel } from "react-bootstrap";
import hero from "../assets/images/hero_1.jpg";

const slides = [
  {
    img: hero,
    title: "first slide",
    key: 1,
  },
  {
    img: hero,
    title: "second slide",
    key: 2,
  },
  {
    img: hero,
    title: "third slide",
    key: 3,
  },
];

export const Slider = () => {
  return (
    <>
        <Carousel className="custom-carousel"  data-bs-theme="light" >
          {slides.map((slide) => (
            <Carousel.Item key={slide.key} style={{ backgroundImage: `url(${slide.img})` }} as={"div"}>
              <h1>{slide.title}</h1>
            </Carousel.Item>
          ))}
        </Carousel>
    </>
  );
};
