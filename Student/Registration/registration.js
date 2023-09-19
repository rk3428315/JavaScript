
// To display the menu on mobile view
var div = document.getElementById('myNavbar');
var display = 0;
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

//  ---------------End-------------------


// To get json data for the Footer

let storeFooterData = "";
fetch("/footer.html")
    .then(res => res.text())
    .then(value => storeFooterData = value);

setTimeout(function () {

    document.getElementById("footer").innerHTML = storeFooterData;
    // console.log(row, "row");

}, 1000);

//  ---------------End-------------------

// To get json data for the NavBar

let storeNavBarData = "";
fetch("/NavBar/navBar.html")
    .then(res => res.text())
    .then(value => storeNavBarData = value);

setTimeout(function () {

    document.getElementById("navBar").innerHTML = storeNavBarData;
    // console.log(row, "row");

}, 1000);

//  ---------------End-------------------


// To store data of registration form

// id for the object
let idOfObj = 1;
// Array to store the object data one by one 
let storeRegData = [];

// created a object for registration form data
function regData(name, age, gender, email, password, address, city, zip) {
    this.id = idOfObj,
        this.name = name,
        this.age = age,
        this.gender = gender,
        this.email = email,
        this.address = address,
        this.city = city,
        this.password = password,
        this.zip = zip

}

// to create the data as object form registration input field
createRegData = () => {

    // For the access the field data of registration form
    var name = document.getElementById('inputname').value;
    var age = document.getElementById('inputage').value;
    var gender = document.getElementById('inputgender').value;
    var email = document.getElementById('inputemail').value;
    var password = document.getElementById('inputpassword').value;
    var address = document.getElementById('inputaddress').value;
    var city = document.getElementById('inputcity').value;
    var zip = document.getElementById('inputzip').value;

    // To create new object
    newRegData = new regData(name, age, gender, email, password, address, city, zip);
    storeRegData.push(newRegData);

    // To push object data again and again in storeRegData array
    localStorage.setItem("name", JSON.stringify(newRegData));

    // To set data in local Storage
    console.log(storeRegData, "Array Data");

    // To get local Storage Data
    // const getLocalData = localStorage.getItem("local Data");
    // console.log(getLocalData);

    idOfObj++;

}

//  ---------------End-------------------


