window.history.forward();

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

// Onclick Login button find the existing cridential and redirect to dashboard
function getLoginData() {
    
    let loginLocaldata = JSON.parse(localStorage.getItem('localData'));

    var email = document.getElementById('inputemail').value;
    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (!regexEmail.test(email) == true) {
        document.getElementById("email").innerHTML =
        `<p class="text-danger"> Please enter your email</p>`;
        return false
    } else {
        document.getElementById("email").innerHTML = "";
        // return true;
    }

    var password = document.getElementById('inputpassword').value;
    if (password.length < 1) {
        document.getElementById("password").innerHTML =
            ` <p class="text-danger"> Please enter your password</p>`;
    } else {
        document.getElementById("password").innerHTML = "";
    }

    if (email  && password ) {

        // To iterate the all value from local Storage data
        for (var res of loginLocaldata) {

            console.log(res.email,"res Data");
            // If email and password is true then login 
            // and redirect into dashboard home Page
            
            if (email === res.email && password === res.password) {
                alert("Login Successfully!");
                res.isLogin = true;              
                let storeLoggedData = res;
                console.log(storeLoggedData,"Login Data");
                localStorage.setItem("loginData", JSON.stringify(storeLoggedData));
                
            }
            
            if (res.isLogin == true) {
                window.location.href = "/dashbord-home.html";
            }
        }
    }
    // else {
    //     alert("Please Enter the correct credentials!")
    // }
}

//-------------End--------------------------






