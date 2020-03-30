const URL = "https://corona.lmao.ninja/countries?fbclid=IwAR1TTX3mRazjhJ0wF7gPFrf9KyeR-lq-A1Il29QrJ7DiOlqma4oREEH_nq0"


const cc = require('./index')
console.log(typeof cc)
module.exports.search = function(req, res){  
    const countryName =  req.query.countryName;
    // console.log(datas)       
    if(countryName !== undefined && countryName !==""){
        res.render('./views/home',{datas:datas.filter(data=>data.country === countryName)
            ,countryName:countryName})
    }  
    res.render('home',{datas:datas,countryName:""})

}

module.exports.home = function (req, res){                   
    res.render('home',{datas:datas,countryName:""})
}