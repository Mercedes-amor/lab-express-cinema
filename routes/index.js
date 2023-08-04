const express = require('express');
const router = express.Router();
const Movie = require ("../models/Movie.model.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


// /movies

router.get("/movies", (req, res, next) =>{

Movie.find()
.select ({title:1, image:1})
.then ((caratula) =>{
    res.render("movies.hbs", {
      caratula: caratula 
    })
})
.catch ((err) =>{
    next(err)
})
})

// /movies/Id

router.get("/movies/:id", (req, res, next) =>{

    let peliculaId= req.params.id

    Movie.findById(peliculaId)
    .then((pelicula) =>{
        res.render("movie-detail.hbs", {
            pelicula:pelicula
        })

    })
 .catch((err) =>{
    next(err)        
    })
})








module.exports = router;
