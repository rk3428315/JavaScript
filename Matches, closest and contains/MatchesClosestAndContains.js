let id =document.getElementById('id2');
let sp =document.getElementById('sp1');
console.log(id);

// matches to find(match) if class is in that element then true otherwise false
console.log(id.matches(".box"));
console.log(id.matches(".clas"));

// To find the closest element in that element 
console.log(sp1.closest("#sp1"));
console.log(id1.closest('.box'));


// contains to find (contain) if class is in that element then true otherwise false
console.log(sp1.contains(sp1));
console.log(id1.contains(sp1));

