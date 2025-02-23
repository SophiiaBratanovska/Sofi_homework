const sumArrayArrow = (arr: (number | string)[]): number => {
    let sum = 0;
    for (const item of arr) {
        const num = Number(item);
        if (!isNaN(num)) {
            sum += num;
        }
    }
    return sum;
};

const numberArrayArrow: number[] = [1, 2, 3, 4, 5];
const stringArrayArrow: string[] = ['10', '20', '30', '40', 'qa'];

console.log('numberArrayArrow:', sumArrayArrow(numberArrayArrow));
console.log('stringArrayArrow:', sumArrayArrow(stringArrayArrow));

