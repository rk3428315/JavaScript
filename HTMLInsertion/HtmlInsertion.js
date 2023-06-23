// To print other value at the same place of div element text

let a = document.getElementsByTagName("div")[0];
//a.innerHTML = a.innerHTML + "<h1> Hello World </h1>"
console.log(a.innerHTML);

// To print other value at the same place of div element text
let div = document.createElement('div');
div.innerHTML = "<h1> Hello World </h1>";

// print after the div element
//a.appendChild(div);

// print before the div element
//a.prepend(div);

// print before the div element
//a.before(div);

// print after the div element
//a.after(div);

// To replace the div element
//a.replaceWith(div)