const axios = require('axios');
const Module = require('../modules/modules')
const URL = "https://corona.lmao.ninja/countries?fbclid=IwAR1TTX3mRazjhJ0wF7gPFrf9KyeR-lq-A1Il29QrJ7DiOlqma4oREEH_nq0"
let datas0;
let sum;
axios(URL).then(res => {
    datas0 = Module.sortData(res.data);
    sum = Module.calculatorTotal(datas0)
}).catch(error => {
    console.log(error);
    console.log("Loi roi");
})

module.exports.search = function(req, res){  
    const countryName =  req.query.countryName;
    if(countryName !== undefined && countryName !==""){
        let datas = datas0.filter(data=>data.country.toUpperCase() === countryName.toUpperCase());
        res.render('home',{datas:datas, countryName:countryName,sum:""})
    }  
    
    else{
        res.render('home',{datas:datas0, countryName:"", sum:sum})
    }
}

module.exports.home = function (req, res){                   
    res.render('home',{datas:datas0, countryName:"", sum:sum})
}