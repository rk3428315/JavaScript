// create a object constructor
function Students(first,last,age) {
    // To add the key and value in object
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

const d = new Students("Ajeet","kumar","22");
const d1 = new Students("Ajeet","kumar","22");
console.log(d,d1);