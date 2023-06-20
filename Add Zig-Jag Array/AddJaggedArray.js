// Inislize a jagged array
let ar = [1, 2, [15, [23], [5, 12]], [100]];

let sumOr = [];
sumOrar= ar.concat()
console.log(ar)

// Add Jagged Array in SumOfJaggedArray variable
// let sumOfJaggedArray = ar[0] + ar[1] + ar[2][0] + ar[2][1][0] + ar[2][2][0] + ar[2][2][1] + ar[3][0];

// console.log (sumOfJaggedArray);
let total =0;

let max =[];

for(i=0; i<sumOr.length; i++){
     console.log( sumOr[i]); 
    // for(j =0; j <ar[i].length; j++){ 
    //      //console.log(ar[i][j]);

    //     for(k =0; k<ar[i][j].length; k++){
    //         // console.log(ar[i][j][k]);
    //         total += ar[i][j][k];
    //         console.log(total);
    //     }
    // }
}

addJaggedArray =(n) =>{
    for(i=0; i<n.length; i++){
        // console.log( [i]); 
        for(j =0; j <n[i].length; j++){ 
             //console.log(ar[i][j]);
    
            for(k =0; k<n[i][j].length; k++){
                // console.log(ar[i][j][k]);
                total += n[i][j][k];
                console.log(total);
            }
        }
    }
}
addJaggedArray([1, 2, [15, [23], [5, 12]], [100]])

{

    let sstring = "This is Anand  Ji";
    let splited = sstring.split(" ")

    let store = [];
    for(i =0; i<splited.length; i++)
        {
            if(typeof splited[i] === 'string')
        {
            store.push(splited[i])
            console.log(store);
        }else{
            // console.log(splited[i])
        }
    }    
}

{
    let ar = [1, 2, [15, [23], [5, 12]], [100]];

//console.log(sumArray(ar));

function sumArray(ar)
{
    let sum = 0;
    
    for(let el of ar)
    {
        if (Array.isArray(el))
        {
            el = sumArray(el);
            //console.log(el);

        }
        
        sum += el;
        console.log(sum);
    }
    
    return sum;
}
sumArray(ar);
}