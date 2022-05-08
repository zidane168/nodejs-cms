const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/src/resources/views/layouts",
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "src/resources/views"));

// fix Cannot GET /src/public/scss/style.scss
app.use(express.static(path.join(__dirname + '/src/public')));

// console.log(path.join(__dirname + '/src/public'));

// http logger
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.render("index", { title: "Learn Tech Tips", message: "Welcome to Blog spot Learn Tech Tips" });
});

app.get("/about", (req, res) => {
  res.render("about", { content: "Welcome to About page" });
});

app.get("/learn-tech-tips", (req, res) => {
  res.send(`
    <h1 style='color:blue'> Welcome to Learn Tech Tips Channel</h1>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
