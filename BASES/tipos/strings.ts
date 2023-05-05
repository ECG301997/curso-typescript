(() =>{


    const batman:string = 'Batman';
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = `Heroe: Volcan Negro`;

    console.log(`i'm ${batman},`);
    console.log(linternaVerde);
    console.log(volcanNegro);
    console.log(batman[10]?.toUpperCase() || 'No esta presente');
    
    

})();