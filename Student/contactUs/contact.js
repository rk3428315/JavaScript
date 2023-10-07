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