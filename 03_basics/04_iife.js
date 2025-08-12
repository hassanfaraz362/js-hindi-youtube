// Immediately Invoked Fuction Expression

(function chai(){
    // named Iife
    console.log(`DB Connected`);
    
})();

( (name) =>{
    console.log(`DB Connected Two ${name}`);
    
})("hassan")