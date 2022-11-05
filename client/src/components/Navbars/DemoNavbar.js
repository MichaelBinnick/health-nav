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
  1: {label: 'Pediatric Waiting Room', value: "v2"},
  2: {label: 'Emergency', value: "er1"},
  3: {label: 'Pediatric Recovery Room', value:4}
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
