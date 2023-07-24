
let person = {    
    firstName: 'Ravi',
    lastName: 'Kumar',
    age : 22,
    gender: "M"
    
};

let person1 = {    
    firstName: 'Ajeet',
    lastName: 'Kumar',
    gender : "F"
    
};

// //To update the property if exist otherwise add new
// if(person.firstName == person1.firstName || person.firstName != person1.firstName){
//     person.firstName = person1.firstName;
// }
// if(person.lastName == person1.lastName || person.lastName != person1.lastName){
//     person.lastName = person1.lastName;
// }
// console.log(person);


//Store two object in single object

let men = {
    // This will use to merge the object and also remove the dublicate value
    ...person,
    ...person1
}
 console.log(men);
