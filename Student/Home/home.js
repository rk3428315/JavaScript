

// To get json data for the Notice bar

var allJSONData = [];
fetch('/JsonData/noticeBarData.json')
    .then((res => res.json()))
    .then((value => allJSONData = value));


// To show the first name of json data on notice bar
setTimeout(function () {
    let div = document.getElementById('dynamicNav');
    var row = "";

    // To iteral the allJSONData one by one and add in row
    allJSONData.forEach(element => {
        row += '<a class="nav-link" href="#">' + element.first_name + '</a>';
        // console.log(element.first_name, "row");

    });

    div.innerHTML = row;
    // console.log(row, "row");

}, 1000);

//  -------------End-------------------




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

// setTimeout(function (){
//     const para1 = document.getElementById("img");   
//     animate(para1);
//     // animate(para2);
    
//     function animate(element) {
//         let elementWidth = element.offsetWidth; // width of element 
//         let parentWidth = element.parentElement.offsetWidth; // width of parent
//         let flag = 0;
    
//         setInterval(() => {
//             element.style.marginLeft = --flag + "px";
    
//             if (elementWidth == -flag) {
//                 flag = parentWidth;
//             }
//         }, 10);
//     }

// }, 1000)

//  ---------------End-------------------








// var Ball = document.getElementById('ball');
// var ballPosition = 0;

// var pageWidth = document.getElementById('ball1').offsetWidth;

// var Loop = setInterval(function () {
//     ballPosition = Ball.offsetLeft;

//     if (ballPosition < pageWidth) {
//         Ball.style.left = ballPosition + 10 + "px";
//     } else {
//         Ball.style.left = 0 + "px";
//     }
// }, 1000/10);