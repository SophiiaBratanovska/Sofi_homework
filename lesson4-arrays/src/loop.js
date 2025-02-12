
for (let i=0; i<=10; i++){
    console.log('from 0 to 10 = ' + i);
}

for (let i=100; i>=0; i-=10){
    console.log('from 100 to 0 with step = ' + i);
}

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

let j = 100;
while (j >= 0) {
    console.log(j);
    j -= 10; //j = j - 10
}

let k = 0;
do {
    console.log("do " + k);
    k++;
} while (k <= 10);


let q = 100;
do {
    console.log("do " +q);
    q -= 10;//q = q - 10
} while (q >= 0);