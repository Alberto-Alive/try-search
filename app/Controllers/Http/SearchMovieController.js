'use strict'

const { validate } = use('Validator');

class SearchMovieController {
    async index({ request, view }) { 
        const rules = {
            search: 'required'
        }

        const validation = await validate(request.all(), rules);
        return view.render('pages/search-result');
    }
}

module.exports = SearchMovieController
