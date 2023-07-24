// find the leap years
findLeap = (number) =>{
    if(number >= 2000){
        
        if(number % 4 == 0){
            console.log(`This is the leap years : ${number}`)
        }
        else{
            console.log(`This is not the leap years : ${number}`)
        }
    }
    else{
        console.log(`This the not the greater than 2000 : ${number}`)
    }
}
findLeap(2200);