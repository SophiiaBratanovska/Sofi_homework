function sumArray(arr: (number | string)[]): number {
    let sum = 0;
    for (const item of arr) {
        const num = Number(item);
        if (!isNaN(num)) {
            sum += num;
        }
    }
    return sum;
}

const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ['10', '20', '30', '40', 'qa'];

console.log('Sum numberArray:', sumArray(numberArray));
console.log('Sum stringArray:', sumArray(stringArray));

