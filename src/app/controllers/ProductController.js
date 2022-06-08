const Product = require("../models/Product");
const { mongoosesToObject, mongooseToObject } = require("../../util/mongoose");

class ProductController {
  // [GET] /product/
  index(req, res, next) {
    Product.find({})
      .then((products) => {
       
        products = mongoosesToObject(products);
        res.render("product/index", { products });
      })
      .catch(next);

    // res.status(400).json({ error: err})
  }

  // [GET/POST] /product/add
  add(req, res, next) {
    if (req.method === "POST") {
      let fromData = { ...req.body };
      
      
      const product = new Product(fromData);
      product
        .save()
        .then(() => {
          // toast.show({title: 'Data is save', position: 'topright', type: 'info'})
          res.redirect(`/product/`)
        })
        .catch((error) => next(error));
    } else {
      res.render("product/add");
    }
  }

  // [GET/PUT] /product/:id/edit
  edit(req, res, next) {

    if (req.method === 'PUT') {

      Product.updateOne({ _id: req.params.id }, req.body )
        .then(() => {
          res.redirect("/product/")
        })
        .catch (next)

    } else {

      Product.findById( req.params.id )
        .then((course) => {
          res.render("product/edit", course);
        })
        .catch(next)
    }
  }

  delete(req, res, next) {
    Product.deleteOne( { _id: req.params.id } )
      .then(() => {
        res.redirect("back")
      })
      .catch(next)
  }

  // [GET] /product/:slug
  view(req, res, next) {
    Product.findOne({ slug: req.params.slug })
      .then((course) => {
        // res.json(course);
        course = mongooseToObject(course);
        res.render("product/view", { course });
      })
      .catch(next);
  }

}

module.exports = new ProductController();
