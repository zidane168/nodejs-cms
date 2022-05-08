class NewsController {

    // [GET] index 
    index(req, res) {
        // res.render('news');
        res.json({
            name: 'vilh'
        })
    }

    test(req, res) {
       
        res.json({
            name: 'test'
        })
    }
}

module.exports = new NewsController