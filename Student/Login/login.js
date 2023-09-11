var div = document.getElementById('myNavbar');
var display = 0;

// To display the menu on mobile view
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
