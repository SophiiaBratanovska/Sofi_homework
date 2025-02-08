const numbArray = [1, 5, 100, 150];
const numbArray2 = [200, 900, 400, 100];
const stringArray = ["A", "b", "C", "d"];
const boolArray = [true, true, false, false];
const anytypeArray=[true, "F", 55, 11];

const foundNumber = numbArray.find(num => num < 6);
console.log("1st number in array < 6: ", foundNumber); 

console.log("-------------------");
const filterNumber = numbArray.filter(numbArray =>numbArray >= 100 )
console.log("Filtered numbers:", filterNumber);

console.log("-------------------");
const sortedNumbers = [numbArray2].sort((a, b) => a - b);
console.log("Sorted numbers:", sortedNumbers); 

console.log("-------------------");

const hasC = stringArray.includes("C");
console.log("Has C:", hasC); 

console.log("-------------------");
const joinedString = stringArray.join();
console.log("Joined String:", joinedString); 

console.log("-------------------");
const concatArray = numbArray.concat(numbArray2);
console.log(concatArray);
const combined = concatArray.concat(stringArray, boolArray);
console.log(combined);

console.log("--------------------");
boolArray.forEach(bool => console.log(!bool)); 
console.log(boolArray.map(bool => bool ? "Yes" : "No"));

console.log("--------------------");
anytypeArray.forEach(element => console.log(typeof element));
console.log(anytypeArray.map(element => String(element)));

console.log("--------------------");
numbArray.forEach(n=> console.log ("forEach + 1 = " + (n + 1)));
console.log("new array + 100 = " + numbArray.map(n => n + 100));
