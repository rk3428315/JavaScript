// let arr = [184,587,978,63,377,21,45];
// let startPoint = arr[1];
// let endPoint = arr.length-1;
// let middleIndex = Math.floor((startPoint + endPoint)/2);
// let targetValue = 

// binarySearch = () => {

// }

let inputArr = [184,5870,978,63,377,21,45];

function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i; // 0
        
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j;//1
            }
            console.log(inputArr)
        }
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
        console.log(inputArr)
    }
    return inputArr;
}
selectionSort(inputArr)




