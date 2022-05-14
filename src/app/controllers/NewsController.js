const Course = require("../models/Course");
const { mongoosesToObject, mongooseToObject } = require("../../util/mongoose");
const { redirect, json } = require("express/lib/response");

// const { toast } = require('toast-notification-alert')
// https://www.npmjs.com/package/toast-notification-alert

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

    // res.status(400).json({ error: err})
  }

  // [GET/POST] /news/add
  add(req, res, next) {
    if (req.method === "POST") {
      let fromData = req.body;
      fromData.image =
        "https://static.remove.bg/remove-bg-web/a8b5118d623a6b3f4b7813a78c686de384352145/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png";

      const course = new Course(fromData);
      course
        .save()
        .then(() => {
          // toast.show({title: 'Data is save', position: 'topright', type: 'info'})
          res.redirect(`/news/`)
        })
        .catch((error) => next(error));
    } else {
      res.render("news/add");
    }
  }

  // [GET/PUT] /news/:id/edit
  edit(req, res, next) {

    if (req.method === 'PUT') {

      Course.updateOne({ _id: req.params.id }, req.body )
        .then(() => {
          res.redirect("/news/")
        })
        .catch (next)

    } else {

      Course.findById( req.params.id )
        .then((course) => {
          res.render("news/edit", course);
        })
        .catch(next)
     
    }

  }

  // http://abc.com?key=value&key2=value2 (QUERY)
  // req.query.key
  // req.query.key2

  // http://abc.com (POST)
  // username. password
  // req.body.name
  // req.body.password

  // http://abc.com/news/:slug (http://abc.com/news/node-js - http://abc.com/news/csharp)
  // req.params.slug

  // [GET] /news/:slug
  view(req, res, next) {
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
