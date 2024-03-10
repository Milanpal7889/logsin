import { Col, Container, Nav, Row } from "react-bootstrap";

export const Aboutweb = () => {
  return (
    <section className="about-web p-3">
      <Container>
        <Row className="my-5">
          <Col lg={4} md={12} className="align-self-center text-center py-3">
            <h4 className="custom-section-heading fw-bold lead text-white">
              About Our Website
            </h4>
          </Col>
          <Col>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              mollitia blanditiis placeat dolorum ab libero soluta numquam modi
              aperiam neque voluptatibus aliquid corrupti, voluptas aspernatur
              consectetur molestiae commodi. Exercitationem, numquam!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              minima quibusdam omnis iusto aspernatur commodi officiis,
              asperiores reiciendis voluptas voluptatibus perspiciatis autem
              veniam ad sit quaerat laudantium iure, libero sunt. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Totam quia ipsam
              nostrum dolores illum fugiat doloribus, sit harum dolorum atque,
              error mollitia, recusandae autem debitis? Aut dolore praesentium
              cum atque?
            </p>
            <Nav>
              <Nav.Link className="custom-aboutweb-btn" as={"a"}>
                Read More
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
