import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/images/logo.jpg";

const NavLinks = [
  {
    name: "Home",
    link: "#home",
    order: "order-0",
  },
  {
    name: "Courses",
    link: "#courses",
    order: "order-2",
  },
  {
    name: "Admissions",
    link: "#admissions",
    order: "order-3",
  },
  {
    name: "Faq",
    link: "#faq",
    order: "order-4",
  },
  {
    name: "Contact Us",
    link: "#contact",
    order: "order-5",
  },
];

const NavSocialLinks = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/",
    icon: faFacebookF,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/",
    icon: faTwitter,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/",
    icon: faLinkedinIn,
  },
];

export const NavbarBs = () => {
  return (
    <>
      <Navbar
        expand="md"
        bg="light"
        data-bs-theme="light"
        className="custom-navbar sticky-top shadow"
      >
        <Container as={"div"}>
          <Navbar.Brand href="#home" as={"a"}>
            <Image src={logo} alt="logo" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" as={"div"}>
            <Nav className="col-10 text-center d-flex" as={"ul"}>
              {NavLinks.map((link) => (
                <Nav.Link
                  href={link.link}
                  as={"a"}
                  className={link.order}
                  key={link.name}
                >
                  {link.name} 
                </Nav.Link>
              ))}
              <NavDropdown
                title="About Us"
                id="basic-nav-dropdown"
                className="order-1 text-center"
                as={"div"}
              >
                <NavDropdown.Item
                  className="nav-dropdown-item"
                  href="#action/3.1"
                  as={"a"}
                >
                  Our Teachers
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="nav-dropdown-item"
                  href="#action/3.3"
                  as={"a"}
                >
                  Our School
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="col-2 btn-social" as={"ul"}>
              {NavSocialLinks.map((link) => (
                <Nav.Link href={link.link} as={"a"} key={link.name}>
                  <FontAwesomeIcon icon={link.icon} />
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
