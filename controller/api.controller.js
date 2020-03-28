const datas = require('../index.js')
console.log(datas)
module.exports.search = function(req, res){  
    const countryName =  req.query.countryName;
    console.log(datas)       
    if(countryName !== undefined && countryName !==""){
        res.render('./views/home',{datas:datas.filter(data=>data.country === countryName)
            ,countryName:countryName})
    }  
    res.render('home',{datas:datas,countryName:""})

}

module.exports.home = function (req, res){                   
    res.render('home',{datas:datas,countryName:""})
}