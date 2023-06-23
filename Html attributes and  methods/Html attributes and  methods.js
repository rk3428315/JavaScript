// If class is present in element then it will return name of class
let a = first.getAttribute("class");
console.log(a);
// If class is present in element then it will return true otherwise false
console.log(first.hasAttribute("class"));
console.log(first.hasAttribute("style"));

// To set attribute in element it will add the hidden attribute 
console.log(first.setAttribute("hidden" ,"true ravi"));

// To remove the attribute from element
console.log(first.removeAttribute("hidden"));

// To find all attributes in element
console.log(first.attributes);

// To find the all custom function
console.log(first.dataset);

// To find the particular custom function
console.log(first.dataset.game);
console.log(first.dataset.player);





