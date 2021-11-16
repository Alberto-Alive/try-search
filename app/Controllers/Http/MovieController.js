'use strict'

class MovieController {
    index({ view }) {
        return view.render('pages/movies');
    }
}

module.exports = MovieController
