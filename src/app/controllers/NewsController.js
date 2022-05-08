class NewsController {

    // [GET] index 
    index(req, res) {
        res.render('news');
    }
}

module.exports = new NewsController