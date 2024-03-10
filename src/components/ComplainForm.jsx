import { Form } from "react-bootstrap";
import img from "../assets/images/bg_1.jpg";

export const ComplainForm = () => {
  return (
    <>
      <div>
      <div
          className="custom-image-comp mb-2"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            height: "150px",
            weight: "100%",
            backgroundPosition: "center",
          }}
        >
          <h1>Complain Form</h1>
          <p>File your complain here</p>
        </div>
        <Form className="custom-form-signup">
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Write your complain</Form.Label>
            <Form.Control as="textarea" rows="4" placeholder="Write your complain" />
          </Form.Group>
          <Form.Group controlId="formBasicButton" className="my-3">
            <button className="btn btn-primary px-5 py-1 text-white fs-4">Submit</button>
          </Form.Group>
        </Form>
      </div>
      ;
    </>
  );
};
