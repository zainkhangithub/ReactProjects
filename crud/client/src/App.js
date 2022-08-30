import './App.css';
import React, {useState, useEffect} from 'react'
import Axios from 'axios'

function App() {
  const [movieName, setMovieName] = useState("")
  const [review, setReview] = useState("")
  const [movieList, setMovieList] = useState([])
  const [newReview, setNewReview] = useState("")

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", { 
      movieName: movieName,
      movieReview: review
    })

    setMovieList([...movieList, {movieName: movieName, movieReview: review}])
  }

  const deleteMovie = (id) => {
    Axios.delete(`http://localhost:3001/api/delete/${id}`)
  }

  const updateReview = (movie) => {
    Axios.put("http://localhost:3001/api/update", { 
      movieName: movie,
      movieReview: newReview
    })

    setNewReview("")
  }

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setMovieList(response.data)
    })
  }, [submitReview, deleteMovie, updateReview])

  return (
    <div className="App">
      <h1>CRUD Application</h1>
      <div className="form">
        <label htmlFor="">Movie Name</label>
        <input type="text" name="moviename" onChange={(e) => {
          setMovieName(e.target.value)
        }} />
        <label htmlFor="">Review</label>
        <input type="text" name="review" onChange={(e) => {
          setReview(e.target.value)
        }} />
        <button type="submit" onClick={submitReview}>Submit</button>

        <div className="card-container">
          {movieList.map((val)=>{
            return <div className='card'>
              <h1>{val.movie_name}</h1>
              <p>{val.movie_review}</p>

              <button onClick={ () => { deleteMovie(val.id) } }>Delete</button>
              <input type="text" id='inputText' onChange={(e)=>{
                setNewReview(e.target.value)
              }} />
              <button onClick={()=>{updateReview(val.movie_name)}}>Update</button>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
