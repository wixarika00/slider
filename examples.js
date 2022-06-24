let myFirstFunction = (name, greeting) => {
    console.log(greeting +  '! Mam na imię ' + name);
};
myFirstFunction('Aga', 'Hello');

let bool = 2 ===2;
    console.log(bool);

let bool3 = 3 !==2;
    console.log(bool3);

let isBiggerThan10 = (number) => {
    if(number>10) {
        console.log('Liczba jest')
    }
    else {
        console.log('Nie jest')
    }
};
isBiggerThan10(1);

let circleLength = (radious) => {
    console.log(2*radious*3.14);
}

for(let i=1; i<=20; i++) {
    circleLength(i);
}
