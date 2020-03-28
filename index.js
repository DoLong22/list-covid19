const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const router = require('./routes/API.routes')

// const URL = "https://corona.lmao.ninja/countries?fbclid=IwAR1TTX3mRazjhJ0wF7gPFrf9KyeR-lq-A1Il29QrJ7DiOlqma4oREEH_nq0"
const app = express();
const PORT = process.env.POST || 3000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('view engine', 'pug');
app.set('views', './views')

module.exports = async function getData(URL) {
    try {
        const res = await axios(URL)
        return res.data.sort((data1, data2) => {
            return data1.cases - data2.cases;
        }).reverse()
    } catch (error) {
        console.log(error);
        console.log("Loi roi");
    }
}
app.use('/', router)
app.listen(PORT, () => {
    console.log(`Listening on post ${PORT}`)
})
