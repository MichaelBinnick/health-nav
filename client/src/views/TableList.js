import React from "react";
import axios from "axios";
import { useEffect, useState } from 'react';

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { Link } from "react-router-dom";


function RegularTables() {

  const [locationsDB, setLocationsDB] = useState([]);

  useEffect(() => {
    // make req to backend to get data from database
    axios.get('http://localhost:8080/locations').then(res => {
      console.log('res.data.locations:', res.data.locations);
      setLocationsDB(res.data.locations);
    });
  }, []);


  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle className="text-primary" tag="h4">Hospital Departments</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive className="table" striped>
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Department</th>
                      <th>Open</th>
                      <th>Close</th>
                    </tr>
                  </thead>
                  <tbody>
                    {locationsDB.map((location, key) => {
                      const locationRoute = "/admin/maps/" + location.name;
                      return (
                    <tr key={key}>
                      <td>
                      <Link to={locationRoute}>{location.name.charAt(0).toUpperCase() + location.name.slice(1)}</Link>
                      </td>
                     <td>{location.department_name.charAt(0).toUpperCase() + location.department_name.slice(1)}</td>
                     <td>{location.hours_open}</td>
                     <td>{location.hours_close}</td>
                    </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </div>
    </>
  );
}

export default RegularTables;
