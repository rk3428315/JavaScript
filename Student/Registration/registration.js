var div = document.getElementById('myNavbar');
var display = 0;

// To display the menu on mobile view
function hideShow() {
    if (display == 0) {
        div.style.display = 'block';
        display = 1;
    }
    else {
        div.style.display = 'none';
        display = 0;
    }
}


// To store data of registration form

// id for the object
let idOfObj = 1;

// Array to store the object data one by one 
let storeRegData = [];

// created a object for registration form data
function regData (name, age, gender, email, address, city, zip){
    this.id = idOfObj,
    this.name = name,
    this.age = age,
    this.gender = gender,
    this.email = email,
    this.address = address,
    this.city = city,
    this.zip = zip

}

// to create the data as object form registration input field
createRegData = () =>{
    
    // For the access the field data of registration form
    var name = document.getElementById('inputname').value;
    var age = document.getElementById('inputage').value;
    var gender = document.getElementById('inputgender').value;
    var email = document.getElementById('inputemail').value;
    var address = document.getElementById('inputaddress').value;
    var city = document.getElementById('inputcity').value;
    var zip = document.getElementById('inputzip').value;

    // To create new object
    newRegData = new regData(name, age, gender, email, address, city, zip);

    // To push object data again and again in storeRegData array
    storeRegData.push(newRegData);
    console.log(storeRegData, "Array Data")

    idOfObj++ ;
    
}

