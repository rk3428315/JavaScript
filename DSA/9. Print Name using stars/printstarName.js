document.write("<div>");

printR = () =>{
    let number = 5
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < number; j++) {
            if(j == 0 || j == 4 || i == 0 || i == 2 ){
                document.write("*");
                
            }
            else{
                document.write("&nbsp;&nbsp");                
            }
        }
        document.write("<br>")
    }
    for (let k = 3; k < 5; k++) {
        for (let l = 0; l < k; l++) {

            if(l == 0 || l == k-1){

                document.write("*");
            }
            else{
                document.write("&nbsp;&nbsp");
            }
        }
        document.write("<br>");
    }
}
printR(); 
document.write("</div>");


document.write("<div>");

printA = () =>{
    
    let n = 5;
    let string = "";    
    for (let i = 1; i <= 3; i++) {
        // printing spaces
        for (let j = 1; j <= 3 - i; j++) {
            document.write("&nbsp;&nbsp")
        }
        // printing star
        for (let k = 0; k < 2 * i - 1; k++) {
          if(i === 1 || i === 3) {
            document.write("*")
          }
          else {
            if(k === 0 || k === 2 * i - 2) {
                document.write("*");
            }
            else {
                document.write("&nbsp;&nbsp")
            }
          }
        }
        document.write("<br>");
    }
    for(let x = 0; x < 2; x++){
         for(let y = 0; y < 5; y++){
            if(y == 0 || y == 4){
                document.write("*");
            }
            else {
                document.write("&nbsp;&nbsp")
            }
        }
        document.write("<br>");

    }
    
}
printA();

document.write("</div>");
document.write("<div>");


function patternV(){
    let i, j;
    for (i = 5 - 1; i >= 0; i--){
        
        for (j = 5 - 1; j > i; j--){
            document.write("&nbsp");
        }        
        document.write("*");

        for (j = 1; j < (i * 2); j++)
            document.write("&nbsp");

        if (i >= 1)
        document.write("*");
        document.write("<br>");
    }
}
patternV();

document.write("</div>");
document.write("<div>");


function printI(){
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (j == 3 || i == 0 || i == 4) {
                
                document.write("*")
            }else{
                document.write("&nbsp");
            }
        }
        document.write("<br>")
    }
}
printI()
document.write("</div>");

    






