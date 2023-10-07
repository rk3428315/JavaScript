// To redirect on the dashboard page in not logout the page
function stopRedirectingOnDasboard() {
    window.addEventListener("load", function () {
        let loginLocalData = localStorage.getItem('loginData');
        // console.log(regLocalData,"regLocalData");

        // const userData = JSON.parse(loginLocalData);
        // console.log(userData.isLogin, "userData");
        if (loginLocalData) {
            window.location.replace('/dashbord-home.html');
        }
    })
}
stopRedirectingOnDasboard();
//----------------------End---------------------


// To store data of registration form
// id for the object
let idOfObj = (Math.floor(Math.random() * 20000));;
// Array to store the object data one by one 
let storeRegData = {};
let regPreviousData = []

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
        this.zip = zip,
        this.isLogin = false;
}

// To create the data as object form registration input field
createRegData = () => {

    // For the access the field data of registration form
    var name = document.getElementById('inputname').value;
    if (name.length < 1) {
        document.getElementById("name").innerHTML =
            ` <p class="text-danger"> Please enter your name</p>`;
    } else {
        document.getElementById("name").innerHTML = "";
    }

    var age = document.getElementById('inputage').value;
    if (age.length < 1) {
        document.getElementById("age").innerHTML =
            ` <p class="text-danger"> Please enter your age</p>`;
    } else {
        document.getElementById("age").innerHTML = "";
    }

    var gender = document.getElementById('inputgender').value;
    if (gender.length < 1) {
        document.getElementById("gender").innerHTML =
            ` <p class="text-danger"> Please enter your gender</p>`;
    } else {
        document.getElementById("gender").innerHTML = "";
    }

    var email = document.getElementById('inputemail').value;

    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (!regexEmail.test(email) == true) {
        document.getElementById("email").innerHTML =
            `<p class="text-danger"> Please enter your email</p>`;
        return false;
    } else {
        document.getElementById("email").innerHTML = "";

    }

    let regLocalData = JSON.parse(localStorage.getItem("localData"));
    for (const res of regLocalData) {
        console.log(res.email, "email");
        if(email === res.email){
            console.log(res.email)
            alert("Email already exists!")
            return false;
        }
    }
    


    var password = document.getElementById('inputpassword').value;
    if (password.length < 1) {
        document.getElementById("password").innerHTML =
            ` <p class="text-danger"> Please enter your password</p>`;
    } else {
        document.getElementById("password").innerHTML = "";
    }

    var address = document.getElementById('inputaddress').value;
    if (address.length < 1) {
        document.getElementById("address").innerHTML =
            ` <p class="text-danger"> Please enter your address</p>`;
    } else {
        document.getElementById("address").innerHTML = "";
    }

    var city = document.getElementById('inputcity').value;
    if (city.length < 1) {
        document.getElementById("city").innerHTML =
            ` <p class="text-danger"> Please enter your city</p>`;
    } else {
        document.getElementById("city").innerHTML = "";
    }

    var zip = document.getElementById('inputzip').value;
    if (zip.length < 1) {
        document.getElementById("zip").innerHTML =
            ` <p class="text-danger"> Please enter your zip</p>`;
    } else {
        document.getElementById("zip").innerHTML = "";
    }

    if (name != "" && age != "" && gender != "" && email != "" && password != "" && address != "" && city != "" && zip != "") {
        // To create new object
        newRegData = new regData(name, age, gender, email, password, address, city, zip);

        // To push object data again and again in storeRegData array        
        // storeRegData.push(newRegData);
        // console.log(typeof storeRegData, "storeRegData");
        if (localStorage.getItem("localData") != null) {

            const getCurrentCart = window.localStorage.getItem('localData');
            const currentCart = JSON.parse(getCurrentCart);

            currentCart.push(newRegData);

            window.localStorage.setItem('localData', JSON.stringify(currentCart));



        } else {
            let currentCart = [];
            currentCart.push(newRegData);
            window.localStorage.setItem('localData', JSON.stringify(currentCart));

        }
        alert("Registration Successfully!");
        // idOfObj++;
        window.location.href = "/Login/login.html";

    }

    // To clear the all input fields data after registration
    name = document.getElementById('inputname').value = "";
    age = document.getElementById('inputage').value = "";
    gender = document.getElementById('inputgender').value = "";
    email = document.getElementById('inputemail').value = "";
    password = document.getElementById('inputpassword').value = "";
    address = document.getElementById('inputaddress').value = "";
    city = document.getElementById('inputcity').value = "";
    zip = document.getElementById('inputzip').value = "";

    // window.location.href="/Login/login.html"


}
//  ---------------End-------------------