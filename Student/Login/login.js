// ////////////////////
loginLS = () =>{
    // let password = document.getElementById('inputpassword').value;
    let email = document.getElementById('inputemail').value;
    let retString = localStorage.getItem("local Data")
    let retArray = JSON.parse(retString)
    let retkey= Object.values(retArray);
    // for(var j = 0; j <retString.length; j++){
        for (var i = 0; i < retkey.length; i++) {
            console.log(i,"local Data")
            if (retkey[i] === email ) {
                alert("Login");
            }else{
                alert("Not Login");
    
            }
        }
    // }

}


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
