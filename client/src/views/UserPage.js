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
import { React, useState } from "react";
import axios from 'axios';

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
import CovidForm from "components/CovidForm/CovidForm";


function User() {
  // const [name, setName] = useState("");
  // const [time, setTime] = useState("");
  // const [location, setLocation]= useState("");
  // const [reason, setReason] = useState("");
  // const [alergies, setAlergies] = useState("");
  // const [conditions, setConditions] = useState("");
  // const [medications, setMedications] = useState("");
  // const [message, setMessage] = useState("");

  const [formValue, setformValue] = React.useState({
    name: "",
    time: "",
    location: "",
    reason: "",
    alergies: "",
    conditions: "",
    medications: "",
    message: ""
  });
  console.log("FORM: ",formValue)


  let handleSubmit = async () => {
    const checkInData = new FormData();
    checkInData.append("name", formValue.name)
    checkInData.append("time", formValue.time)
    checkInData.append("location", formValue.location)
    checkInData.append("reason", formValue.reason)
    checkInData.append("alergies", formValue.alergies)
    checkInData.append("conditions", formValue.conditions)
    checkInData.append("medications", formValue.medications)
    checkInData.append("message", formValue.message)
    
    try {
      // make axios post request
      const response = await axios({
        method: "POST",
        url: "/checkin",
        data: checkInData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200){
        formValue.message("User created successfully");
      } else {
        formValue.message("Some error occured");
      }
    } catch(error) {
      console.log(error)
    }
  }
    const handleChange = (e) => {
      setformValue({
        ...formValue, [e.target.name]:e.target.value
      });
    };

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <h5 className="title">Patient Check In</h5>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md="5">
                      <FormGroup>
                        <label>Appointment Time</label>
                        <Input
                          type="text"
                          value={formValue.time}
                          onChange={handleChange}
                          name="name"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="5">
                      <FormGroup>
                        <label>Appointment Location</label>
                        <Input
                          type="text"
                          value={formValue.location}
                          onChange={handleChange}
                          name="name"
                        />
                      </FormGroup>
                    </Col>

                  </Row>

                  <Row>
                    <Col className="pr-1" md="12">
                      <FormGroup>
                        <label>Patient Name</label>
                        <Input
                          type="text"
                          value={formValue.name}
                          onChange={handleChange}
                          name="name"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Reason of consultation</label>
                        <Input
                          type="text"
                          value={formValue.reason}
                          onChange={handleChange}
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
                          value={formValue.alergies}
                          onChange={handleChange}
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
                          value={formValue.conditions}
                          onChange={handleChange}
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
                          value={formValue.medications}
                          onChange={handleChange}
                          name="name"
                        />
                      </FormGroup>
                      <button className="button-container btn-neutral btn-round" type="submit">Check In</button>
                    </Col>
                  </Row>
                  <div className="message">{formValue.message ? <p>{formValue.message}</p> : null}</div>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card className="card-user">
              <div className="image"></div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <h5 className="title">COVID SCREENING</h5>
                  </a>
                </div>
                <CovidForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default User;
