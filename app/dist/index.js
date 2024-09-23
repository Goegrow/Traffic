const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 9000

const Router = require('../http/routes/routes')

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(Router)
app.use(express.json());
app.use(express.static( path.join(__dirname,'../public')))
app.set('views', path.join(__dirname, `../views`));
app.set('view engine', `ejs`);

app.listen(port, () => {
  console.log(`listening on ${port}`)
})