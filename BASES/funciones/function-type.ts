(()=>{

    const addNumber = (a: number, b: number):number => a + b;

    const greet = (name: string) => `Hola ${name}`;

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
    
    let myFunction:()=> string;
    myFunction = saveTheWorld;
    console.log(myFunction);

})();