import { ImageComp } from "../components/ImageComp";

import { Form } from "react-bootstrap";

export const Login = () => {
  return (
    <>
      <div>
        <ImageComp link="#login" page="Login" desc="LogIn to your account" />
        <Form className="custom-form-signup">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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
