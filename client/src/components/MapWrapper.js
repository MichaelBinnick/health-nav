import { useEffect, useState, useCallback } from 'react';
import { MapContainer, ImageOverlay, useMap, Marker, Popup, Polygon, Polyline } from 'react-leaflet';
import { CRS } from 'leaflet';
import * as L from 'leaflet';
import { 
  graph, 
  dijkNodes, 
  dijkstra,
  dijkCoords,
  routeStr, // ['e3', 'j23', 'j22', 'j21', etc...]
} from 'helpers/dijkstra';



// custom icon for current location
const iconPerson = new L.Icon({
  iconUrl: require('./personIcon.png'),
  iconRetinaUrl: require('./personIcon.png'),
  iconSize: 60,
});

// custom icon for demo button
const iconDemo = new L.Icon({
  iconUrl: require('./map-QR_3.png'),
  iconRetinaUrl: require('./map-QR_3.png'),
  iconSize: [250, 250],
  
});


// function for dev purposes
const LogCoordinates = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    map.on('click', (e) => {
      console.log('x:', e.latlng.lng, ' y:', e.latlng.lat);
    });
  }, [map]);

  return null;
};

// this is the component
const MapWrapper = (props) => {

  const newNodes = {
    x23: { y: 187.21, x: 190, name: 'x23' },
    x22: { y: 184.94, x: 190, name: 'x22' },
    x21: { y: 182.67000000000002, x: 190, name: 'x21' },
    x20: { y: 180.4, x: 190, name: 'x20' },
    x19: { y: 178.13, x: 190, name: 'x19' },
    x18: { y: 175.86, x: 190, name: 'x18' },
    x17: { y: 173.59, x: 190, name: 'x17' },
    x16: { y: 171.32, x: 190, name: 'x16' },
    x15: { y: 169.05, x: 190, name: 'x15' },
    x14: { y: 166.78, x: 190, name: 'x14' },
    x13: { y: 164.51, x: 190, name: 'x13' },
    x12: { y: 162.24, x: 190, name: 'x12' },
    x11: { y: 159.97, x: 190, name: 'x11' },
    x10: { y: 157.7, x: 190, name: 'x10' },
    x9: { y: 155.43, x: 190, name: 'x9' },
    x8: { y: 153.16, x: 190, name: 'x8' },
    x7: { y: 150.89, x: 190, name: 'x7' },
    x6: { y: 148.62, x: 190, name: 'x6' },
    x5: { y: 146.35, x: 190, name: 'x5' },
    x4: { y: 144.08, x: 190, name: 'x4' },
    x3: { y: 141.81, x: 190, name: 'x3' },
    x2: { y: 139.54, x: 190, name: 'x2' },
    x1: { y: 137.27, x: 190, name: 'x1' },
  }

  // graph visualizer
  // const graphNodes1 = Object.keys(newNodes);
  // const graphNodes = [
  //   'y1', 'y2', 'y3', 'y4', 'y5', 'y6',
  //   'z1', 'z2', 'z3', 'z4', 'z5', 'z6',
  //   'v1', 'v2', 'v3',
  //   'er1',
  //   'rr1', 'rr2', 'rr3', 'rr4', 'rr5',
  //   's1', 's2', 's3'
  // ]

  // this logic is important for selecting a location based on what's chosen in directory ("locations" in sidebar)
  let defaultLocation = props.locationId;
  if (defaultLocation) {
    let locationSplit = defaultLocation.split('');
    locationSplit[0] = locationSplit[0].toUpperCase();
    defaultLocation = locationSplit.join('');
    console.log('defaultLocation:', defaultLocation);
  }

  // declaration of states

  const [currentLocation, setCurrentLocation] = useState(routeStr[0]);
  const [endpoint, setEndpoint] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation || '');

  const [navigatingDemo, setNavigatingDemo] = useState(false);
  const [navigationOn, setNavigationOn] = useState(false);
  
  const [currentLine, setCurrentLine] = useState([]);
  const [propLocals, setPropLocals] = useState({start: '', end: ''});

  const [walkerPath, setWalkerPath] = useState((navigatingDemo && [...routeStr]) || []);


  if (props.start && (!propLocals.start || !propLocals.end)) {
    setPropLocals({start: props.start, end: props.end})
  }
    
  // logic for demo nav w. dummy user
  const navDemo = useCallback((interval) => {
    
    // each interval represents a 'step' taken along the path
    setTimeout(() => {
      
      // once demoPath is 1, we don't want to continue
      
      if (walkerPath.length >= 1) {
        
        // create shallow copy of demo path
        const shiftDemoPath = [...walkerPath];
        // remove first element of copy to indicate step taken
        
        shiftDemoPath.shift();
        
        console.log('visits:', shiftDemoPath[0]);
        // reset demoPath state to be new reduced path
        setWalkerPath(shiftDemoPath);
        
        // change current location to indicate step taken
        
        setCurrentLocation(shiftDemoPath[0]);
        
        // redraw the nav line based on current location
        if (!endpoint) {
          setEndpoint(walkerPath[walkerPath.length - 1])
        }
        setCurrentLine(dijkCoords(dijkstra(graph, currentLocation, endpoint).path).results);
        
        // logic to take when demo is over (cleanup)
        if (walkerPath.length === 2) {
          
          setNavigationOn(false);
          setNavigatingDemo(false);
          setWalkerPath([]);
          props.start && setCurrentLocation(props.start);
          !props.start && setEndpoint('');
          console.log('reached end of demo');
        } 
      } 
    }, interval)  
  }, [currentLocation, walkerPath, endpoint, props.start])

  const formatEndpoint = (nodeName) => {
    let result = "";

    // entrances
    if (nodeName[0] === 'y') {

      if (nodeName[1] === "1") {
        // pediatric - front door left
        result = '';

      } else if (nodeName[1] === '2') {
        // adult/inpatient - front door right
        result = '';

      } else if (nodeName[1] === '3') {
        // inpatient - far right
        result = '';

      } else if (nodeName[1] === '4') {
        // dietary - upper right corner
        result = '';

      } else if (nodeName[1] === '5') {
        // er - upper left corner
        result = '';

      } else if (nodeName[1] === '6') {
        // front doors - 
        result = 'Front doors';
      } 
    }

    // health services
    if (nodeName[0] === 'z') {

      if (nodeName[1] === "1") {
        // pediatric - prep
        result = "Pediatric - Prep & Recovery";

      } else if (nodeName[1] === '2') {
        // adult - prep
        result = "Adult - Prep & Recovery";

      } else if (nodeName[1] === '3') {
        // lab
        result = "Lab";

      } else if (nodeName[1] === '4') {
        // imaging
        result = "Imaging";

      } else if (nodeName[1] === '5') {
        // surgery
        result = "Surgery";

      } else if (nodeName[1] === '6') {
        // inpatient
        result = "Inpatient";
      } 
    }

    // waiting and admin
    if (nodeName[0] === 'v') {

      if (nodeName[1] === "1") {
        // admin
        result = "Admin";
      } else if (nodeName[1] === '2') {
        // pediatric - waiting
        result = "Pediatric - Waiting";
      } else if (nodeName[1] === '3') {
        // adult - waiting
        result = "Adult";
      }
    }

    // er
    if (nodeName === 'er1') {
      // emergency
      result = "Emergency";
    }

    // restrooms
    if (nodeName[0] === 'r' && nodeName[1] === 'r') {

      if (nodeName[2] === "1") {
        // "Restroom - Pediatric"
        result = "Restroom - Pediatric"

      } else if (nodeName[2] === '2') {
        // no poly yet


      } else if (nodeName[2] === '3') {
        // no poly yet

      } else if (nodeName[2] === '4') {
        // no poly yet

      } else if (nodeName[2] === '5') {
        // no poly yet

      }
    }

    // staff
    if (nodeName[0] === 's') {

      if (nodeName[1] === "1") {
        // staff
        result = "Staff";
      } else if (nodeName[1] === '2') {
        // utility
        result = "Utility";
      } else if (nodeName[1] === '3') {
        // dietary
        result = "Dietary";
      }
    }

    return result;
  }

  useEffect(() => {
    
    // hardcoded nav demo w. dummy user (triggers on button click)
    if (navigationOn) {
      // console.log('about to nav');
      navDemo(50);
    }

    // set state based on navBar selections
    if (propLocals.start && !navigatingDemo && !navigationOn) {
      console.log('thing happens');
      setCurrentLocation(propLocals.start);
      setEndpoint(propLocals.end);
      setSelectedLocation(formatEndpoint(endpoint))
    }
    
    if (endpoint) {
      const path = dijkCoords(dijkstra(graph, currentLocation, endpoint).path).results
      setCurrentLine(path);
    }

    if (endpoint && walkerPath.length === 0) {
      console.log('setting walker path');
      console.log('current', currentLocation);
      console.log('end', endpoint)
      setWalkerPath(dijkstra(graph, currentLocation, endpoint).path);
    }
  }, [currentLocation, endpoint, navDemo, propLocals, navigatingDemo, navigationOn, walkerPath])
  

  // options required for drawing map
  const center = [300, 300];
  const bound = [[0, 0], [600, 600]];
  
  // dimensions for room overlays/polygons
  const polys = {
    /* bounds for location polygons
    note: key must match location.name exactly! */
    "Front doors": [
      [140, 176], // top left
      [124, 176], // bot left
      [114, 180], // bot right
      [107, 187],
      [103, 197],
      [103, 206],
      [106, 215],
      [110, 221],
      [117, 226],
      [125, 229],
      [140, 229], // top right
    ],
    "Emergency": [
      [493, 18], // top left
      [453, 18], // bot left
      [453, 79], // bot right
      [493, 79], // top right
    ],
    "Adult - Prep & Recovery": [
      [340, 250],
      [230, 250],
      [230, 350],
      [340, 350]
    ],
    "Pediatric - Waiting": [
      [210, 71],
      [147, 79],
      [145, 174],
      [176, 169],
      [179, 141],
      [210, 140]
    ],
    "Admin": [
      [209, 141],
      [180, 141],
      [179, 175],
      [145, 176],
      [146, 227],
      [209, 239]
    ],
    "Adult": [
      [209, 239], // top left
      [146, 227], // bot left
      [146, 322], // bot right
      [173, 322],
      [174, 348],
      [209, 350] // top right
    ],
    "Inpatient": [
      [187, 400],
      [145, 400],
      [145, 586],
      [187, 586]
    ],
    "Staff": [
      [340, 180],
      [325, 180],
      [325, 198],
      [246, 198],
      [246, 250],
      [313, 250],
      [313, 223],
      [340, 223]
    ],
    "Imaging": [
      [437, 20],
      [283, 20],
      [283, 50],
      [243, 75],
      [243, 95],
      [340, 95],
      [340, 69],
      [395, 69],
      [395, 86],
      [437, 86]
    ],
    "Surgery": [
      [437, 148],
      [425, 148],
      [425, 166],
      [412, 166],
      [412, 86],
      [395, 86],
      [395, 69],
      [356, 69],
      [356, 352],
      [437, 352]
    ],
    "Lab": [
      [282, 22],
      [227, 22],
      [227, 51],
      [282, 51]
    ],
    "Pediatric - Prep & Recovery": [
      [340, 95],
      [227, 95],
      [227, 180],
      [245, 180],
      [245, 198],
      [324, 198],
      [324, 179],
      [340, 179],
    ],
    "Utility": [
      [500, 108],
      [453, 108],
      [436, 87],
      [414, 87],
      [414, 166],
      [426, 166],
      [426, 146],
      [432, 146],
      [453, 254],
      [462, 254],
      [462, 277],
      [500, 277],
    ],
    "Dietary": [
      [502, 277],
      [453, 277],
      [453, 310],
      [467, 310],
      [467, 336],
      [502, 336]
    ],
    "Restroom - Pediatric": [
      [200, 112],
      [200, 125],
      [185, 123],
      [185, 112]
    ],
    "Restroom - Adult": [
      [210, 280],
      [210, 296],
      [190, 296],
      [190, 280]
    ],
    "Restroom - Imaging": [
      [290, 70],
      [290, 83],
      [276, 83],
      [276, 70]
    ],
    "Restroom - Inpatient": [
      [226, 495],
      [226, 513],
      [204, 513],
      [204, 495]
    ],
    "Restroom - Utility": [
      [464, 252],
      [464, 277],
      [452, 277],
      [452, 252]
    ]
  };

  // data for each location
  const locations = {
    /* array of locations for Marker creation 
    name property is used to match against poly objects */
    'Front doors': {
      name: 'Front doors',
      x: 201,
      y: 122,
      open: '9am',
      close: '5pm'
    },
    Admin: {
      name: 'Admin',
      x: 203,
      y: 170,
      open: '9am',
      close: '5pm'
    },
    'Adult': {
      name: 'Adult',
      x: 280,
      y: 180,
      open: '9am',
      close: '5pm'
    },
    'Inpatient': {
      name: 'Inpatient',
      x: 497,
      y: 170,
      open: '9am',
      close: '5pm'
    },
    'Staff': {
      name: 'Staff',
      x: 225,
      y: 305,
      open: '9am',
      close: '5pm'
    },
    "Adult - Prep & Recovery": {
      name: "Adult - Prep & Recovery",
      x: 300,
      y: 285,
      open: "9am",
      close: '5pm'
    },
    'Pediatric - Waiting': {
      name: 'Pediatric - Waiting',
      x: 125,
      y: 180,
      open: "9am",
      close: '5pm'
    },
    Imaging: {
      name: 'Imaging',
      x: 35,
      y: 390,
      open: "9am",
      close: '5pm'
    },
    Emergency: {
      name: 'Emergency',
      x: 48,
      y: 480,
      open: "9am",
      close: '5pm'
    },
    Surgery: {
      name: 'Surgery',
      x: 220,
      y: 395,
      open: "9am",
      close: '5pm'
    },
    'Lab': {
      name: 'Lab',
      x: 25,
      y: 251,
      open: "9am",
      close: '5pm'
    },
    'Utility': {
      name: 'Utility',
      x: 181,
      y: 485,
      open: " ",
      close: 'N/A -'
    },
    'Dietary': {
      name: 'Dietary',
      x: 307,
      y: 485,
      open: " ",
      close: 'N/A -'
    },
    'Pediatric - Prep & Recovery': {
      name: 'Pediatric - Prep & Recovery',
      x: 146,
      y: 285,
      open: "9am",
      close: '5pm'
    },
    "Restroom - Pediatric": {
      name: "Restroom - Pediatric",
      x: 118,
      y: 198,
      open: " ",
      close: 'N/A -'
    },
    "Restroom - Adult": {
      name: "Restroom - Adult",
      x: 288,
      y: 209,
      open: " ",
      close: 'N/A -'
    },
    "Restroom - Imaging": {
      name: "Restroom - Imaging",
      x: 77,
      y: 287,
      open: " ",
      close: 'N/A -'
    },
    "Restroom - Inpatient": {
      name: "Restroom - Inpatient",
      x: 504,
      y: 221,
      open: " ",
      close: 'N/A -'
    },
    "Restroom - Utility": {
      name: "Restroom - Utility",
      x: 265,
      y: 461,
      open: " ",
      close: 'N/A -'
    }
  };

  // variable created for readability; look up selectedLocation in locations object
  // const locations[selectedLocation] = locations[selectedLocation];

  // this is necessary to iterate over each Polygon and draw them
  const polyNames = Object.keys(polys);

  // create options for the hidden polys
  const genPolyOptions = {
    stroke: false,
    fillOpacity: .0
  };


  return (
    <MapContainer 
      bounds={bound}
      crs={CRS.Simple} 
      center={center} 
      zoom={0}
      scrollWheelZoom={true} 
      style={{ height: "100%", background: "url(" + "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDTlFAm1uUxldhZsCc0PWW4_OclcMcs3h3jg&usqp=CAU.png" + ")", boxShadow: "inset 0 0 100px black" }}
      maxBounds={bound}
      attributionControl={false}
      >
    
      {/* this is our actual map image */}
      <ImageOverlay url="https://i.imgur.com/Ql46McI.png" bounds={bound} />

      {/* Button start navDemo onClick */}
      {!navigatingDemo && !props.start && <Marker
        icon={iconDemo}
        position={[375, 485]} 
        eventHandlers={
            {click: () => {
              setNavigatingDemo(true);
              setNavigationOn(true);
              setSelectedLocation('Emergency');
              setWalkerPath(([...routeStr]));
            }}}
      />}

      {/* this highlights the selected room and creates a marker in it with more information on click */}
      {selectedLocation && <Polygon positions={polys[selectedLocation]} key={polys[selectedLocation]} />}
      {selectedLocation && !navigatingDemo && !navigationOn &&
        <Popup position={[locations[selectedLocation].y + 20, locations[selectedLocation].x]}>
          <strong>{locations[selectedLocation].name.toUpperCase()}</strong> <br />
          Hours of Operation: <br />
          {locations[selectedLocation].open} - {locations[selectedLocation].close} <br />
        </Popup>
      }

      {/* this creates hidden polys for each room that allow you to click them */}
      {polyNames.map(poly => {
        return <Polygon
          positions={polys[poly]}
          key={polys[poly].name}
          pathOptions={genPolyOptions}
          eventHandlers={
            {
              click: () => {
                setSelectedLocation(locations[poly].name);
              }
            }
          }
        />;
      })}

      {/* dev purposes */}
      <LogCoordinates />

      {/* render polyline conditionally based on navigating state (true/false) */}
      {navigationOn && <Polyline
        positions={currentLine} 
        color='blue'
        weight={5}
        opacity={.7}
        lineJoin={'bevel'}
        dashArray={'15'}
        // smoothFactor makes line pathing more direct
        smoothFactor={0}
      />}

      {/* icon for current location */}
      {currentLocation && <Marker
        position={[dijkNodes[currentLocation].y, dijkNodes[currentLocation].x]}
        icon={iconPerson}
      />}
      
      {/* turn nav on button */}
      {!navigationOn && props.start && <Marker 
        position={[375, 485]}
        icon={iconDemo}
        eventHandlers={
          {click: () => {
            setNavigationOn(true);
          }}}
      />}

      {/* graph visualizer loops */}
      {/* {graphNodes.map(node => {
        // console.log('placing marker ', node, ' at ', [dijkNodes[node].y, dijkNodes[node].x])
        return <Marker position={[dijkNodes[node].y, dijkNodes[node].x]} icon={iconPerson}>
          <Popup>
            name: {node} <br />
            y: {dijkNodes[node].y} <br /> 
            x: {dijkNodes[node].x}
          </Popup>
        </Marker>
      })} */}

      {/* {graphNodes1.map(node => {
        // console.log('placing marker ', node, ' at ', [dijkNodes[node].y, dijkNodes[node].x])
        return <Marker position={[dijkNodes[node].y, dijkNodes[node].x]}>
          <Popup>
            name: {node} <br />
            y: {dijkNodes[node].y} <br /> 
            x: {dijkNodes[node].x}
          </Popup>
        </Marker>
      })} */}

    </MapContainer>
  );
};

export default MapWrapper;