import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // for demo purposes, hardcoded URL
    axios.get('http://localhost:8080/users').then(res => {
      console.log(res.data.users);
      setUsers(res.data.users)
    })
  }, [])

  return (
    <div className="App">
      <h1>Users</h1>
      {users.length ? users.map(user => <li key={user.id}>{user.email}</li>) : <p>Loading</p>}
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;