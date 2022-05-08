const express = require('express')
const path = require('path')
const morgan = require('morgan')
const { engine }  = require('express-handlebars')
const app = express()
const port = 3000

app.engine('.hbs', engine({ extname: '.hbs', defaultLayout: "layout", layoutsDir: __dirname + '/src/resources/views/layouts'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'src/resources/views'));

// app.engine('handlebars', handlebars());
// app.set('view engine', 'handlebars');
// app.set('views', './src/resources/views');

// http logger
app.use(morgan('combined'))

app.get('/', (req, res) => {
    
  res.render('main', { title: 'Hey', message: 'Hello there!' })
})

app.get('/learn-tech-tips', (req, res) => {
  res.send(`
    <h1 style='color:blue'> Welcome to Learn Tech Tips Channel</h1>
  `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
