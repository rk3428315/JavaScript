
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


// // To display the menu on mobile view

// function hideContact() {
//     if (f == 0) {
//         div.style.display = 'block';
//         display = 1;
//     }
//     else {
//         div.style.display = 'none';
//         display = 0;
//     }
// }

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