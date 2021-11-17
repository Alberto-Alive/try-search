'use strict'

const axios = require('axios');
const { validate } = use('Validator');
const Config = use('Config');
const omdbKey = Config.get('app.omdbkey');


class SearchMovieController {
    async index({ request, view, session, response }) { 
        const rules = {
            search: 'required'
        }

        const validation = await validate(request.all(), rules);

        if (validation.fails()) { 
            session.withErrors(validation.messages()).flashAll();
            return response.redirect('back');
        }


        // search on ombd api
        const searchString = request.input('search');
        const results = await axios.get(`http://www.omdbapi.com/?apikey=${omdbKey}&s=${searchString}`);

        return view.render('pages/search-result', { 
            results: results.data.Search
        });
    }
}

module.exports = SearchMovieController
