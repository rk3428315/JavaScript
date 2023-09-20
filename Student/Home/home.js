// let nav1 = document.getElementById('navBar').click;
// console.log(nav1,"clicked")
// if(nav1 == true){
//     location.reload(nav)
// }

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
        row += '<a class="nav-link text-dark" href="#">' + element.first_name + '</a>';
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

// To get json data for the two images with data

let storeImg1Data = [];
fetch('/JsonData/img1Data.json')
    .then((res => res.json()))
    .then((value => storeImg1Data = value))

setTimeout(function () {
    let div = document.getElementById('img12');
    var row = "";

    // To iteral the allJSONData one by one and add in row
    storeImg1Data.forEach(element => {
        row += '<div class="col-md-6"><img src="'+element.img+'" alt="kk" class="rounded-circle d-inline-block align-text-top h-100 w-100 p-3"> </div><div class="col-md-6" style="align-self: center;"><h5>Team 7</h5><hr>'+element.text+'</div>'
        console.log(element.img, "row");        
    });

    div.innerHTML = row;    
    // console.log(row, "row");

}, 500);

//  ---------------End-------------------

// To get json data for the two images with data

let storeImg2Data = [];
fetch('/JsonData/img2Data.json')
    .then((res => res.json()))
    .then((value => storeImg2Data = value))

setTimeout(function () {
    let div = document.getElementById('img2');
    var row = "";

    // To iteral the allJSONData one by one and add in row
    storeImg2Data.forEach(element => {
        row += '</div><div class="col-md-6" style="align-self: center;"><h5>L and Light</h5><hr>'+element.text+'</div><div class="col-md-6"><img src="'+element.img+'" alt="kk" class="rounded-circle d-inline-block align-text-top h-100 w-100 p-3">'
        console.log(element.img, "row");        
    });

    div.innerHTML = row;
    // console.log(row, "row");

}, 500);

//  ---------------End-------------------


// To get json data for the NavBar

let storeNavBarData = "";
let nav = document.getElementById("navBar");
fetch("/NavBar/navBar.html")
        .then(res => res.text())        
        .then(value => storeNavBarData = value)

setTimeout(function () {
    // getNavBar = () =>{

       nav.innerHTML = storeNavBarData;  
       return nav.innerHTML  
    // }

}, 2000);




//  ---------------End-------------------

// const navToggle = document.querySelector('div');
// console.log(navToggle,"navtogger")

// navToggle.addEventListener('click', () => {
//     location.reload()
// });

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

// To marquee the four images
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
//         }, 1);
//     }

// }, 1000)

//  ---------------End-------------------

