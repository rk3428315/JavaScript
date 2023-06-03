let word = ["snake", "water", "gun"];                               //Array to choose for game

let user = 0;                                                       // variable of user player 
let computer_user = 0;                                              // variable of computer_user player 
let changes = 0;                                                    // variable to store value of changes


for (let i = 1; i < 11; i++) {                                      // Loop for 10 times repeate

    let random = word[Math.floor(Math.random() * word.length)];         // To choose randamilly value from existing array
    let input = prompt("Please enter anyone (snake, water, gun)");      // Enter value form the user

    if (input == random) {                                              // To check value input and random is same or not
        console.log("Match draw");
        changes++;
    }
    else if (input == "snake" && random == "water") {                   // To check condition if snake is greater than water then user win             
        console.log("You win");
        changes++;
        user++;
    }
    else if (input == "water" && random == "snake") {                   // To check condition if water is greater than snake then computer win   
        console.log("computer win");
        changes++;
        computer_user++;
    }
    else if (input == "gun" && random == "snake") {                   // To check condition if gun is greater than snake then user win 
        console.log("You win");
        changes++;
        user++;
    }
    else if (input == "snake" && random == "gun") {                   // To check condition if gun is greater than snake then computer win 
        console.log("computer win");
        changes++;
        computer_user++;
    }
    else if (input == "water" && random == "gun") {                   // To check condition if water is greater than gun then user win 
        console.log("You win");
        changes++;
        user++
    }
    else if (input == "gun" && random == "snake") {                   // To check condition if gun is greater than snake then You win 
        console.log("You win");
        changes++;
        user++;
    }
    else {
        console.log("This is not valid")                              // To check condition if water is greater than snake then computer win 
    }
}

if (user > computer_user) {                                           // To check condition if user is greater than computer then You win 
    console.log("Finally you win!");
}
else if (user < computer_user) {                                      // To check condition if computer is greater than user then computer win 
    console.log("Finally computer Win!")
}
else if (input == computer_user) {                                    // To check condition if user is qual to computer then Draw 
    console.log("Draw")
} 