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
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Select from "react-select";

// reactstrap components
import {
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

//import locations from "variables/list_locations";
import time from "variables/times";
import locations from "variables/list_locations";

function User() {
  const [formValue, setFormValue] = useState({
    name: "",
    time: "",
    location: "",
    reason: "",
    alergies: "",
    conditions: "",
    medications: "",

  });

  //const location = locations.map(opt => ({ label: opt, value: opt }));

  //Time dropdown select
  const hour = time.map(opt => ({ label: opt, value: opt }));

  //Location dropdown select
  const location = locations.map(opt => ({ label: opt, value: opt }));

  // const [locations, setLocations] = useState([]);
  // console.log("LOCATION::", locations)
  // const location = locations.map(opt => ({ label: opt, value: opt }))
  // useEffect(() => {
  //   // get data from database
  //   axios.get('http://localhost:8080/locations').then(res => {
  //     console.log(res.data.locations);
  //     setLocations(res.data.locations);
  //   });
  // }, []);




  //POST user data to database
  let handleSubmit = async () => {
    try {
      // make axios post request
      const response = await axios({
        method: "POST",
        url: "http://localhost:8080/checkin",
        data: formValue,
      });

      if (response.status === 200) {
        formValue.message("User created successfully");
      } else {
        formValue.message("Some error occured");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };


  //conditional COVID form
  const [showForm, setShowForm] = useState(null);
  const load = () => setShowForm(showForm => !showForm);




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
                        <Select options={hour}></Select>
                        {/* <Input
                          type="text"
                          value={formValue.time}
                          onChange={handleChange}
                          name="time"
                        /> */}
                      </FormGroup>
                    </Col>
                    <Col md="5">
                      <FormGroup>
                        <label>Appointment Location</label>
                        <Select options={location}></Select>
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
                          name="reason"
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
                          name="alergies"
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
                          name="conditions"
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
                          name="medications"
                        />

                        <button className="button-container btn-neutral btn-round" onClick={load}>COVID</button>
                        {showForm && <CovidForm />}

                      </FormGroup>
                      <button className="button-container btn-neutral btn-round" type="submit">Check In</button>
                    </Col>
                  </Row>

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

                {/* <CovidForm /> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default User;
