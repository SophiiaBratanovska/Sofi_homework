let fte = 0.5;
let monthly_salary = 1000;
let bonus = 50;

switch (fte) {
    case 1.5:
        console.log('Salary + bonus = ' + ((monthly_salary * fte) + bonus) + ' $');
        break;
    case 1:
        console.log('Fixed salary = ' + monthly_salary + ' $');
        break;
    case 0:
        console.log('Invalid fte value (cannot divide by zero)');
        break;
    default:
        console.log('Part time salary = ' + (monthly_salary * fte) + ' $');
}

let category_a = true;
let category_b = false;

switch (category_a + ' ' + category_b) {
    case 'true true':
        console.log('2 categories');
        break;
    case 'true false':
    case 'false true':
        console.log('Only 1 category added');
        break;
    default:
        console.log('No categories');
}