window.history.forward();

// To show the active  tab on click
var myList = document.getElementById('dashul')
/* We will add the click listener to the parent <ul> element! */
myList.addEventListener('click', e => {
    /* Create a loop and iterate over all of the <li> elements inside #myList */
    for (var i = 0; i < myList.children.length; i++) {

        var li = myList.children[i];

        if (li === e.target) {    

            li.classList.add('show')
        } else {            
            
            li.classList.remove('show')
        }
    }
});
//----------------------End---------------------------


    