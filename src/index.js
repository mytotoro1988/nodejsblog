const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars  = require('express-handlebars');
const app = express()
const port = 3000
// phut 24
const route = require('./routes')

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({
  extended:true
}))
app.use(express.json())
// app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.render('home')
})

// app.get('/news', (req, res) => {
//   res.render('news')
// })


app.get('/search', (req, res) => {
  res.render('search')
})

app.post('/search', (req, res) => {

  console.log(req.body)

  res.send('')
})


app.set('views', path.join(__dirname, 'resources/views'));

app.engine('.hbs', handlebars({extname: '.hbs'}));


app.set('view engine', 'hbs');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})