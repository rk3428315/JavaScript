// Onclick Login button find the existing cridential and redirect to dashboard


window.history.forward();

function getLoginData() {
    let loginLocaldata = JSON.parse(localStorage.getItem('localData'));
    let email = document.getElementById('inputemail').value;
    let password = document.getElementById('inputpassword').value;
    if (email  && password ) {
        // To iterate the all value from local Storage data
        for (var res of loginLocaldata) {

            // If email and password is true then login 
            // and redirect into dashboard home Page

            if (email === res.email && password === res.password) {
                alert("Login Successfully!");
                window.location.href = "/dashbord-home.html";
                
            }
            // noBack();
        }
    }
    else {
        alert("Please Enter the correct credentials!")
    }
}

//-------------End--------------------------








// ////////////////////
// loginLS = () =>{
//     // let password = document.getElementById('inputpassword').value;
//     let email = document.getElementById('inputemail').value;
//     let retString = localStorage.getItem("local Data")
//     let retArray = JSON.parse(retString)
//     let retkey= Object.values(retArray);
//     for (var i = 0; i < retkey.length; i++) {
//         console.log(i,"local Data")
//         if (retkey[i] === email ) {
//             alert("Login");
//         }       
//     }
// }




// To data store in local storage

// let storeLoginData = [];
// function loginData(email, password) {
//     this.email = email,
//         this.password = password
// }

// createLoginData = () => {
//     var email = document.getElementById('inputemail').value;
//     var password = document.getElementById('inputpassword').value;

//     newLoginData = new loginData(email, password);
//     storeLoginData.push(newLoginData);
//     console.log(storeLoginData, "jkhggfh");
//     localStorage.setItem("local Data", JSON.stringify(storeLoginData));
// }

//-----------End------------------

