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
      name: 'Enterance - Adult/Inpatient / e2',
      x: 335,
      y: 140,
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