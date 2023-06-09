// Q 1

// Calculate the first 100 prime number 


// Q 2

// Print reverse string

let ajeet = "AjeetKumar";

for(i = ajeet.length; i >= 0; i--){
    console.log(ajeet[i]);
}

// Q 3

// Find the maxium number of array

maxmiumNumberOfArray = () => {    
    let array = [24, 3, 54, 64, 93, 2]

    // variable to store value of array
    let max = array[0];

    // Loop to print array index that greater than i 
    for (let i = 1; i < array.length; i++) {

        // To check if array index value in greater than max value
        if (array[i] > max) {
            
            // Store array value in max variable
            max = array[i];
        }
    }
    console.log(max);

}
maxmiumNumberOfArray();



// Q 4

// Print the first 100 prime numbers