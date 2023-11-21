var countrieslist = [
    {countrie: "Afganistanas", area: 652864, people: 38346720 },
    {countrie: "Airija", area: 70273, people:  5123536 },
    {countrie: "Albanija", area: 28748, people: 2845955 },
    {countrie: "Alžyras", area: 238174, people: 44700000 },
    {countrie: "Austrija", area: 83879, people: 8935112 }
]

for(var i = 0; i < countrieslist.length; i++){

    average(countrieslist[i].countrie, countrieslist[i].area, countrieslist[i].people)
}

function average(countrie, area, people){

    var populationMillions = (people / 1000000).toFixed(2)

    var km2 = (people / area ).toFixed(2)

    var m2 = (km2 * 100000).toFixed(2)

    console.log(`Šalis: ${countrie}, joje gyvena: ${populationMillions} mln. gyventojų. Valstybės plotas: ${area} km², Plotas tenkantis vienam gyventojui: ${m2} m² `)
}