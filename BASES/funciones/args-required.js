"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Eduardo', 'Cadavid');
    console.log({ name });
})();
