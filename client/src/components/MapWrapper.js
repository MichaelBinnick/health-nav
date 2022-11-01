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
    {
      name: 'Lab',
      x: 25,
      y: 251,
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