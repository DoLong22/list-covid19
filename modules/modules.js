module.exports.sortData = function (data){
    return data.sort((data1, data2) => {
        return data1.cases - data2.cases;
    }).reverse()
}
module.exports.calculatorTotal = function(data){
    return data.reduce((total,countryB)=>{
        total.todayCases += countryB.todayCases;
        total.cases += countryB.cases;
        total.deaths += countryB.deaths;       
        return total
    },{todayCases:0,cases:0,deaths:0})
}