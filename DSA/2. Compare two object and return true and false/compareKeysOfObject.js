// create a object constructor
function Students(first,last,age){
    // first = document.getElementById('first').value;
    // last = document.getElementById('last').value;
    // age = document.getElementById('age').value;
    // To add the key and value in object
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

const d = new Students("Ajeet","kumar","22");

document.getElementById('d1').value = d.firstName;
document.getElementById('d11').value = d.lastName;
document.getElementById('d111').value = d.age;

const d1 = new Students("Ravi","kumar","22");

document.getElementById('d2').value = d1.firstName;
document.getElementById('d22').value = d1.lastName;
document.getElementById('d222').value = d1.age;

console.log(d,d1);


// compare the two object if object is same then true otherwise false
function compareObject(student, student1) {
    // Define variables to store the the key of object
    let key1 = Object.keys(d);
    let key2 = Object.keys(d1);
    // To check if key length equal then return true otherwise false
    if(key1.length === key2.length){
        // To iterate the object in key variable
        for(let key of key1){
            // To check values of key is the same in student and student1
            if(d[key] === d1[key]){
                document.write('<br>');
                return document.write(true);
            }        
            else{
                document.write('<br>');
                return document.write(false);
            }
        }
        return true;
    }
    return false;        
}
console.log(compareObject(d, d1)); 