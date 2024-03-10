import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import logo from "../assets/images/logo.png";

const footer = [
  {
    ourcampus: [
      {
        title: "Academic",
        link: "#academic",
      },
      {
        title: "News",
        link: "#news",
      },
      {
        title: "Our Interns",
        link: "#ourinterns",
      },
      {
        title: "Our Leadership",
        link: "#ourleadership",
      },
      {
        title: "Careers",
        link: "#careers",
      },
      {
        title: "Human Resources",
        link: "#humanresources",
      },
    ],
  },
  {
    Ourcourses: [
      {
        title: "Math",
        link: "#Science&Engg",
      },
      {
        title: "Arts & Humanities",
        link: "#arts&humanities",
      },
      {
        title: "Economics & Finance",
        link: "#economics&finance",
      },
      {
        title: "Business Administration",
        link: "#businessadministration",
      },
      {
        title: "Computer Science",
        link: "#computerscience",
      },
    ],
  },
  {
    Contact: [
      {
        title: "Help Center",
        link: "#helpcenter",
      },
      {
        title: "Partner",
        link: "#partner",
      },
      {
        title: "Rider",
        link: "#rider",
      },
    ],
  },
];

export const Footer = () => {
  return (
    <>
      <footer className="bg-dark">
        <Container className="p-5">
          <Row className="custom-footer-container text-white g-4">
            <Col sm={3}>
              <Image src={logo} />
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas fuga corporis doloribus laboriosam necessitatibus quis
                temporibus, incidunt, at, quasi explicabo nesciunt ullam
                accusamus quae. Quis porro accusantium hic qui delectus?
              </p>
              <Nav.Link className="custom-footer-link">Learn More</Nav.Link>
            </Col>
            <Col sm={3}>
              <h4 className="custom-footer-list-header">Our Campus</h4>
              <Nav className="custom-footer-link-list" as={"ul"}>
                {footer[0]?.ourcampus?.map((link) => (
                  <Nav.Link
                    href={link.link}
                    key={link.title}
                    className="custom-footer-link"
                    as={"a"}
                  >
                    {link.title}
                  </Nav.Link>
                ))}
              </Nav>
            </Col>
            <Col sm={3}>
              <h4 className="custom-footer-list-header">Our Courses</h4>
              <Nav className="custom-footer-link-list" as={"ul"}>
                {footer[1]?.Ourcourses?.map((link) => (
                  <Nav.Link
                    href={link.link}
                    key={link.title}
                    className="custom-footer-link"
                    as={"a"}
                  >
                    {link.title}
                  </Nav.Link>
                ))}
              </Nav>
            </Col>
            <Col sm={3}>
              <h4 className="custom-footer-list-header">Contact</h4>
              <Nav className="custom-footer-link-list" as={"ul"}>
                {footer[2]?.Contact?.map((link) => (
                  <Nav.Link
                    href={link.link}
                    key={link.title}
                    className="custom-footer-link"
                    as={"a"}
                  >
                    {link.title}
                  </Nav.Link>
                ))}
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
