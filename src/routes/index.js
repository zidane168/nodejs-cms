const newsRouter = require("./news");

function route(app) {
  app.use("/news", newsRouter);

  app.get("/", (req, res) => {
    res.render("index", {
      title: "Learn Tech Tips",
      message: "Welcome to Blog spot Learn Tech Tips",
    });
  });

  app.get("/about", (req, res) => {
    res.render("about", { content: "Welcome to About page" });
  });
}

module.exports = route;
