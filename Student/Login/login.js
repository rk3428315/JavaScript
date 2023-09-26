function getRegData() {
    let regLocaldata = JSON.parse(localStorage.getItem('localData'));
    // console.log(regLocaldata);
    let email = document.getElementById('inputemail').value;
    let password = document.getElementById('inputpassword').value;
    for (let i = 0; i < regLocaldata.length; i++) {
        const element = Object.values(regLocaldata[i]);
        for (let j = 0; j < element.length; j++) {
            // const element = element[j];
            console.log(element[j], "el");
            if(email === element[j]){
                alert("Login Successfully!")
            }
        }        
    }
}








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

