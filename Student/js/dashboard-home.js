// let ur = window.location.href;
// let ur1 = document.location.href;
// console.log(ur,"ur",ur1,"ur1")

window.history.forward();

// window.addEventListener('storage', function (event) {
//     if (event.key == 'logout-event') {
//         window.location = 'signin?logoutAllTabs=yes';
//     }
// }, false);


window.addEventListener("load", function () {
    let regLocalData = localStorage.getItem('loginData');
    // console.log(regLocalData,"regLocalData");

    const userData = JSON.parse(regLocalData);
    if (regLocalData) {

        // console.log(userData.isLogin, "isLogin")
        // Get the Array item which matchs the id "2"
        // const result = userData.for(
        //     (userData) => userData.isLogin === true
        // );
        // const result = userData.forEach(element => {
        //     element.isLogin === true;
        // });
    }

    if (userData.isLogin === true ) {
        window.location.href = "/dashbord-home.html";
    }

})


// To show the active  tab on click
var myList = document.getElementById('dashul')
/* We will add the click listener to the parent <ul> element! */
myList.addEventListener('click', e => {
    /* Create a loop and iterate over all of the <li> elements inside #myList */
    for (var i = 0; i < myList.children.length; i++) {

        var li = myList.children[i];

        if (li === e.target) {

            li.classList.add('showActive')
        } else {

            li.classList.remove('showActive')
        }
    }
});
//----------------------End---------------------------


// window.stop();
