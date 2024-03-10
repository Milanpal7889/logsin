import { Button, Card, Col, Container, Row } from "react-bootstrap";

const cards = [
  {
    index: "1",
    title: "High quality content",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptas consequuntur aperiam sed reprehenderit tempore? Blanditiis minima nihil eligendi ipsa nulla, cumque distinctio autem quis sint obcaecati. Nobis, consectetur nihil.",
  },
  {
    index: "2",
    title: "High quality content",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptas consequuntur aperiam sed reprehenderit tempore? Blanditiis minima nihil eligendi ipsa nulla, cumque distinctio autem quis sint obcaecati. Nobis, consectetur nihil.",
  },
  {
    index: "3",
    title: "High quality content",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptas consequuntur aperiam sed reprehenderit tempore? Blanditiis minima nihil eligendi ipsa nulla, cumque distinctio autem quis sint obcaecati. Nobis, consectetur nihil.",
  },
];

export const IntroSection = () => {
  return (
    <section className="intro-section">
      <Container fluid>
        <Row>
          <Col className="text-center custom-section">
            <h4 className="custom-section-heading fw-bold lead">
              Why Academics Works
            </h4>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {cards.map((card) => (
            <Col xs={12} lg={4} md={5} key={card.index} className="custom-card col-3">
              <Card className="mb-lg-4 mb-md-3 mb-sm-2">
                <Card.Body className="m-lg-4 m-md-3 m-sm-2">
                  <Card.Title className="m-4 custom-card-title" >{card.title}</Card.Title>
                  <Card.Text className="custom-card-text">{card.content}</Card.Text>
                  <Button varient="primary" className="btn-learn-more">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
