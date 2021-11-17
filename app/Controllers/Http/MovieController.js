'use strict'

const axios = require('axios');
const Config = use('Config');
const omdbKey = Config.get('app.omdbkey');

class MovieController {
    index({ view }) {
        return view.render('pages/movies');
    }

    async view({params, view}) { 
        const movieId = params.id;
        
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${omdbKey}&i=${movieId}`);

        return view.render('pages/movie-details', { 
            movie: response.data
        })
    }

}

module.exports = MovieController
