import { React, useState } from 'react';
import { Row, Col, Button, Container } from 'reactstrap';
import Select from "react-select";

import locations from 'variables/list_locations';
import MapWrapper from 'components/MapWrapper';



function SearchLocation() {
  const getInitalState = () => {
    const selected = "";
    return selected;
  };
  const [selected, setSelected] = useState(getInitalState);

  const handleLocationChange = (event) => {
    setSelected(event.label);
  };
  const dropdownName = selected;

  return (
    <Container md="12">
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
        <MapWrapper dropdownName={dropdownName} />
      </Row>
    </Container>

  );
}

export default SearchLocation;