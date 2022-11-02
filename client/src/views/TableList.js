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




function RegularTables() {

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // get data from database
    axios.get('http://localhost:8080/locations').then(res => {
      console.log(res.data.locations);
      setLocations(res.data.locations);
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
                <CardTitle className="text-primary" tag="h4">Locations</CardTitle>
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
                    {locations.map((location, key) => {
                      return (
                    <tr key={key}>
                     <td>{location.name.charAt(0).toUpperCase() + location.name.slice(1)}</td>
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
