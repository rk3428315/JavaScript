// // set Interval to get all data of menu on the all pages

// var myList = document.getElementById('myNavbar')


// To display the menu on mobile view
setTimeout(function () {
    var myList = document.getElementById('myNavbar')
    console.log(myList);

    var checkTime = setInterval(() => {
        if (myList !== null)
            navData()
    }, 500);

    function navData() {
        clearTimeout(checkTime);

        var myList = document.getElementById('myNavbar')
        /* We will add the click listener to the parent <ul> element! */
        myList.addEventListener('click', e => {
            /* Create a loop and iterate over all of the <li> elements inside #myList */
            for (var i = 0; i < myList.children.length; i++) {
                var li = myList.children[i];
                console.log(li, "li");
                console.log(e.target, "target");

                if (li === e.target) {
                    li.classList.add('active')
                } else {
                    li.classList.remove('active');
                }
            }
        });
    }
}, 2000);



var display = 0;
var div;
function hideShow() {
    div = document.getElementById('myNavbar');
    console.log(div)

    if (display == 0) {
        div.style.display = 'block';
        display = 1;
    }
    else {
        div.style.display = 'none';
        display = 0;
        // location.reload();
    }
}

//  -------------End-------------------


// // set Interval to get all data of menu on the all pages

// var div = document.getElementById('navbar');

// var checkTime = setInterval(() => {
//     if (div !== null)
//         navData()
// }, 500);

// function navData() {
//     clearTimeout(checkTime);
//     document.getElementById('navbar');
// }

// //----------End------------------------

// // set Interval to get all data of menu on the all pages

// var div = document.getElementById('navbar');

// var checkTime = setInterval(() => {
//     if (div !== null)
//         navData()
// }, 500);

// function navData() {
//     clearTimeout(checkTime);
//     document.getElementById('navbar');
// }

// //----------End------------------------



// To get json data for the Nav Bar

// let storeNavData = [];
// let id = 0;
// var row = "";

// fetch('/JsonData/navBarData.json')
//     .then((res => res.json()))
//     .then((value => storeNavData = value));

// setTimeout(function () {
//     let nav = document.getElementById('myNavbar');
//     // To iteral the allJSONData one by one and add in row
//     storeNavData.forEach(element => {
//         row += '<li id="' + id + '" class="nav-item"><a class="nav-link text-dark" aria-current="page" href="' + element.link + '">' + element.name + '</a></li>';
//         //  console.log(element.name, "row");
//         id++;
//         console.log(id, "id");
//     });
//     // console.log(row,"row")


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


