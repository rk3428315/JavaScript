// To find the HCF and GCD (HFC and GCD are the same thing)
function  hcfandgcd(number, number1) {
    let hcf = 0;
    // To iterate till the end of number and number1
    for (let i = 1; i <= number && i <= number1; i++){
        // To check if number and number1 is divisible by i then store in hcf
       if(number % i == 0 && number1 % i == 0){
            hcf = i;
            //console.log("HCF : ",hcf);
       }
    }
    return hcf;
}
console.log("HCF : ",hcfandgcd(60,50));