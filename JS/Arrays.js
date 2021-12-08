const countries = [{
    "name": "Afghanistan",
    "region": "Asia",
    "population": 38928341,
    "area": 652230.0
  }, {
    "name": "Brazil",
    "region": "Americas",
    "population": 212559409,
    "area": 8515767.0
  }, {
    "name": "China",
    "region": "Asia",
    "population": 1402112000,
    "area": 9640011.0
  }, {
    "name": "Egypt",
    "region": "Africa",
    "population": 102334403,
    "area": 1002450.0
  }, {
    "name": "Estonia",
    "region": "Europe",
    "population": 1331057,
    "area": 45227.0
  }, {
    "name": "India",
    "region": "Asia",
    "population": 1380004385,
    "area": 3287590.0
  }, {
    "name": "Malawi",
    "region": "Africa",
    "population": 19129955,
    "area": 118484.0
  }, {
    "name": "Poland",
    "region": "Europe",
    "population": 37950802,
    "area": 312679.0
  }, {
    "name": "Romania",
    "region": "Europe",
    "population": 19286123,
    "area": 238391.0
  }]

const populationOver = countries.filter((pais)=>
  pais.population >= 100000000
);

const NomeandRegionOnly = countries.map((pais)=>{
    return {"nome" : pais.name, "region" : pais.region}
});

const seekEurope = countries.every((pais)=>
    pais.region === "Europe"
);


const SomaPop = countries.filter((pais)=>
pais.region === "Europe").reduce((total,num)=>          
    total + num.population
,0);
const MediaPop = SomaPop/(countries.length);

const primeiroAfrica = countries.find(pais=>
    pais.region ==="Africa"

);

const regionAsia = countries.filter((pais)=>
    pais.region ==="Asia"
);

const TotalArea = countries.reduce((total,num)=>          
    total + num.area
,0);
/////////////////////////////////////
/////////////////////////////////////
const personagens = [{
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male"
}, {
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a"
}, {
    "name": "R2-D2",
    "height": "96",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a"
}, {
    "name": "Darth Vader",
    "height": "202",
    "mass": "136",
    "hair_color": "none",
    "skin_color": "white",
    "eye_color": "yellow",
    "birth_year": "41.9BBY",
    "gender": "male"
}, {
    "name": "Leia Organa",
    "height": "150",
    "mass": "49",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "female"
}, {
    "name": "Obi-Wan Kenobi",
    "height": "182",
    "mass": "77",
    "hair_color": "auburn, white",
    "skin_color": "fair",
    "eye_color": "blue-gray",
    "birth_year": "57BBY",
    "gender": "male"
}, {
    "name": "Yoda", 
    "height": "66", 
    "mass": "17", 
    "hair_color": "white", 
    "skin_color": "green", 
    "eye_color": "brown", 
    "birth_year": "896BBY", 
    "gender": "male"
}, {
    "name": "Palpatine", 
    "height": "170", 
    "mass": "75", 
    "hair_color": "grey", 
    "skin_color": "pale", 
    "eye_color": "yellow", 
    "birth_year": "82BBY", 
    "gender": "male"
}];

const undefinedGender = personagens.filter((pers)=>
    pers.gender === "n/a"
);

const personagemMassaMenorque30 = personagens.every((pers)=>
    pers.mass <= 30
);

const sumMasses = personagens.reduce((total,num)=>          
total + parseInt(num.mass)
,0);
const mediaMasses = sumMasses / (personagens.length);

const sumHeight = personagens.reduce((total,num)=>          
total + parseInt(num.height)
,0);
const mediaHeight = sumHeight / (personagens.length);

const firstFemale = personagens.find(pers => pers.gender === "female");

const persAlturaMaiorque150 = personagens.filter(pers =>
    parseInt(pers.height) >= 150 
);

const somaDosMassaMaiorque50Males = personagens.filter(pers =>
    pers.mass >= 50 && pers.gender === "male"
).reduce((total,num)=>          
total + parseInt(num.height)
,0);

const mediadosmachomairoque50 = somaDosMassaMaiorque50Males / personagens.filter(pers =>
    pers.mass >= 50 && pers.gender === "male").length; 
console.log(mediadosmachomairoque50);

