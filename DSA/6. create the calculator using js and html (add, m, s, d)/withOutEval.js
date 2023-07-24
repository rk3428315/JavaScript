// To show the numberic value
showValue = (val) =>{
    document.getElementById('calc').value += parseInt(val);
}
// To show the symble value
showSymbole = (val) =>{
    document.getElementById('calc').value += val;
}
// To clear the value
clears =() =>{
    document.getElementById('calc').value ='';
}
// To find the value of entered numberic value
equal =() =>{
    let before = "";
    let after = "";
    let d = document.getElementById('calc').value;  

    for(let i = 0; i < d.length; i++){

        // To sum
        if(document.getElementById('calc').value[i] == '+'){
            //console.log(i);
            for(let j = i-1; j >= 0; j--){

                before += document.getElementById('calc').value[j];
                console.log(before+" before");
            }
            for(let j = i+1; j < d.length; j++){

                after += document.getElementById('calc').value[j];
                
            }
            document.getElementById('calc').value = parseInt(before) + parseInt(after);
        }

        // To substraction
        if(document.getElementById('calc').value[i] == '-'){
            //console.log(i);
            for(let j = i-1; j >= 0; j--){

                before += document.getElementById('calc').value[j];
                console.log(before+" before");
            }
            for(let j = i+1; j < d.length; j++){

                after += document.getElementById('calc').value[j];
                
            }
            document.getElementById('calc').value = parseInt(before) - parseInt(after);
        }

        // To multiply
        if(document.getElementById('calc').value[i] == '*'){
            //console.log(i);
            for(let j = i-1; j >= 0; j--){

                before += document.getElementById('calc').value[j];
                console.log(before+" before");
            }
            for(let j = i+1; j < d.length; j++){

                after += document.getElementById('calc').value[j];
                
            }
            document.getElementById('calc').value = parseInt(before) * parseInt(after);
        }

        // To divide
        if(document.getElementById('calc').value[i] == '/'){
            //console.log(i);
            for(let j = i-1; j >= 0; j--){

                before += document.getElementById('calc').value[j];
                console.log(before+" before");
            }
            for(let j = i+1; j < d.length; j++){

                after += document.getElementById('calc').value[j];
                
            }
            document.getElementById('calc').value = parseInt(before) / parseInt(after);
        }
    }
}
