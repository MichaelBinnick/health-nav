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
    ]
  }

  const locations = [
    /* array of every node(x, y) and it's location details, from query */
    {
      name: "Adult - Prep & Recovery",
      x: 300,
      y: 300,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'Pediatric - Waiting',
      x: 140,
      y: 160,
      open: "9am",
      close: '5pm'
    },
    {
      name: 'Emergency',
      x: 48,
      y: 480,
      open: "9am",
      close: '5pm'
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
            return <Polygon positions={polys[local.name]} />
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