const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/API.routes')

const app = express();
const PORT = process.env.POST || 3000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('view engine', 'pug');
app.set('views', './views')

app.use('/', router)
app.listen(PORT, () => {
    console.log(`Listening on post ${PORT}`)
})