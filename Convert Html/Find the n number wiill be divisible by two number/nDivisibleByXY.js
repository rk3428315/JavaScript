// Find the number which is divisible by x and y
divisibleNumber =(x,y,number) =>{
    x = document.getElementById('x').value;
    y = document.getElementById('y').value;
    number = document.getElementById('number').value;
    // To check if number greater than 0 then return true and false
    if(number > 0){
        // To check number is divisible by x and y or not
        return document.getElementById('p').innerHTML = (number % x == 0 && number % y == 0 ? true : false);
    }
    else{
        document.getElementById('p').innerHTML = "Number is less than 0.";
        console.log("Number is less than 0.");
    }    
}