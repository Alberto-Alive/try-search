'use strict'

const { validate } = use('Validator');

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

        return view.render('pages/search-result');
    }
}

module.exports = SearchMovieController
