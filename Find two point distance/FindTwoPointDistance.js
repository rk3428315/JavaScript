
// Create a fuction to calculate the distance between two point define by their x, y cordinate 

// To find distance between two point 
findTwoPointdistance =(x1, x2, y1, y2) =>{
    // Variable to store substraction of x2 -x1 
    let distance1 = x2 -x1;
    // Variable to store substraction of y2 -y1
    let distance2 = y2 -y1;
    // Variable to store sum of square distance1 and distance2 
    let distance = distance1 * distance1 + distance2 * distance2;
    // To find square root of distance
    let squroot = Math.sqrt(distance);
    console.log (squroot)
}
findTwoPointdistance(10,30,40,50)