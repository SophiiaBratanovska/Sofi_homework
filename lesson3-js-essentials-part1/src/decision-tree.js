let fte = 0.5;
let monthly_salary = 1000;
let bonus = 50;

if (fte > 1) {
    console.log('Salary + bonus = ' + ((monthly_salary * fte) + bonus));
} else if (fte === 1) {
    console.log('Fixed salary = ' + monthly_salary);
} else if (fte === 0) {
    console.log('Invalid fte value (cannot divide by zero)');
} else {
    console.log('Part time salary = ' + (monthly_salary * fte)+' $');
}

let category1 = false;
let category2 = false;
        
    if (category1 && category2) {
        console.log('2 categories');
    } else if (category1 || category2) {
        console.log('1 or 2 category');
    } else {
         console.log('No categories');
     }