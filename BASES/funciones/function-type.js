"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!`;
    // let myFunction;
    // myFunction = 10;
    // console.log(myFunction);
    // let myFunction:(a: number, b: number)=> number;
    // myFunction = addNumber
    // console.log(myFunction(1,2));
    // let myFunction:(a:string)=> string;
    // myFunction = greet
    // console.log(myFunction('Eduardo'));
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction);
})();
