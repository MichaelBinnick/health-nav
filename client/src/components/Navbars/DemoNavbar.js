import { React, useState } from 'react';
import { Row, Col, Button, Container } from 'reactstrap';
import Select from "react-select";

import locations from 'variables/list_locations';
import MapWrapper from 'components/MapWrapper';

import { 
  graph, 
  dijkNodes, 
  dijkstra,
  dijkCoords,
  routeStr,
  routeCoords
} from 'helpers/dijkstra';

const navLocations1 = {
  //Entrances
  1: { label: "Entrance 1", value: "e1"},
  2: { label: "Entrance 2", value: "e2"},
  3: { label: "Entrance 3", value: "e3"},
  4: { label: "Entrance 4", value: "e4"},
  5: { label: "Entrance 5", value: "e5"},
  6: { label: "Entrance 6", value: "e6"},
  //Health-Services
  7: { label: "Prep & Recovery (Pediatric)", value: "h1"},
  8: { label: "Prep & Recovery (Adult)", value: "h2"},
  9: { label: "Lab", value: "h3"},
  10: { label: "Imaging", value: "h4"},
  11: { label: "Surgery", value: "h5"},
  12: { label: "Inpatient", value: "h6"},
  //Visitor Services
  13: { label: "Admin", value: "v1"},
  14: { label: "Waiting (Pediatric)", value: "v2"},
  15: { label: "Waiting (Adult)", value: "v3"},
  // Emergency
  16: { label: "Emergency", value: "e1"},
  //Restrooms
  17: { label: "Restroom 1", value: "rr1"},
  18: { label: "Restroom 2", value: "rr2"},
  19: { label: "Restroom 3", value: "rr3"},
  20: { label: "Restroom 4", value: "rr4"},
  21: { label: "Restroom 5", value: "rr5"},
  //Hospital Staff
  22: { label: "Staff", value: "s1"},
  23: { label: "Utility", value: "s2"},
  24: { label: "Dietary", value: "s3"}
};

const navLocations2 = Object.values(navLocations1)



function SearchLocation() {
  
  // const getInitalState = () => {
  //   const selected = ""
  //   return selected;
  // }
  
  const getStart = () => {
    const startSelected = ""
    return startSelected;
  };

  const getEnd = () => {
    const endSelected = ""
    return endSelected;
  }
  
  
  // const [selected, setSelected] = useState(getInitalState);
  const [startSelected, setStartSelected] = useState(getStart);
  const [endSelected, setEndSelected] = useState(getEnd);
  
  
  
  // const handleLocationChange = (event) => {
  //   setSelected(event.label)
  // };

  const onChangeHandlerStart = (e) => {
    let newStart = setStartSelected(e.value);
    return newStart;
  }
  
  const onChangeHandlerEnd = (e) => {
    let newEnd = setEndSelected(e.value)
    return newEnd;
  }
 
  
  // const dropdownName = selected;

  const startDrop = startSelected;
  const endDrop = endSelected;

  const goHandler = () => {
    const go = dijkstra(graph, startDrop, endDrop)
    console.log(go)
  }

  return (
    <Container md = "12">
      <Row className="row-cols-lg-auto g-3 align-items-center">
        <Col xs={{ order: 'first' }}>
          <Select className="description" placeholder="Current" options={navLocations2} onChange={onChangeHandlerStart} value={startDrop.e}></Select>
        </Col >
        <Col  >
          <Select className="description" placeholder="Destination" options={navLocations2} onChange={onChangeHandlerEnd} value={endDrop.e} ></Select>
        </Col>
        <Col xs={{ order: 'last' }} >
          <Button className="btn-round" onClick={goHandler}>Go</Button>
        </Col>
        <MapWrapper /*dropdownName={dropdownName}*/ startDrop={startDrop} endDrop={endDrop} />
      </Row>
    </Container>

  );
}
export default SearchLocation;
