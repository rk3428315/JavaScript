const person = {
    
    firstName: 'Ravi',
    lastName: 'Kumar',
    
};

// To update the property if exist otherwise add new
if(Object.keys(person)){
    // Object.assign function is use to get copy the value and properties from other objec
    // to target object and also use to get and set the object.
    Object.assign( person, { firstName: "Ajeet",age: 22});
}
console.log(person);

