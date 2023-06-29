let arr = [23,43,33,64,75]
let start = 0;
let end = arr.length-1;

splitSubArray =()=>{
    for(i =0; i == start; i++){
    let middle =Math.floor((start + end)/2);  
    console.log(arr[middle]);
    }
}
splitSubArray()