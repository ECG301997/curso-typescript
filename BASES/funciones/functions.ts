(()=>{

    const hero:string = 'Flash';

    function returnName():string {
        return hero;
    }


    const activateBatisignal = ():string =>{
        return 'Batiseñal activada!';
    }


    console.log(typeof activateBatisignal);
    

    const heroname = returnName();

    console.log(heroname);
    




})()