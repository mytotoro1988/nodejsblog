class SiteController {

    index(req, res) {
        // [GET] /home
        res.render('home')
    }

    //[GET] /search
    search(req, res) {
        res.render('search')
    }
    
}

module.exports = new SiteController