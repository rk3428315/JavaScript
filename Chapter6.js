//Q 1------------------------

let age = prompt("Please enter age");       // Show a popup to enter input 
age = Number.parseInt(age);                 // Only can enter number type value in age 

let canDrive2 = (age) =>{                    // this function rerturn if age is greater than or equal to 18
    return age >= 18 ? true: false;
}

if(canDrive2(age)){                          //condition to check age is equal to or greater than 18 or not 
    alert ("You can drive.");
}
else{
    alert ("You can not drive.");
}

// Q 2-----------------------------

 
let runAgain = true;                        // Inislize a variable to conform input value

let canDrive = (age) =>{                    // this function rerturn if age is greater than or equal to 18
    return age >= 18 ? true: false;
}
while(runAgain){

    let age = prompt("Please enter age");       // Show a popup to enter input 
    age = Number.parseInt(age);                 // Only can enter number type value in age    


if(canDrive(age)){                          //condition to check age is equal to or greater than 18 or not 
    alert ("You can drive.");
}
else{
    alert ("You can not drive.");
}
   runAgain = confirm("You want to give input again !")     // To conform a popup to show the input popup again
}

// Q 3 -----------------------------

let runAgain1 = true;                        // Inislize a variable to conform input value

let canDrive1 = (age) =>{                    // this function rerturn if age is greater than or equal to 18
    return age >= 18 ? true: false;
}
while(runAgain){

     let age = prompt("Please enter age");       // Show a popup to enter input 
     age = Number.parseInt(age);                 // Only can enter number type value in age    


if(canDrive1(age)){                          //condition to check age is equal to or greater than 18 or not 
     alert ("You can drive.");
 }
 else if(age <0){                           // Condition to don't enter negative number otherwise it will breack 
     console.error("Please enter a valid age");
     break;
 }
 else{
     alert ("You can not drive.");
 }
    runAgain1 = confirm("You want to give input again !")     // To conform a popup to show the input popup again
 }


//Q 4--------------------

let number = prompt("Enter number");
number =Number.parseInt(number)
if(number > 4){                                        //Condition to redirecte on google website
    location.href = "https://google.com"
}
else{
    console.error("Found a error")
}

//Q 5--------------------

let color = prompt("Enter color name")          // Show a popup to enter input of color name 
document.body.style.background = color;         // To show the background color of body 