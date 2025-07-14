//Imediatily Invoked Function Expression (IIFE) 
(function user() {
    console.log(`DB connected successfully!`);
})();
// Arrow function IIFE
((name) => {
    console.log(`DB connected successfully!${name}`);
})('Prabhat')