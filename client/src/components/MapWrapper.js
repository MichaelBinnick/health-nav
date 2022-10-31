import { MapContainer, ImageOverlay, useMap} from 'react-leaflet';
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
    </MapContainer>
  )
}

export default MapWrapper;