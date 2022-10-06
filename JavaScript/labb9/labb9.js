const array1 = [{name: 'James', age: 39, height: 189},
                {name: 'Brad', age: 19, height: 175},
                {name: 'Carl', age: 29, height: 157},
                {name: 'Xerxes', age: 49, height: 178},
                {name: 'Ricky', age: 59, height: 205},
                {name: 'Beth', age: 69, height: 172},
                {name: 'Alex', age: 79, height: 201},
                {name: 'Niels', age: 89, height: 187},
                ]

console.log(array1);

const array2 = [{name: 'Nicola', age: 39, height: 210},
                {name: 'Gar', age: 39, height: 179},
                {name: 'Ascension', age: 39, height: 180},
                {name: 'Eve', age: 18, height: 152},
                ]

                
console.log(array2);

// array2 = [...array2, ...array1]; 
// Not using due to keeping array2 a const.

array2.push(...array1);

console.log(array2);

const tallOnes = array2.filter( person => person.height > 200 );

console.log(tallOnes);

// array2.forEach( function(person) {
//     if(person.height > 200){
//         console.log(person);
//     }});
// Sanity check...

array2.forEach(person => (person.height > 200) ? console.log(person) : false);


let parameter = 2;

switch(parameter){
    case 0:
        console.log('\"Nisse\"');
        break;
    case 1:
        console.log('\"Per\"');
        break;
    case 2:
        console.log('\"Johannes\"');
        break;
    case 3:
        console.log('\"Joakim\"');
        break;
    default:
        console.log('\"Hans\"');
};

switch(true){
    case (parameter === 0):
        console.log('\"Umeå\"');
        break;
    case (parameter >= 1 && parameter <= 5):
        console.log('\"Stockholm\"');
        break;
    case (parameter >= 6 && parameter <= 9):
        console.log('\"Mora\"');
        break;
    case (parameter >= 10 && parameter <= 14):
        console.log('\"Västerås\"');
        break;
    case (parameter >= 15 && parameter <= 19):
        console.log('\"Göteborg\"');
        break;
    default:
        console.log('\"Malmö\"')
};
 
// Bara skämtade lite med fnuttarna...