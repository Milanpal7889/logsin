import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import person1 from "../assets/images/person_1.jpg";
import person2 from "../assets/images/person_2.jpg";
import person3 from "../assets/images/person_3.jpg";
import person4 from "../assets/images/person_4.jpg";

const slides = [
  {
    img: person1,
    personname: "John Doe",
    designation: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur.",
    key: 1,
  },
  {
    img: person2,
    personname: "John Doe",
    designation: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiLorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur.sicing elit. Porro, tenetur.",
    key: 2,
  },
  {
    img: person3,
    personname: "John Doe",
    designation: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur.",
    key: 3,
  },
  {
    img: person4,
    personname: "John Doe",
    designation: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur.",
    key: 4,
  },
];

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 768, // Breakpoint for medium screens
        settings: {
          slidesToShow: 1, // Number of slides to show on medium screens
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
    <Container className="testimonials-section">
      <h4 className="custom-testimonials-heading fw-bold lead">Testimonials</h4>
      <Slider {...settings}>
        {
          slides.map((slide) => (
            <Container className="d-flex custom-testimonial-slides" key={slide.key}>
                <Row lg={6} className="d-block">
                  <Col className="d-flex w-100">
                    <Image
                      src={slide.img}
                      style={{ width: "60px", height: "60px" }}
                      className="me-3"
                      roundedCircle
                    />
                    <h4>
                      {slide.personname}
                      <h6 className="text-secondary">{slide.designation}</h6>
                    </h4>
                  </Col>
                  <Col className="w-100 text-secondary">
                    <p>{slide.description}</p>
                  </Col>
                </Row>
            </Container>
          ))
        }
      </Slider>
      <h1 className="blank-dots"> </h1>
    </Container>
    </>
  );
};
