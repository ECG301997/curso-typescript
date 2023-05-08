"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo']
    };
    flash = {
        name: 'Clark Kent',
        // age:  60,
        powers: ['Super Fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log(flash.getName());
})();
