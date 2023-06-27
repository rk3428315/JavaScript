
let arr = [184,587,978,63,377,21,45,12,83587];

//function to find the smallest value and swape the value squencewise
minimunNumber = (arr) => {
    let n = arr.length;
    // loop to iterate the one by one 
    for(let i = 1; i < n; i++){
        // loop to iterate the value if the i index one by one
        for(j = 0; j < i; j++){
            console.log(arr[j]);
            // To check the if element j is greater than i then swape the element 
            if(arr[i] < arr[j]){                
                var store = arr[i];
                arr[i] = arr[j];
                arr[j] = store;
                //console.log(n[i]);
            }
            // To check the if element i is greater than j then not swape the element 
            if(arr[i] > arr[j]){
                console.log(arr[i]);
                //return n[j];
            }
        }        
        console.log(arr)  
    }  
    return arr
}
minimunNumber(arr);