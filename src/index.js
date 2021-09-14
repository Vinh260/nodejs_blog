const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const handlebars = require('express-handlebars');
const port = 3000;
//http logger
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

// template engineer
app.engine('hbs', handlebars({
  extname:'.hbs'
}))
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname, 'resources/views'))


app.get('/', (req, res) => {
  res.render('home');
})
app.get('/products', (req, res) => {
  res.render('products');
})


//227.0.0.1 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})