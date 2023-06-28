// Q 1

// Calculate the first 100 prime number

let number = 2;

let collectPrimeNumber = [1];

do {  
    function isPrime(num){
     // To get squarroot of num
     var sqrtnum = Math.floor(Math.sqrt(num));
     // If num is not qual to 1
     var prime = num != 1;
     // Loop to print if i value is less than squrtnum then add 1 in sqrtnum
     for (var i = 2; i < sqrtnum + 1; i++){
         // If remaind 0 after divide the num to i then prime will be false otherwise return true
         if (num % i == 0) {
             // return true 
             prime = false;
             break;
            }
        }
     return prime;
    }
    // If isPrime
    if (isPrime(number)) {
        collectPrimeNumber.push(number);
    }
    number++;   
    // console.log(number);

}     // To print collectPrimeNumber till 100 prime number
while (collectPrimeNumber.length < 100){

    let sumPrimeNumber = 0;
    // To print collectPrimeNumber till the collectPrimeNumber of length
    for (var x = 0; x < collectPrimeNumber.length; x++) {
    console.log(collectPrimeNumber[x]);    
    }
    
    console.log('all sum of prime number is' + ' ' + sumPrimeNumber);
}



// Q 2

// Print reverse string

let ajeet = "AjeetKumar";

for(i = ajeet.length; i >= 0; i--){
    console.log(ajeet[i]);
}

// Q 3

// Find the maxium number of array

maxmiumNumberOfArray = () => {    
    let array = [24, 3, 54, 64, 93, 2];

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

firstPrimNumber =()=>{

    do {  
    // To find isPrime number is true or false
        function isPrime(num){
            // To get squarroot of num
            var sqrtnum = Math.floor(Math.sqrt(num));
            // If num is not qual to 1
            var prime = num != 1;
            // Loop to print if i value is less than squrtnum then add 1 in sqrtnum
            for (var i = 2; i < sqrtnum + 1; i++){
                // If remaind 0 after divide the num to i then prime will be false otherwise return true
                if (num % i == 0) {
                    // return true 
                    prime = false;        
                    break;
                }
            }
            return prime;
        }
        // To check if number is prime then push in collectPrimeNumber 
        if (isPrime(number)) {
            collectPrimeNumber.push(number);
        }
        number++

    // To print collectPrimeNumber till 100 prime number
    } while (collectPrimeNumber.length < 100)
    
        let sumPrimeNumber = 0;
        // To print collectPrimeNumber till the collectPrimeNumber of length
        for (var x = 0; x < collectPrimeNumber.length; x++) {
        console.log(collectPrimeNumber[x],"First prime number.");
    }
}
firstPrimNumber();