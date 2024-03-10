import { Container, Nav, Navbar } from "react-bootstrap";
import img from "../assets/images/bg_1.jpg";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ImageComp = ({ page, desc, link }) => {
  return (
    <>
      <div className="image-comp-container">
        <div
          className="custom-image-comp"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            height: "150px",
            weight: "100%",
            backgroundPosition: "center",
          }}
        >
          <h1>{page}</h1>
          <p>{desc}</p>
        </div>
        <Navbar
          expand="md"
          bg="light"
          data-bs-theme="light"
          className="custom-navbar"
        >
            <Container>
                <Nav className="custom-image-comp-nav d-flex flex-row">
                    <Nav.Link href="#home" as={"a"}>Home</Nav.Link>
                    <Nav.Link disabled><FontAwesomeIcon icon="fa-solid fa-chevron-right" /></Nav.Link>
                    <Nav.Link href={link} as={"a"}>{page}</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
      </div>
    </>
  );
};

ImageComp.propTypes = {
  page: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
