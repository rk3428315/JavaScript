// String 

let name = "Astha Bharati"; //not count the spaces in index value
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);

//Template literals
let boy1 = "Astha";
let boy = "Prachi";
console.log(`${boy1} is the sister of ${boy}`);

//Escape Sequence Characters

let fruit = 'Bana\'na';   //add single or double code between string
let fruit1 = 'Bana\nna'; //break after the \n
let fruit2 = 'Bana\rna'; //add a new line                         //doubt
let fruit3 = 'Bana\tna'; //add a tab space after the \t
console.log(fruit,fruit.length);
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

// Function of string
//never change string only can return new string (immutable)
console.log(boy.toUpperCase());     //To upper case
console.log(boy.toLocaleLowerCase());   //To lower case
console.log(boy.slice(3,5));   //To cut or remove charecters in string 
console.log(boy.slice(1)); 
console.log(boy.replace("Prachi","Shakshi")); // To replace string and should be string no number

let friend = "Prachi";
console.log(name.concat(" is a friend of ", friend)); //To concat string
{
    let friend = "   Prachi   ";
    console.log(friend.split());
    console.log(friend);
    console.log(friend.trim()); //To remove spaces
}
let arrayChange = friend.split();     //change string to array   doubt
console.log(arrayChange , typeof arrayChange);
for(let i = 0; i < arrayChange.length;i++){
    console.log(arrayChange[i].split());
}



//Practice set of string 

console.log("har\"".length);

//includes ,startwith, endWith

let textt = "Hello world";
let texttt = "All good";
let result = textt.endsWith("world");   //Only return true or false
console.log(result);
console.log(texttt.toUpperCase());

let result1 = textt.startsWith("Hello");
console.log(result1);

console.log(textt.includes(texttt));    //to check string is available or not

let str = "Please give Rs 1000";
console.log(str.slice("Please give Rs".length));

let str1 = "Vedant";
console.log(str1.replace("a","aa"))









