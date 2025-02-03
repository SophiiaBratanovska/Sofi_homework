const a = true;
const b = false;

console.log(a && b); //and
console.log(a || b); //or
console.log(!a);

const c = null;
const d = 5;

const e = c ?? d ?? 4;

console.log(e);

console.log('----------');

const a1 = 2;
const a2 = 3;
const a3 = '2';

console.log(a1 < a2, a1 > a2);
console.log(a1 <= a3);

console.log( a1 == a2);
console.log( a1 == a3);
console.log( a1 === a3); //type + value check

