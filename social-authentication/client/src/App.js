import Navbar from './components/Navbar';
import './app.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'
import Login from './pages/Login'
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:8080/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      }).then((res) => {
        if (res.status === 200) { return res.json() };
        throw new Error("authentication has been failed")
      }).then(resObj => {
        setUser(resObj.user)
      }).catch(err => {
        console.log(err)
      })
    }

    getUser()
  }, []);

  console.log(user)

  return (
    <Router>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={user ? <Navigate to='/' /> : <Login />}></Route>
          <Route path='/post/:id' element={user ? <Post /> : <Navigate to='/login' />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
