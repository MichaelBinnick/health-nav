import { useEffect } from 'react';
import { MapContainer, ImageOverlay, useMap, Marker, Popup, SVGOverlay} from 'react-leaflet';
import { CRS } from 'leaflet';

const GetCoordinates = () => {
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

  const center = [300, 300];
  const bound = [[0, 0], [600,600]]
  
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

      <SVGOverlay
        attributes={{ stroke: 'red' }} bounds={bound}>
        <rect x="150" y="150" width="50%" height="50%" fill="none" />
        <circle r="5" cx="10" cy="10" fill="red" />
        <text x="50%" y="50%" stroke="white">
          text
        </text>
      </SVGOverlay>

      <GetCoordinates />

      {locations.map(local => {
        return <Marker
          key={local.name}
          position={[local.y, local.x]}
          eventHandlers={
            {click: () => {
              console.log('clicked marker:', local.name);
              console.log('x coordinate:', local.x);
              console.log('y coordinate:', local.y);
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