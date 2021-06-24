// -------------------------------------------Basic------------------------------------------------------------------
// var crystalGazer = (job_title, location, partner_name, number_children) => `You will be a ${job_title} in ${location} and married to ${partner_name} with ${number_children} children.`;
// console.log(crystalGazer("plumber", "Vienna", "Fat Joe", "three"));

// var ageCalculator = (birth_year, current_year) => {
//     age = current_year - birth_year;
//     return `You are either ${age} or ${age - 1}`;
// }
// console.log(ageCalculator(1994, 2021));

// var ageCalculator_improved = birth_year => {
//     let age = new Date().getFullYear() - birth_year;
//     return `You are either ${age} or ${age - 1}`;
// }
// console.log(ageCalculator_improved(1994));

// var degree_radianConverter = degree => {
//     return degree * (Math.PI/180);
// }
// console.log(degree_radianConverter(90));

// var area_volume_box = (width, height, depth) => {
//     let area = width * height;
//     let volume = width * height * depth;
// return `The area of the box is: ${area}
// The volume of the box is: ${volume}`;
// }
// console.log(area_volume_box(5, 5, 10));

// -------------------------------------------Intermediate------------------------------------------------------------------
// (function() {
//     var sentence = "i am a developer";
//     console.log(
//         sentence[0].toUpperCase() +
//         sentence.slice(1).toLowerCase()
//     );
// })()

// var avgGrad = (math, physics, english) => {
//     let sum = math + physics + english;
//     let avg = sum / 3;
//     let result = [sum , avg];
//     return result; 
// }
// console.log("Sum: " + avgGrad(3, 4, 5)[0]);
// console.log("Average: " + avgGrad(3, 4, 5)[1]);

// -------------------------------------------Advanced------------------------------------------------------------------
// var timeConvert = min => {
//     let hours = Math.floor(min/60);
//     let minutes = min % 60;
//     return `${min} minutes = ${hours} hour(s) and ${minutes} minute(s).`;
// }
// console.log(timeConvert(200));

// -------------------------------------------Advanced------------------------------------------------------------------
var ATM = amount => {
    if(amount % 10 != 0) {
        return `Invalid amount. Try again.`
    }
    let remainder;

    let hundred = Math.floor(amount/100); 
    remainder = amount % 100;
    let fifty = Math.floor(remainder/50); 
    remainder = remainder % 50;
    let twenty = Math.floor(remainder/20); 
    remainder = remainder % 20;
    let ten = Math.floor(remainder/10); 
    
    return `            ${amount} €
    --------------------
    Hundred: ${hundred} piece(s)
    Fifty  : ${fifty} piece(s)
    Twenty : ${twenty} piece(s)
    Ten    : ${ten} piece(s)`
}

console.log(ATM(1220));
