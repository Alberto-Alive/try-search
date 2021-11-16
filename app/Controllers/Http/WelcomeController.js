'use strict'

class WelcomeController {
    index({ view }) {
        return view.render('welcome');
    }
}

module.exports = WelcomeController
