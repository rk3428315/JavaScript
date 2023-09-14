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
//  -------------End-------------------

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


// To get json data for the Nav Bar

let storeNavData = [];
fetch('/JsonData/navBarData.json')
    .then((res => res.json()))
    .then((value => storeNavData = value))

setTimeout(function () {
    let div = document.getElementById('myNavbar');
    var row = "";

    // To iteral the allJSONData one by one and add in row
    storeNavData.forEach(element => {
        row += '<li><a class="nav-link" aria-current="page" href="' + element.link + '">' + element.name + '</a></li>';
        //  console.log(element.name, "row");

    });
    div.innerHTML = row;
    // console.log(row, "row");

}, 500);

//  ---------------End-------------------


// To get json data for the four image

let storeImgData = [];
fetch('/JsonData/imgData.json')
    .then((res => res.json()))
    .then((value => storeImgData = value))

setTimeout(function () {
    let div = document.getElementById('img');
    var row = "";
    // let id = 0;
    // To iteral the allJSONData one by one and add in row
    storeImgData.forEach(element => {
        row += '<div class="col-sm-3 col-3 " id="img1"><img src="' + element.img + '" alt="error" class=" h-100 w-100 "></div>'
        console.log(element.img, "row");
        
    });

    div.innerHTML = row;
    // console.log(row, "row");

}, 500);

// setTimeout(function (){
//     const para1 = document.getElementById("img1");   
//     animate(para1);
//     // animate(para2);
    
//     function animate(element) {
//         let elementWidth = element.offsetWidth;
//         let parentWidth = element.parentElement.offsetWidth;
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