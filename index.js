const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const router = require('./routes/API.routes')
const Controller = require('./controller/api.controller')
const URL = "https://corona.lmao.ninja/countries?fbclid=IwAR1TTX3mRazjhJ0wF7gPFrf9KyeR-lq-A1Il29QrJ7DiOlqma4oREEH_nq0"
const app = express();
const POST = process.env.POST || 3000;
// let datas;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.set('view engine','pug');
app.set('views','./views')
axios.get(URL)
    .then((res) => {
        module.exports = datas = res.data.sort((data1,data2)=>{
            return data1.cases-data2.cases;
        }).reverse();

        app.use('/',router)

        app.listen(POST,()=>{
            console.log(`Listening on post ${POST}`)
        })
    })
    .catch(function (error) {
        console.log(error);
        console.log("Loi roi");
    });

