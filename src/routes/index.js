const productRouter = require("./product");

function route(app) {
  app.use("/product", productRouter);

  app.get("/", (req, res) => {
    res.render("index", {
      title: "Learn Tech Tips - Zidane",
      message: "Welcome to CMS",
    });
  });

  app.get("/about", (req, res) => {
    res.render("about", { content: "Welcome to About page" });
  });
}

module.exports = route;
