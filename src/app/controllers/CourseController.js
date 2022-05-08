class CourseController {

    // [GET] index 
    index(req, res) {
        res.render('course');
    }
}

module.exports = new CourseController