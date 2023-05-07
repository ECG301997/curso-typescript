(()=>{


    const fullName = (firstName:string, lastName?:string, upper:boolean = false): string =>{
        if(upper){
            return `${firstName} ${lastName}`.toUpperCase();
        }else{
            return `${firstName} ${lastName}`.toLowerCase();
        }
    }

    const name = fullName('Eduardo','Cadavid',false);

    console.log({ name });
    
})();