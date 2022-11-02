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
// import { getAllDepartments } from "../server/db/queries/departments.js"

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


import axios from "axios";
import { useEffect, useState } from 'react';

function RegularTables() {

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // get data from database
    axios.get('http://localhost:8080/departments').then(res => {
      console.log(res.data.departments);
      setDepartments(res.data.departments);
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
                <CardTitle className="text-primary" tag="h4">Departments</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive className="table">
                  <tbody>
                    {departments.map((prop, key) => {
                      return (<tr key={key}>{prop.name.charAt(0).toUpperCase() + prop.name.slice(1)}</tr>);
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
