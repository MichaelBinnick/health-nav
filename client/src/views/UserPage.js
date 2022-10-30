/*!

=========================================================
* Now UI Dashboard React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function User() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Patient Check In</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  {/* <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Company (disabled)</label>
                        <Input
                          defaultValue="Creative Code Inc."
                          disabled
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="5">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          defaultValue="michael23"
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input placeholder="Email" type="email" />
                      </FormGroup>
                    </Col>
                  </Row> */}
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          type="text"
                          name="name"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          type="text"
                          name="name"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Alergies</label>
                        <Input
                          type="text"
                          name="name"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Alergies</label>
                        <Input
                          type="text"
                          name="name"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Medications</label>
                        <Input
                          type="text"
                          name="name"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Medical Conditions</label>
                        <Input
                          type="text"
                          name="name"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          cols="80"
                          defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                            that two seat Lambo."
                          placeholder="Here can be your description"
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                  </Row> */}
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="image"></div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    
                    <h5 className="title">COVID SCREENING</h5>
                  </a>
                  <p className="description">CHECKBOX FORM</p>
                </div>
                <p className="description text-center">
                  "Lamborghini Mercy <br />
                  Your chick she so thirsty <br />
                  I'm in that two seat Lambo"
                </p>
              </CardBody>
              <hr />
              <div className="button-container">
                {/* <Button
                  className="btn-neutral btn-icon btn-round"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-facebook-f" />
                </Button>
                <Button
                  className="btn-neutral btn-icon btn-round"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-neutral btn-icon btn-round"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-google-plus-g" />
                </Button> */}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default User;
