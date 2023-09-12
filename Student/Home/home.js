

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


// To get json data using pormise for the Notice bar

var allJSONData = [];
let jsonData = fetch('/JsonData/data.json');
jsonData.then((res => res.json()))
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

}, 2000);






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