(()=>{

    // argumento con ? significa que es opcional
    const fullName = (firstName:string, lastName?:string): string =>{
        return `${firstName} ${lastName}`
    }

    const name = fullName('Eduardo');

    console.log({ name });
    
})();