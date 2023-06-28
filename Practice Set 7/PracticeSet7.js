// To change the color of navbar Name element of div
document.getElementsByClassName("navbar-brand")[0].style.color="red";
// To change the color of first element of div
document.getElementsByClassName("navbar-nav")[0].firstElementChild.style.color="red";
// To change the color of last element of div
document.getElementsByClassName("navbar-nav")[0].lastElementChild.style.color="yellow"
// To change background color of li tag 
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background="green"
});