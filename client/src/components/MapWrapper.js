import { MapContainer, ImageOverlay, useMap, Marker} from 'react-leaflet';
import { CRS } from 'leaflet';

const center = [300, 300];
const bound = [[0, 0], [600,600]]

function MyComponent() {
  const map = useMap();
  console.log('map center:', map.getCenter());
  console.log('crs:', map.crs);
  
  return null;
}

const MapWrapper = () => {
  
  const locations = [
    /* array of every node(x, y) and it's location details, from query */
    {
      name: "Adult - Prep & Recovery",
      x: 300,
      y: 300
    },
    {
      name: 'Pediatric - Waiting',
      x: 140,
      y: 160
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
      <MyComponent />
      {locations.map(local => {
        return <Marker
          position={[local.y, local.x]}
          eventHandlers={{
            click: () => {
              console.log('clicked marker:', local.name);
            }
          }}
        />
      })}
    </MapContainer>
  )
}

export default MapWrapper;