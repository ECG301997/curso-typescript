"use strict";
(() => {
    // argumento con ? significa que es opcional
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Eduardo');
    console.log({ name });
})();
