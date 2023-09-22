
// // To change the dynamic number 
// dynamicChange = () =>{
//     //console.log(change)
//     return 2;
// }
// dynamicChange();

// // To find the Caesar Cipher
// rot13=(arr)=>{
//     var str ="";
//     // Define array from a to z
//     let array = "abcdefghijklmnopqrstuvwxyz";
//     // Define the variable to store the sum and substraction of i and 13
//     let sum = 0;

//      // To iterate the till the length of arr
//     for(j = 0; j<arr.length; j++){
//         if(arr[j]== " "){
//             //sum = i + " ";
//             str += arr[j]; 
//         }
//         // Loop to iterate the value of array till the length
//         for(i =0; i < array.length; i++){

//             //console.log(array2[j]);
//             // To check if i will be less than and qual to 12                      
//             if(i <= 26){

//                 // To check arr qual to array element or not
//                 if(arr[j] == array[i]){

//                     // Store the sum of i + dynamic change of number
//                     sum = i + dynamicChange() ;
//                     //console.log(sum);
//                     str += array[sum];
//                 }
//             }

//             // // To check if i will be greater than 12
//             else{

//                 // To check arr qual to array element or not
//                 if(arr[j] == array[i]){

//                     // Store the sum of i - dynamic change of number
//                     sum = i - dynamicChange(); 
//                     str += array[sum];
//                 }
//             }            
//         }
//     }
//     return str;
// }

// console.log(rot13("acde")); //ravi kumar  , nlrt vqxln





var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
var rot13Alphabet = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".split("");


function caesar(sample) {

	sample = document.getElementById('sample').value;
	var result = "";

	for (var x = 0; x < sample.length; x++) {
		if (sample[x] == " ") {
			result += " ";
		}

		for (var y = 0; y < alphabet.length; y++) {
			if (sample[x] == alphabet[y]) {

				result += rot13Alphabet[y];
			}
		}
		if (!alphabet.includes(sample[x])) {
			console.log("this is not match",sample[x])
			result += sample[x];
			console.log("store", result);
		}
	}
	return document.getElementById('Result').value = result;
}


