import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Subnavbar = () => {
  return (
    <>
      <Navbar expand="md" className="custom-subnavbar">
        <Container as={"div"}>
          <Nav className="text-primary col-9" as={"ul"}>
            <Nav.Link as={"a"}>
              <FontAwesomeIcon
                icon="fa-solid fa-question"
              />
              Have a question?
            </Nav.Link>
            <Nav.Link as={"a"}>
              <FontAwesomeIcon
                icon="fa-solid fa-phone"
              />
              +91 80 80 807 070
            </Nav.Link>
            <Nav.Link as={"a"}>
              <FontAwesomeIcon
                icon="fa-solid fa-envelope"
              />
              info@mydomain.com
            </Nav.Link>
          </Nav>
          <Nav className="show-md" as={"ul"}>
            <NavLink to={"/login"} >
              <FontAwesomeIcon
                icon="fa-solid fa-unlock"
              />
              Login
            </NavLink>
            <NavLink
              className="btn-reg px-3"
              to={"/signup"}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-user"
              />
              Register
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
