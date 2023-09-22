// find the leap years
findLeap = (number) =>{
    number = document.getElementById('number').value;
    if(number >= 2000){
        
        if(number % 4 == 0){
            document.getElementById('leap').value = `${number} leap years`;
            console.log(`This is the leap years : ${number}`)
        }
        else{
            document.getElementById('leap').value = `${number} not the leap years`;
            console.log(`This is not the leap years : ${number}`)
        }
    }
    else{
        document.getElementById('leap').value = `${number} not the greater than 2000`;
        console.log(`This the not the greater than 2000 : ${number}`)
    }
}
