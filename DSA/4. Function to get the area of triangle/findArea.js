// To find the area
function  area(h, b) {
    
    h = document.getElementById('h').value ;
    b = document.getElementById('b').value ;
    let area = (h * b)/2;
    document.getElementById('area').value = area;
    console.log("Area : ",area);    
}
