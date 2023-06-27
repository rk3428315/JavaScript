// let arr = [184,587,978,63,377,21,45];
// let startPoint = arr[1];
// let endPoint = arr.length-1;
// let middleIndex = Math.floor((startPoint + endPoint)/2);
// let targetValue = 

// binarySearch = () => {

// }

let arr = [184,587,978,63,377,21,45];
// To iterate the first loop
minimunNumber = () => {
    let n = arr.length
    for(let i = 0; i < n; i++){
        // Store i in min
        let min = i;
        // To iterate the second loop for the find the smallest value from index 1 to array length and 
        for(j = i+1; j < n; j++){
            console.log(arr[j]);
            // Check the if i element is smaller than the j element then don't swape
            if(arr[i] < arr[j]){
                //console.log(arr[i]);
            }
            // Check the if i element is greater than the j element then swape with i element
            if(arr[i] > arr[j]){
                var store = arr[j];
                arr[j] = arr[i];
                arr[i] = store;
                //console.log(arr[i]);
            }
        }
        // Check the if i element is smaller than the  min value then swape with the i element
        if(min > arr[i]){
            var store1 = min
            min =arr[i];
            arr[i] =store1;
        }
        console.log(arr);            
    }    
    return arr;
}
minimunNumber();


// function selectionSort(inputArr) { 
//     let n = inputArr.length;
        
//     for(let i = 0; i < n; i++) {
//         // Finding the smallest number in the subarray
//         let min = i; // 0
//             for(let j = i+1; j < n; j++){
//             if(inputArr[j] < inputArr[min]) {
//                 min=j;//1
//             }
//          }
//          if (min != i) {
//              // Swapping the elements
//              let tmp = inputArr[i]; 
//              inputArr[i] = inputArr[min];
//              inputArr[min] = tmp;      
//         }
//         console.log(inputArr)
//     }
//     return inputArr;
// }
// selectionSort(arr)




