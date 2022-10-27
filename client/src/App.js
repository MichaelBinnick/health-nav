import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'

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
    </div>
  );
}

export default App;