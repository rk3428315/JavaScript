// let nav1 = document.getElementById('navBar').click;
// console.log(nav1,"clicked")
// if(nav1 == true){
//     location.reload(nav)
// }


// To get json data for the Notice bar
var allJSONData = [];
let div = document.getElementById('dynamicNav');
fetch('/JsonData/noticeBarData.json')
.then(function(res){
    res.json().then(function(value){
        allJSONData = value;
        getNoticeBar();
    })
})

// To show the data of notice bar
function getNoticeBar (){
    var row = "";

    // To iteral the allJSONData one by one and add in row
    allJSONData.forEach(element => {
        row += '<a class=" nav-link text-dark" href="#">' + element.first_name + '</a>';
        // console.log(element.first_name, "row");

    });

    div.innerHTML = row;
}

//  -------------End-------------------




// To get json data for the four image

let storeImgData = [];
fetch('/JsonData/imgData.json')
.then(function(res){
    res.json().then(function(value){
        storeImgData = value;
        fourImages();
    })
})

function fourImages(){
    let div = document.getElementById('img');
    var row = "";
    let id = 0;
    // To iteral the allJSONData one by one and add in row
    storeImgData.forEach(element => {
        row += '<div class="col-sm-3 col-3 " id="img1"><img src="' + element.img + '" alt="error" class=" h-100 w-100 "></div>'
        console.log(element.img, "row");
        
    });

    div.innerHTML = row;
}
//  ---------------End-------------------


// To get json data for the first images with text
let storeImg1Data = [];
fetch('/JsonData/img1Data.json')
.then(function(res){
    res.json().then(function(value){
        storeImg1Data = value;
        getImagesNaruto();
    })
})

// function to get data of images
function getImagesNaruto(){
    let div = document.getElementById('img12');
    var row = "";

    // To iteral the allJSONData one by one and add in row
    storeImg1Data.forEach(element => {
        row += '<div class="col-md-6"><img src="'+element.img+'" alt="kk" class="rounded-circle d-inline-block align-text-top h-100 w-100 p-3"></div><div class="col-md-6" style="align-self: center;"><h5>L and Light</h5><hr>'+element.text+'</div>'
        console.log(element.img, "row");        
    });

    div.innerHTML = row;
} 
// ------------End---------------


// To get json data for the two images with data
let storeImg2Data = [];
fetch('/JsonData/img2Data.json').then(function(res){
    res.json().then(function(result){
        storeImg2Data = result;
        getImagesKira();

   })
});

// function to get data of images
function getImagesKira(){
    let div = document.getElementById('img2');
    var row = "";

    // To iteral the allJSONData one by one and add in row
    storeImg2Data.forEach(element => {
        row += '<div class="col-md-6" style="align-self: center;"><h5>L and Light</h5><hr>'+element.text+'</div><div class="col-md-6"><img src="'+element.img+'" alt="kk" class="rounded-circle d-inline-block align-text-top h-100 w-100 p-3">'
        console.log(element.img, "row");        
    });

    div.innerHTML = row;
}   
//  ---------------End-------------------


// To get json data for the Footer
// let storeFooterData = "";
// let homeFooter = document.getElementById("footer")
// fetch("/footer.html")
//         .then(res => res.text())
//         .then(value => storeFooterData = value)
//         .then(value => homeFooter.innerHTML = value);

//         homeFooter.innerHTML = storeFooterData;
   

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

