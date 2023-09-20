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