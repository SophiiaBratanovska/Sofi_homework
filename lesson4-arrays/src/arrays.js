const numbArray = [1, 5, 100, 150];
const numbArray2 = [200, 900, 400, 100];
const stringArray = ["A", "b", "C", "d"];
const boolArray = [true, true, false, false];
const anytypeArray = [true, "F", 55, 11];

console.log("--------.find-----------");
const foundNumber = numbArray.find(num => num < 6);
console.log(".find 1st number in array < 6: ", foundNumber); 

console.log("--------.filter-----------");
const filterNumber = numbArray.filter(numb => numb >= 100);
console.log(".filter Filtered numbers:", filterNumber);

console.log("--------.sort-----------");
const sortedNumbers = [...numbArray2].sort((a, b) => a - b);
console.log(".sort Sorted numbers:", sortedNumbers);

console.log("--------.includes-----------");
const hasC = stringArray.includes("C");
console.log(".includes has C:", hasC);

console.log("--------.join-----------");
const joinedString = anytypeArray.join("; ");
console.log(".join Joined String:", joinedString);

console.log("--------.concat-----------");
const concatArray = numbArray.concat(numbArray2);
console.log(".concat array:", concatArray);


console.log("--------.map & .forEach-----------");
console.log(".forEach !bool:");
boolArray.forEach(bool => console.log(!bool));
console.log(".map Bool in text:");
console.log(boolArray.map(bool => bool ? "Yes" : "No"));

console.log("--------typeof-----------");
anytypeArray.forEach(element => console.log(typeof element));
console.log(".map sting:", anytypeArray.map(element => String(element)));

console.log("--------.forEach-----------");
numbArray.forEach(n => console.log("forEach + 1 = " + (n + 1)));
console.log("map +100:", numbArray.map(n => n + 100));

console.log("-------Numbers array------------");
const numbers = [10, 20, 30];
console.log("Default Array:", numbers);

numbers[1] = 25;
console.log("[1] = 25:", numbers);

numbers.push(40);
console.log(".push(40)", numbers);

const lastElement = numbers.pop();
console.log(".pop()", lastElement, "Array:", numbers);

const firstElement = numbers.shift();
console.log(".shift ", firstElement, "Array:", numbers);

numbers.unshift(5);
console.log(".unshift Add 5:", numbers);
