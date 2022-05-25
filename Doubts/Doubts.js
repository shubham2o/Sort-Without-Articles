// Javascript RegExp ^ Quantifier
// EXAMPLE 1 ||
let text = "Is this his";
let pattern = /^Is/g;
let result = text.match(pattern);

document.getElementById("demo").innerHTML = result;


// EXAMPLE 2 ||
let text2 = `
Is this all there 
is`;

let pattern2 = /^is/gmi;
let result2 = text2.match(pattern2);

document.getElementById("demo2").innerHTML = result2;