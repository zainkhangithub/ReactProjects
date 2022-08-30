import './App.css';
import Axios from 'axios'
import {useState, useEffect} from 'react'

function App() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  const fetchAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setAge(res.data.age)
    })
  }

  return (
    <div className="App">
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <button onClick={fetchAge}>Get Age</button>
      <h1>Age: {age}</h1>
    </div>
  );
}

export default App;
