// To display the menu on mobile view

var div = document.getElementById('myNavbar');
console.log(div)
var display = 0;
function hideShow() {

    if (display == 0) {
        div.style.display = 'block';
        display = 1;
    }
    else {
        div.style.display = 'none';
        display = 0;
        // window.location.reload();
    }
}

//  -------------End-------------------


// // To get json data for the Nav Bar

// let storeNavData = [];
// let id = 0;
// fetch('/JsonData/navBarData.json')
//     .then((res => res.json()))
//     .then((value => storeNavData = value))

// setTimeout(function () {
//     let nav = document.getElementById('myNavbar');
//     var row = "";
//     // To iteral the allJSONData one by one and add in row
//     storeNavData.forEach(element => {
//         row += '<li id="' + id + '" class="nav-item"><a class="nav-link" aria-current="page" href="' + element.link + '">' + element.name + '</a></li>';
//         //  console.log(element.name, "row");
//         id++;
//         console.log(id, "id");
//     });

//     nav.innerHTML = row;
//     // console.log(row, "row");

// }, 2000);


// let hide = document.getElementById('myNavbar');
// console.log(hide,"hide")
// hide.addEventListener("click", function () {
//     let checked = document.getElementById("demo");
//     checked.style.display = "none"
// });

// let regClicked = document.getElementById("0").clicked
//     if(regClicked)  {
//         clicked.style.display = "none";
//         console.log(clicked,"clicked")
//     }  

// // let buttonClicked = false;
// clicked.addEventListener('click', function () {
//     if (buttonClicked) {
//         clicked.style.display = "block";
//     }
//     else{
//         clicked.style.display = "none";
//         console.log('Submit button is clicked');
//     }
//     // buttonClicked = true;
// });

//  ---------------End-------------------


