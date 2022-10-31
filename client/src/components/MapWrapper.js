import { MapContainer, ImageOverlay, useMap} from 'react-leaflet';
import { CRS } from 'leaflet';

const center = [52.22977, 21.01178];
const bound = [[0, 0], [1000,1000]]

function MyComponent() {
  const map = useMap();
  console.log('map center:', map.getCenter());
  console.log('crs:', map.crs);
  
  return null;
}

const MapWrapper = () => {
  
  return (
    <MapContainer crs={CRS.Simple} center={center} zoom={14} scrollWheelZoom={true} style={{ height: "100%"}}>
      <ImageOverlay url="https://i.imgur.com/Y9n9Yir.png" bounds={bound} />
      <MyComponent />
    </MapContainer>
  )
}

export default MapWrapper;