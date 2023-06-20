// Q 1
// Create a function that will recieved two arrays and will return any array with elements that are in the first array but not in the second Array.

    combineTwoArray = () => {

    // Declared two arrays
    let array = [1, 2, 5, 20, 40, 45, 100, 101];
    // To show the data of array in table formate
    document.getElementById('tb1').innerHTML +=array
    let array1 = [-10, 5, -5, 2, 4, 5, 6, 8, 12, 100, 101];
    // To show the data of array1 in table formate
    document.getElementById('tbl2').innerHTML+=array1;
    // To store pushed array value in result variable
        let result=[];
    // Looping the array variable to print till the end of array length   
        for (i = 0; i < array.length; i++) {
    // Variable if isAvailable is false
            var isAvailable = false;

            for (j = 0; j < array1.length; j++) {

                if(array[i] == array1[j]){
                    // console.log(array1[j]+"array j")
                    isAvailable= true;
                    break;                              
                }            
            }
            if(!isAvailable){
                result.push(array[i]);
                console.log(result);
                // let tr = `<tr>
                // <td>`+ `${i}`+`</td>
                // <td>`+ `${array[i]}`+`</td>
                // <td>`+ `${array1[j]}`+`</td>
                // <td>`+ result+`</td>
                // </tr>`
                // document.getElementById('td').innerHTML += tr;

                // To show the data of result in table formate
                document.getElementById('tbl3').innerHTML+=result;
            }      
        }
    }
    combineTwoArray();

// Q 2
// Print the distance between the first 100 prime Number.

// function created
function countWords(text) {
    // wordCount variable created and value 0 assigned
    let wordCount = 0;
    // isWord boolean variable created
    let isWord = false;
    // loop will run till text lenght
    for (let i = 0; i < text.length; i++) {
        console.log(text[i]+"length inside the loop")
        if (text[i] !== ' ' && text[i] !== '\n' && text[i] !== '\t') {
            if (!isWord) {
                wordCount++;
                isWord = true;
            }
        } else {
            isWord = false;
        }
    }

    return wordCount;
}


// Q 3
// Create function that will retrun the number of words in a text.
retrunNumberOfWord = (text)=>{
    // wordCount variable created and value 0 assigned
    let word = false;
    let wordCount = 0;
    // loop will run till text lenght
    for(i =0; i < text.length; i++){
        //console.log(text[i]);
        if(text[i] !=" "&& text[i] !="\n" && text[i] !="\t"){   
           if(!word){
        // wordCount increment 1 if condition true
            wordCount++;
            word =true;
           }
        }  
        else{
            word=false;
        }       
    }
    return wordCount;
}
// Variable to contain value of string
const text = "Hi I'm Anand from Jalalabad lldkk . ";
const input = retrunNumberOfWord(text);
// print input value
console.log(`Word count is ${input}`);





returnNumberOfText = (n) => {

    console.log(n.length);
    // To convert n length variable into string
    n = toString(n);
}
//returnNumberOfText("Hi guys");



//Q 4
// Create a function tha will capitalize the first letter of each word in text.


capitalizeWord= ()=>{  

    var c;
let capitalizeArray =["hi", "anand", "how", "you"];
// Loop to print capitalizArrray till the length
for(i = 0; i<capitalizeArray.length;i++ )    
// To captalize first letter of each word from array
console.log(capitalizeArray[i][0].toUpperCase() +capitalizeArray[i].slice(1));
}
capitalizeWord();




// Q 5
// Calculate the sum of number recieved in comma string.

//variable to store sum of arrays
let sumOfArray1 = 0;
let str = "1.5, 2.5, 3.5, 2.8, 10, 12, 0.5, 6.0, 11, 12, 19, 20.0";
// 
let myArray = str.split(",");
// To compare index of array
var i =0;
// Loop for print string  
while (i < myArray[5]) {
    // To convert string to float number
    let x =parseFloat(myArray[i]);
    console.log(x)
    // To sum total value of x
    sumOfArray1 +=x
    console.log(sumOfArray1, typeof sumOfArray1)
    i++;    
}



