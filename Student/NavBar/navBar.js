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
        location.reload();
    }
}

//  -------------End-------------------


// To get json data for the Nav Bar

let storeNavData = [];
fetch('/JsonData/navBarData.json')
    .then((res => res.json()))
    .then((value => storeNavData = value))

setTimeout(function () {
    let nav = document.getElementById('myNavbar');
    var row = "";

    // To iteral the allJSONData one by one and add in row
    storeNavData.forEach(element => {
        row += '<li><a class="nav-link" aria-current="page" href="' + element.link + '">' + element.name + '</a></li>';
        //  console.log(element.name, "row");

    });
    
    nav.innerHTML = row;
    // console.log(row, "row");

}, 2000);

//  ---------------End-------------------
