
let gen = Math.random()*100;          // To gernerate random number between 1 to 100
gen = Number.parseInt(x);             // To convert value into number
let input;                            // Input value that give in the at the time of guess
let score = 100;                      // Count variable to use guesses times

// while(input != gen){
//     score -= 1;
//     input = prompt("Enter a number");

//     // If guess number is right then print this condition
//     if(input == gen){
//         console.log("Congratulation! You won.");
//         console.log(`How many times taken to guess the right number : ${100-score}`);

//     } 

//     // If guess number is greater than random value then print this condition
//     else if (input > gen && input < 100) {
//         console.log("Your number is greater than actual number.");

//     } 

//     // If guess number is smaller than random vlaue then print this condition
//     else if (input < gen && input > 0) {
//         console.log("Your number is smaller than actual number.");

//     } 

//     // If guess number is greater than 100 then print this condition
//     else {
//         console.log("Enter number between 1 to 100.")
        
//     }
   
// }