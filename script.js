//VOICI UN OBJET JS, NON VALIDE EN JSON

let myJsObject = {
    espèce: "Dog",
  race: "Labrador Retriever",
  couleur: "Yellow",
  âge: 6,
  enVie: true,
}

console.log(myJsObject);
  
let myJsObjectImbrique = {
    Animal: {
        viande:"chien",
        species: "dog",
        breed: "Labrador Retriever",
        age: 6,
        traits: {
          eyeColor: "brown",
          coatColor: "yellow",
          weight: "137lbs"
        }
    }
  }

// ON PEUT TRANSFORMER EN JSON UN OBJET JS 

let myNewJSON = JSON.stringify(myJsObjectImbrique);

console.log(myNewJSON);

//ON PEUT FAIRE L'inverse

let myJSON = '{"Animal":{"species":"Dog","breed":"Labrador Retriever","age":6,"traits":{"eyeColor":"brown","coatColor":"yellow","weight":"137lbs"}}}';

console.log(myJSON)
let myNewJsObject = JSON.parse(myJSON);
console.log(myNewJsObject);

//ON PEUT MODIFIER UN JSON TOUT EN LE CONVERTISSANT EN OBJET JS
let myNewJsObject2 = JSON.parse(myJSON, function(name,value){
    if(name === 'species'){
        value= 'Cat';
    }
    return value;
});

console.log(myNewJsObject2);

// NB: LORDRE DES VALEURS DE LOBJET JS EST TOTALEMENT MODIFIE 


// ON PEUT UTILISER LA NOTATION AVEC POINT POUR ATTEINDRE LA VALEUR QUE LON VEUT DANS L'OBJET

console.log(myNewJsObject2.Animal.age);

//ON PEUT MODIFIER L'OBJET EN LE POINTANT 

myNewJsObject2.Animal.age = 7;

console.log(myNewJsObject2.Animal.age);

delete myNewJsObject2.Animal.traits.eyeColor;

console.log(myNewJsObject2.Animal.traits);

myNewJsObject2.Animal.traits.cuddly = true;

console.log(myNewJsObject2.Animal.traits);