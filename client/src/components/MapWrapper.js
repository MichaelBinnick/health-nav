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

  const [selectedLocations, setSelectedLocations] = useState([]);

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
    emergency: [
      [493, 18],
      [453, 18],
      [453, 79],
      [493, 79],
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

      <Polygon positions={polys.emergency} />
    
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

                if (!selectedLocations.includes(local.name)) {
                  setSelectedLocations([
                    ...selectedLocations,
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