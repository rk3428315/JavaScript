// To find the century number
calclateCentury =(number) =>{
    // To check if number is less than 100 
    if(number < 100){
        console.log(`Century not found : ${number}`);
    }
    // To check if number is greater than 100 then find the century number
    else{
        let century = number / 100;
        console.log(`Century of Number : ${century}`);
    }
}
calclateCentury(90);