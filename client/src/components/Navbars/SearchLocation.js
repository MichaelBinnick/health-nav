import { React, useState } from 'react';
import { Row, Col, Button, Container } from 'reactstrap';
import Select from "react-select";

import locations from 'variables/list_locations';
import MapWrapper from 'components/MapWrapper';





function SearchLocation() {
  
  const [selected, setSelected] = useState([]);
  const locationId = selected

  const handleLocationChange = (event) => {
    setSelected(event.target.value);
  };
  console.log("LOCATION:",locationId)

  return (
    <Container md = "12">
      <Row className="row-cols-lg-auto g-3 align-items-center">
        <Col xs={{ order: 'first' }}>
          <Select className="description" placeholder="Destination" options={locations} onChange={handleLocationChange}></Select>
        </Col >
        <Col  >
          <Select className="description" placeholder="Current" options={locations} onChange={handleLocationChange}></Select>
        </Col>
        <Col xs={{ order: 'last' }} >
          <Button className="btn-round">Go</Button>
        </Col>
        {/* <MapWrapper locationId={locationId}/> */}
      </Row>
    </Container>

  );
}

export default SearchLocation;