import { useEffect, useState } from 'react';
import { MapContainer, ImageOverlay, useMap, Marker, Popup, Polygon, Polyline} from 'react-leaflet';
import { CRS } from 'leaflet';
import * as L from 'leaflet';
import { 
  graph, 
  dijkNodes, 
  printTable, 
  tracePath, 
  formatGraph, 
  dijkstra,
  startEnd,
  crossRoad,
  lost,
  redirect,
  polyTest1,
  polyTest2,
  polyTest3,
  polyTest4,
  dijkCoords,
  route
} from 'helpers/dijkstra';

// custom icon for current location
const iconPerson = new L.Icon({
  iconUrl: require('./personIcon.png'),
  iconRetinaUrl: require('./personIcon.png'),
  iconSize: 40,
});


// function for dev purposes
const LogCoordinates = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    map.on('click', (e) => {
      console.log('x:', e.latlng.lng, ' y:', e.latlng.lat)
    })
  }, [map])
  
  return null
}

// this is the component
const MapWrapper = (props) => {
  
  // test data for polyline
  const testPolyline = [
    [ 190, 585 ],
    [ 203, 505 ],
    [ 190, 482 ],
    [ 195, 365 ],
    [ 220, 360 ],
    [ 350, 360 ],
    [ 340, 206 ],
    [ 346, 62 ],
    [ 450, 60 ]
  ];
  // this currently takes 'steps' along the navPath every x ms using setTimeout
  // useEffect(() => {
    //   if (navPath.length > 0) {
      //     setTimeout(() => {
        //       const popNavPath = [...navPath];
        //       popNavPath.shift();
        //       setNavPath(popNavPath);
        //       setCurrentLocation(popNavPath[0])
        //     }, 20000)
        //   }
        // });
        // this currently takes 'steps' along the navDemo every x ms using setTimeout
  const [currentLine, setCurrentLine] = useState([]);
  useEffect(() => {
    if (demoPath.length > 0) {
      setTimeout(() => {
       
        const popDemoPath = [...demoPath];
        popDemoPath.shift();
        setDemoPath(popDemoPath);
        setCurrentLocation(popDemoPath[0]);
        // setCurrentLine(dijkCoords(dijkstra(graph, currentLocation, demoPath[demoPath.length -1])));
        console.log('Location:', dijkstra(graph, currentLocation, "er1"))
        }, 100)
  
      }

    })

    let defaultLocation = props.locationId;
    if (defaultLocation) {
    let locationSplit = defaultLocation.split('');
    locationSplit[0] = locationSplit[0].toUpperCase();
    defaultLocation = locationSplit.join('');
    console.log('defaultLocation:', defaultLocation);
  }
  // declaration of states
  
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation || '');
  const [currentLocation, setCurrentLocation] = useState(testPolyline[0]);
  const [navPath, setNavPath] = useState([...testPolyline]);
  // const [navigating, setNavigating] = useState(true);
  const [demoPath, setDemoPath] = useState([...route]);
  const [navigatingDemo, setNavigatingDemo] = useState(true);

  // options required for drawing map
  const center = [300, 300];
  const bound = [[0, 0], [600,600]]

  // dimensions for room overlays/polygons
  const polys = {
    /* bounds for location polygons
    note: key must match location.name exactly! */
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
  };

  // data for each location
  const locations = {
    /* array of locations for Marker creation 
    name property is used to match against poly objects */
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
  };

  // variable created for readability; look up selectedLocation in locations object
  const currentDest = locations[selectedLocation];

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
      boundsOptions={bound} 
      crs={CRS.Simple} 
      center={center} 
      zoom={0}
      scrollWheelZoom={true} 
      style={{ height: "100%"}}
    >
      {/* this is our actual map image */}
      <ImageOverlay url="https://i.imgur.com/Y9n9Yir.png" bounds={bound} />

      {/* this highlights the selected room and creates a marker in it with more information on click */}
      {selectedLocation && <Polygon positions={polys[selectedLocation]} key={polys[selectedLocation]} />}
      {selectedLocation && 
        <Marker position={[currentDest.y, currentDest.x]}>
          <Popup>
            <em>{currentDest.name}</em> <br />
            Hours of Operation: <br />
            {currentDest.open} - {currentDest.close} <br />
            Coordinates: <br />
            x: {currentDest.x}, y: {currentDest.y}
          </Popup>
        </ Marker>
      }

      {/* this creates hidden polys for each room that allow you to click them */}
      {polyNames.map(poly => {
        return <Polygon 
          positions={polys[poly]} 
          key={polys[poly].name} 
          pathOptions={genPolyOptions}
          eventHandlers={
            {click: () => {
              setSelectedLocation(locations[poly].name);
            }}
          }
        />
      })}
    
      {/* dev purposes */}
      <LogCoordinates />

      {/* render polyline conditionally based on navigating state (true/false) */}
      {navigatingDemo && <Polyline 
        positions={currentLine} 
        color='red'
        // smoothFactor makes line pathing more direct
        smoothFactor={0}
      />}

      {/* icon for current location */}
      {currentLocation && <Marker
        position={currentLocation}
        icon={iconPerson}
      />}
      
    </MapContainer>
  )
}

export default MapWrapper;