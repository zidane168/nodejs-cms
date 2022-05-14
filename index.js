const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");

// create application/json parser (POST -> req.body)
// Handles post requests
const bodyParser = require("body-parser");

const db = require('./src/config/db')


const methodOverride = require('method-override')

const route = require('./src/routes')

//connect to db
db.connect();

const app = express();

// override method for POST -> PUT (update form)
app.use(methodOverride('_method'))

// Handles post requests
app.use(bodyParser.urlencoded({ extended : true}))

// Handles route
route(app);

const port = 3000;

// Handles layouts hbs
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/src/resources/views/layouts",
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "/src/resources/views"));

// fix Cannot GET /src/public/scss/style.scss
app.use(express.static(path.join(__dirname + '/src/public')));

// http logger
// app.use(morgan("combined"));
app.use(morgan("tiny"))

app.get("/learn-tech-tips", (req, res) => {
  res.send(`
    <h1 style='color:blue'> Welcome to Learn Tech Tips Channel</h1>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
