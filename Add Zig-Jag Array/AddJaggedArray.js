// Inislize a jagged array
let ar = [1, 2, [15, [23], [5, 12]], [100]];


// Add Jagged Array in SumOfJaggedArray variable
// let sumOfJaggedArray = ar[0] + ar[1] + ar[2][0] + ar[2][1][0] + ar[2][2][0] + ar[2][2][1] + ar[3][0];

// console.log (sumOfJaggedArray);
let total =0;

let max =[];

for(i=0; i<ar.length; i++){
    // console.log( [i]); 
    for(j =0; j <ar[i].length; j++){ 
         //console.log(ar[i][j]);

        for(k =0; k<ar[i][j].length; k++){
            // console.log(ar[i][j][k]);
            total += ar[i][j][k];
            console.log(total)
        }
    }
}




