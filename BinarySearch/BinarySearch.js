// Search one value using Binary Search function
BinarySearch = (array, targetValue) =>{
    // Define the variable to store start point
    let startPoint = 0;
    // Define the variable to store length of array
    let endPoint = array.length-1;
    // To check 
    while (startPoint <= endPoint) {
        let middleIndex = Math.floor((startPoint + endPoint) / 2);

        if(targetValue == array[middleIndex]){
           return console.log("Target Value = ",array[middleIndex]);
        }
        if(targetValue > array[middleIndex]){
            startPoint = middleIndex +1;
        }
        if(targetValue < array[middleIndex]){
            endPoint = middleIndex - 1;
        }
        else{
            console.log("Value not found !")
        }
    }
}
let array = [1, 649,347,757,87,38447,487];
let target = 649;
BinarySearch(array,target);