
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


// To get json data for the four image

let storeImgData = [];
fetch('/JsonData/imgData.json')
    .then((res => res.json()))
    .then((value => storeImgData = value))

setTimeout(function () {
    let div = document.getElementById('img');
    var row = "";
    let id = 0;
    // To iteral the allJSONData one by one and add in row
    storeImgData.forEach(element => {
        row += '<div class="col-sm-3 col-3 " id="img1"><img src="' + element.img + '" alt="error" class=" h-100 w-100 "></div>'
        console.log(element.img, "row");
        
    });

    div.innerHTML = row;
    // console.log(row, "row");

}, 500);

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