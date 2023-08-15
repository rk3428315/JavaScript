// Define a variable to add numbers
let sum = 0;
// function to add whole numbers between two points
sumBetweenTwoPoint=(startPoint,endPoint)=>{
    startPoint = parseInt(document.getElementById('start').value) 
    endPoint = parseInt(document.getElementById('end').value)
    // Loop to iterate the number from startPoint to endPoint
    for(let i = startPoint; i <= endPoint; i++){
        // add the number one by one
        sum +=i;
    }
    document.getElementById('sum').innerHTML = "Sum of all number : "+sum;
    console.log("Sum of numbers = ",sum)
}