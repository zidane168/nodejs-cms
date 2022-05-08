const Course = require('../models/Course')

class NewsController {

    // [GET] index 
    index(req, res, next) {

        Course.find({})
            .then(courses => {

                courses = courses.map( course => course.toObject()) // convert to Object for remove bug security of handlebars
                res.render('news', { courses })
            })
            .catch(next);

        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.render('news', { courses: courses });        
        //         // res.json(courses);
        //     } else {
        //         res.status(400).json({ error: err})
        //     }
        // })
      
    }

    test(req, res) {
       
        res.json({
            name: 'test'
        })
    }
}

module.exports = new NewsController