(()=>{


    const fullName = (firstName:string, lastName:string): string =>{
        return `${firstName} ${lastName}`
    }

    const name = fullName('Eduardo','Cadavid');

    console.log({ name });
    
})();