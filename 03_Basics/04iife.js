// Immediately inovoked function expression (IIFE)

(function chai(){     // named IIFE
    console.log(`DB connected`);
})();

( (name) => {         // general IIFE
    console.log(`this is ${name}`);
})("ashish")