const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const num = Number(arr[i]);
        if (!isNaN(num)) {
            sum += num;
        }
    }
    return sum;
};

const numberArray = [1, 2, 3, 4, 5];
const stringArray = ["10", "20", "30", "40", "qa"];

console.log("Sum numberArray :", sumArray(numberArray));
console.log("Sum stringArray :", sumArray(stringArray));
