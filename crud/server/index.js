const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql")

const db = mysql.createPool({
    host: "",
    user:"root",
    password: "password",
    database: "crud_db"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM movie_reviews;"

    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.post("/api/insert", (req, res) => {
    const sqlInsert = "INSERT INTO movie_reviews (movie_name, movie_review) VALUES (?, ?);"
    const movieName = req.body.movieName
    const movieReview = req.body.movieReview

    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(err)
    })
})

app.delete("/api/delete/:id", (req, res) => {
    const sqlDelete = "DELETE FROM movie_reviews WHERE id = ?;"
    const id = req.params.id

    db.query(sqlDelete, id, (err, result) => {
        if (err) console.log(err)
    })
})

app.put("/api/update", (req, res) => {
    const sqlUpdate = "UPDATE movie_reviews SET movie_review = ? WHERE movie_name = ?;"
    const movieName = req.body.movieName
    const movieReview = req.body.movieReview

    db.query(sqlUpdate, [movieReview, movieName], (err, result) => {
        console.log(err)
    })
})

app.listen(3001, () => {
    console.log("Running on port 3001")
})