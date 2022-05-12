const Course = require("../models/Course");
const { mongoosesToObject, mongooseToObject } = require("../../util/mongoose");

class NewsController {
  // [GET] /news/
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        //courses = courses.map( course => course.toObject()) // convert to Object for remove bug security of handlebars

        courses = mongoosesToObject(courses);
        res.render("news/index", { courses });
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

  
  // [GET] /add
  add(req, res, next) {
    res.render("news/add");
  }
  
  // [GET] /news/:slug
  view(req, res, next) {
    // http://abc.com?key=value&key2=value2 (QUERY)
    // req.query.key
    // req.query.key2

    // http://abc.com (POST)
    // username. password
    // req.body.name
    // req.body.password

    // http://abc.com/news/:slug (http://abc.com/news/node-js - http://abc.com/news/csharp)
    // req.params.slug

    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        // res.json(course);
        course = mongooseToObject(course);
        res.render("news/view", { course });
      })
      .catch(next);
  }


  test(req, res) {
    res.json({
      name: "test",
    });
  }
}

module.exports = new NewsController();
