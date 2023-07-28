// To find the century number
calclateCentury =(number) =>{
    number = document.getElementById('number').value;
    // To check if number is less than 100 
    if(number < 100){
        console.log(`Century not found : ${number}`);
        document.getElementById('century').value = `${number} years`;
    }
    // To check if number is greater than 100 then find the century number
    else{
        let century = number / 100;
        document.getElementById('century').value = `${century} century`;
        console.log(`Century of Number : ${century}`);
    }
}
