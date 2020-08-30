import React, { useState } from "react";
import { TopNavbarMiddleContent } from "../../components";
import { displayRouteMenu, routes } from "../../routes";
import { Route } from "react-router-dom";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { firebase } from "../../providers";
import { Link } from "react-router-dom";

const useContentJSX = (props) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    displayName: "",
    phoneNumber: "",
  });
  const { email, password, displayName, phoneNumber } = inputs;
  const handleChange = (event) => {
    const { id, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [id]: value }));
  };

  const [file, setFile] = useState();
  const handleFile = (event) => setFile(event.target.files[0]);

  const [validated, setValidated] = useState(false);
  const [res, setRes] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);
  const handleSubmit = (event) => {
    setLoading(true);

    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      if (props.match.params.request === "employee") {
        const createUser = firebase
          .app()
          .functions("asia-southeast2")
          .httpsCallable("createUser");

        createUser({
          email: email,
          password: password,
          displayName: displayName,
        })
          .then(({ data: user }) => {
            firebase
              .firestore()
              .collection("users")
              .doc(user.uid)
              .set({
                type: 1,
                email: email,
                displayName: displayName,
                phoneNumber: phoneNumber,
              })
              .catch((error) => {
                setLoading(false);
                setRes(false);
                setErrorMessage(error.message);
              });

            firebase.storage().ref(`/users/${user.uid}/0.jpg`).put(file);
          })
          .then(setRes(true))
          .catch((error) => {
            setLoading(false);
            setRes(false);
            setErrorMessage(error.message);
          });
      } else if (props.match.params.request === "department") {
        firebase
          .firestore()
          .collection("departments")
          .add({
            email: email,
            name: displayName,
          })
          .then(setRes(true))
          .catch((error) => {
            setLoading(false);
            setRes(false);
            setErrorMessage(error.message);
          });
      }
    } else setLoading(false);

    event.preventDefault();
    event.stopPropagation();

    setValidated(true);
  };

  if (props.match.params.request === "employee") {
    return (
      <Container className="mt-3 w-auto">
        {errorMessage ? (
          <Alert className="mt-3" variant="warning">
            {errorMessage}
          </Alert>
        ) : null}
        <Row>
          <Col sm="6">
            <p className="font-weight-bold">Add Employee</p>
          </Col>
          <Col sm="6">
            <Button className="float-right" size="sm" variant="outline-primary">
              <Link to="/app/add/department">Department</Link>
            </Button>
          </Col>
        </Row>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="email">
              <Form.Label>Employee's Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter Email"
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="password">
              <Form.Label>Employee's Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="displayName">
              <Form.Label>Employee's Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Name"
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="phoneNumber">
              <Form.Label>Employee's Phone Number</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Phone Number"
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="cv">
              <Form.File id="cv">
                <Form.File.Label>Employee's Profile Picture</Form.File.Label>
                <Form.File.Input required onChange={handleFile} />
                <Form.Control.Feedback type="invalid">
                  Please provide employee's CV
                </Form.Control.Feedback>
              </Form.File>
            </Form.Group>
          </Form.Row>
          <Button
            type="submit"
            size="sm"
            disabled={loading}
            variant={res == null ? "primary" : res ? "success" : "warning"}
          >
            {res ? "Success" : "Submit"}
          </Button>
        </Form>
      </Container>
    );
  } else if (props.match.params.request === "department") {
    return (
      <Container className="mt-3 w-auto">
        {errorMessage ? (
          <Alert className="mt-3" variant="warning">
            {errorMessage}
          </Alert>
        ) : null}
        <Row>
          <Col sm="6">
            <p className="font-weight-bold">Add Department</p>
          </Col>
          <Col sm="6">
            <Button className="float-right" size="sm" variant="outline-primary">
              <Link to="/app/add/employee">Employee</Link>
            </Button>
          </Col>
        </Row>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="email">
              <Form.Label>Department's Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter Email"
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="displayName">
              <Form.Label>Department's Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Name"
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Button
            type="submit"
            size="sm"
            disabled={loading}
            variant={res == null ? "primary" : res ? "success" : "warning"}
          >
            {res ? "Success" : "Submit"}
          </Button>
        </Form>
      </Container>
    );
  } else return <Route component={() => <h1>Not Found!</h1>} />;
};

export const AddPage = (props) => {
  return (
    <TopNavbarMiddleContent
      routesJSX={displayRouteMenu(routes)}
      contentJSX={useContentJSX(props)}
    />
  );
};