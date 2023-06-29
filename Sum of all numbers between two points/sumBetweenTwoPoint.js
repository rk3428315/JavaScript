// Define a variable to add numbers
let sum = 0;
// function to add whole numbers between two points
sumBetweenTwoPoint=(startPoint,endPoint)=>{
    // Loop to iterate the number from startPoint to endPoint
    for(let i = startPoint; i <= endPoint; i++){
        // add the number one by one
        sum +=i;
    }
    console.log("Sum of numbers = ",sum)
}
sumBetweenTwoPoint(4,20);