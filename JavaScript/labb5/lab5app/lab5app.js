let names = [];
let again = 'y';

do {
    names.push(prompt('Enter a name to add to your list: '));
    again = prompt('Do you want to add another name? (y/n): ');
} while ( again === 'y');

console.log(names);

let nameToRemove = prompt('Enter a name to remove: ');

let posToRem = names.indexOf(nameToRemove);
names.splice(posToRem,1);

console.log(names);

names.pop();

alert('The last name just popped off!!!');

console.log(names);

let posToChange = prompt('Enter a position (not index) to change: ');
let newName = prompt('Enter the new name: ');
let indToChange = (parseInt(posToChange)-1);
names[indToChange]=newName;
console.log(names);

newName = prompt('Enter a name to add to the list: ');
names.push(newName);
names.sort();
console.log(names);

posToRem = names.indexOf(newName);
alert('The new name is in index ' + posToRem);

names.splice(posToRem,1);
alert('Also, I just removed it!');

console.log(names);

names.forEach((element) => console.log(element) );

alert('And now I just listed all the names in the console! Enjoy!');
