import { React, useState } from "react";
import { Row, Col, Button, Container } from "reactstrap";
import Select from "react-select";
import MapWrapper from "components/MapWrapper";

// dijk helpers
import {
  graph,
  dijkNodes,
  dijkstra,
  dijkCoords,
  routeStr,
  routeCoords,
} from "helpers/dijkstra";

// locations object must be formatted with label for the dropdown menu's options prop
// a value can be passed as props, so we can assign the state's value to it's graph node via the select component

const locations = {
  //Entrances
  1: { label: "Entrance 1", value: "e1" },
  2: { label: "Entrance 2", value: "e2" },
  3: { label: "Entrance 3", value: "e3" },
  4: { label: "Entrance 4", value: "e4" },
  5: { label: "Entrance 5", value: "e5" },
  6: { label: "Entrance 6", value: "e6" },
  //Health-Services
  7: { label: "Prep & Recovery (Pediatric)", value: "h1" },
  8: { label: "Prep & Recovery (Adult)", value: "h2" },
  9: { label: "Lab", value: "h3" },
  10: { label: "Imaging", value: "h4" },
  11: { label: "Surgery", value: "h5" },
  12: { label: "Inpatient", value: "h6" },
  //Visitor Services
  13: { label: "Admin", value: "v1" },
  14: { label: "Waiting (Pediatric)", value: "v2" },
  15: { label: "Waiting (Adult)", value: "v3" },
  // Emergency
  16: { label: "Emergency", value: "e1" },
  //Restrooms
  17: { label: "Restroom 1", value: "rr1" },
  18: { label: "Restroom 2", value: "rr2" },
  19: { label: "Restroom 3", value: "rr3" },
  20: { label: "Restroom 4", value: "rr4" },
  21: { label: "Restroom 5", value: "rr5" },
  //Hospital Staff
  22: { label: "Staff", value: "s1" },
  23: { label: "Utility", value: "s2" },
  24: { label: "Dietary", value: "s3" },
};

// transform the object to iterate through its values and ignore the arbitrary keys
// had to be an object of objects to capture the value within
const navLocations = Object.values(locations);

export default function SearchLocation() {
  // states for search/dropdowns
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  // capture the node for start when state updates
  const onChangeHandlerStart = (e) => {
    let newStart = setStart(e.value);
    return newStart;
  };

  // capture the node for end when state updates
  const onChangeHandlerEnd = (e) => {
    let newEnd = setEnd(e.value);
    return newEnd;
  };

  // when user clicks the go button in the navbar, dijkstra's funtion is called with the state values from start and end
  const goHandler = () => {
    const go = dijkstra(graph, start, end);
    console.log(go);
  };

  return (
    <Container md="12">
      <Row className="row-cols-lg-auto g-3 align-items-center">
        <Col xs={{ order: "first" }}>
          <Select
            className="description"
            placeholder="Current"
            options={navLocations}
            onChange={onChangeHandlerStart}
            value={start.e}
          ></Select>
        </Col>
        <Col>
          <Select
            className="description"
            placeholder="Destination"
            options={navLocations}
            onChange={onChangeHandlerEnd}
            value={end.e}
          ></Select>
        </Col>
        <Col xs={{ order: "last" }}>
          <Button className="btn-round" onClick={goHandler}>
            Go
          </Button>
        </Col>
        <MapWrapper start={start} end={end} />
      </Row>
    </Container>
  );
}
