import { useEffect, useState } from 'react';
import { MapContainer, ImageOverlay, useMap, Marker, Popup, Polygon} from 'react-leaflet';
import { CRS } from 'leaflet';

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

const MapWrapper = () => {

  const [selectedLocation, setSelectedLocation] = useState([]);

  const center = [300, 300];
  const bound = [[0, 0], [600,600]]
  
  const rooms = [
    {
      name: "Emergency Room",
      topLeftBound: { x: 21, y:  490},
      topRightBound: { x: 79, y: 490},
      botLeftBound: { x: 21, y: 453},
      botRightBound: { x: 79, y: 453}
    }
  ]

  const polys = {
    /* bounds for location polygons
    note: key must match location.name exactly! */
    Emergency: [
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
    "Adult/Inpatient - Waiting": [
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
  }

  const locations = [
    /* array of locations for Marker creation 
    name property is used to match against poly objects */
    {
      name: 'Admin',
      x: 203,
      y: 170,
      open: '9am',
      close: '5pm'
    },
    {
      name: 'Adult/Inpatient - Waiting',
      x: 280,
      y: 180,
      open: '9am',
      close: '5pm'
    },
    {
      name: 'Inpatient',
      x: 497,
      y: 170,
      open: '9am',
      close: '5pm'
    },
    {
      name: 'Staff',
      x: 225,
      y: 305,
      open: '9am',
      close: '5pm'
    },
    {
      name: "Adult - Prep & Recovery",
      x: 300,
      y: 285,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'Pediatric - Waiting',
      x: 125,
      y: 180,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'Imaging',
      x: 35,
      y: 390,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'Emergency',
      x: 48,
      y: 480,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'Surgery',
      x: 220,
      y: 395,
      open: "9am",
      close: '5pm'
    },
    // Enterances
    {
      name: 'Enterance - Pediatric / e1',
      x: 65,
      y: 140,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'Lab',
      x: 25,
      y: 251,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'Enterance - Adult/Inpatient / e2',
      x: 335,
      y: 140,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'Pediatric - Prep & Recovery',
      x: 146,
      y: 285,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'Enterance - Inpatient / e3',
      x: 585,
      y: 190,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'Enterance - Dietary / e4',
      x: 370,
      y: 443,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'Enterance - ER / e5',
      x: 15,
      y: 443,
      open: "9am",
      close: '5pm'
    },
    //Health-Services
    {
      name: 'pediatric - prep & recovery / h1',
      x: 120,
      y: 225,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'adult - prep & recovery / h2',
      x: 325,
      y: 225,
      open: "9am",
      close: '5pm'
    },{
      name: 'lab / h3',
      x: 55,
      y: 260,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'imaging / h4',
      x: 55,
      y: 310,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'surgery / h5',
      x: 190,
      y: 437,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'inpatient / h6',
      x: 482,
      y: 190,
      open: "9am",
      close: '5pm'
    },
    //Visitor Services
    {
      name: 'front doors / v1',
      x: 170,
      y: 135,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'admin / v2',
      x: 190,
      y: 210,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'pediatric - waiting / v3',
      x: 75,
      y: 210,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'adult - waiting / v4',
      x: 310,
      y: 210,
      open: "9am",
      close: '5pm'
    },
    // Emergency
    {
      name: 'emergency / v5',
      x: 60,
      y: 450,
      open: "9am",
      close: '5pm'
    },
    //Restrooms
    {
      name: 'restroom1 / rr1',
      x: 136,
      y: 210,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'restroom2 / rr2',
      x: 280,
      y: 210,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'restroom3 / rr3',
      x: 70,
      y: 285,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'Utility',
      x: 181,
      y: 485,
      open: " ",
      close: 'N/A -'
    },
    {
      name: 'Dietary',
      x: 307,
      y: 485,
      open: " ",
      close: 'N/A -'
    },
    {
      name: '0, 0',
      x: 0,
      y: 0,
      open: " ",
      close: 'N/A -'
    },
    {
      name: '600, 600',
      x: 600,
      y: 600,
      open: " ",
      close: 'N/A -'
    },
    {
      name: 'restroom4 / rr4',
      x: 505,
      y: 203,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'restroom5 / rr5',
      x: 260,
      y: 450,
      open: "9am",
      close: '5pm'
    },
    //Hospital Staff
    {
      name: 'staff / s1',
      x: 206,
      y: 340,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'ulility / s2',
      x: 210,
      y: 450,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'dietary / s3',
      x: 306,
      y: 450,
      open: "9am",
      close: '5pm'
    },

    //Cross-sections
  {
    name: 'Right hall North-West 23 / n1',
    x: 360,
    y: 220,
  },
  {
    name: 'Right hall North-South 10 / n2',
    x: 360,
    y: 350,
  },
  {
    name: 'Top hall east-west 35 / n3',
    x: 360,
    y: 443,
  },
  // {
  //   name: 'Top hall east-west 5 / n4',
  //   x: 60,
  //   y: 443,
  // },
  {
    name: 'Right hall North-West 29 / n5',
    x: 360,
    y: 160,
  },
  {
    name: 'Left Hall hall North-West New / n6',
    x: 62,
    y: 346,
  },
  {
    name: 'admin connector / n7',
    x: 192,
    y: 136,
  },
  {
    name: 'connector / n8',
    x: 62,
    y: 218,
  },
  {
    name: 'admin connector / n9',
    x: 365,
    y: 195,
  }
  ];

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
      <ImageOverlay url="https://i.imgur.com/Y9n9Yir.png" bounds={bound} />

      {selectedLocation.map(spot => {
        for (let local of locations) {
          if (selectedLocation.includes(local.name)) {
            return <Polygon positions={polys[local.name]} key={polys[local.name]} />
          }
          // return null;
        }
      }

      )}
      {/* <Polygon positions={polys.Emergency} /> */}
    
      <LogCoordinates />

      {locations.map(local => {
          return <Marker
            key={local.name}
            position={[local.y, local.x]}
            eventHandlers={
              {click: () => {
                console.log('clicked marker:', local.name);
                console.log('x coordinate:', local.x);
                console.log('y coordinate:', local.y);

                if (!selectedLocation.includes(local.name)) {
                  setSelectedLocation([
                    local.name
                  ])
                }

              }}
            }
          >
        
          <Popup>
            <em>{local.name}</em> <br />
            Hours of Operation: <br />
            {local.open} - {local.close} <br />
            Coordinates: <br />
            x: {local.x}, y: {local.y}
          </Popup>
        </Marker>
      })}
    </MapContainer>
  )
}

export default MapWrapper;