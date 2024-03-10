import { ImageComp } from "../components/ImageComp";

import { Form } from "react-bootstrap";

export const Signup = () => {
  return (
    <>
      <div>
        <ImageComp link="#signup" page="Sign Up" desc="Create an account with us" />
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
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
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
