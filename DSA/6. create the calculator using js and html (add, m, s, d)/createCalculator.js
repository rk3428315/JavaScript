let number1 = "";
let number2 = "";
let symboles = "";
function showValue(num) {
  if(symboles){
    if (num == 1) {
        var result = document.getElementById('one').value = num;
        console.log(parseInt(document.getElementById('calc').value += result));
        number2 += `${num}`
    }

    if (num == 2) {
        var result = document.getElementById('two').value = num;
        console.log(parseInt(document.getElementById('calc').value += result));
        number2 += `${num}`
    }

    if (num == 3) {
        var result = document.getElementById('three').value = num;
        console.log(parseInt(document.getElementById('calc').value += result));
        number2 += `${num}`
    }

    if (num == 4) {
        var result = document.getElementById('four').value = num;
        console.log(document.getElementById('calc').value += result);
        number2 += `${num}`
    
    }
    
    if (num == 5) {
        var result = document.getElementById('five').value = num;
        console.log(parseInt(document.getElementById('calc').value += result));
        number2 += `${num}`
    }

    if (num == 6) {
        var result = document.getElementById('six').value = num;
        console.log(parseInt(document.getElementById('calc').value += result));
        number2 += `${num}`
    }

    if (num == 7) {
        var result = document.getElementById('seven').value = num;
        console.log(parseInt(document.getElementById('calc').value += result));
        number2 += `${num}`
    }

    if (num == 8) {
        var result = document.getElementById('eight').value = num;
        console.log(parseInt(document.getElementById('calc').value += result));
        number2 += `${num}`
    }
    
    if (num == 9) {
        var result = document.getElementById('nine').value = num;
        console.log(parseInt(document.getElementById('calc').value += result));
        number2 += `${num}`
    }

    if (num == 0) {
        var result = document.getElementById('zero').value = num;
        console.log(parseInt(document.getElementById('calc').value += result));
        number2 += `${num}`
    }
    console.log("Number2",parseInt(number2))

  }else{
    if (num == 1) {
        var result = document.getElementById('one').value = num;
        console.log(parseInt(document.getElementById('calc').value += result));
        number1 += `${num}`
    }

    if (num == 2) {
        var result = document.getElementById('two').value = num;
        console.log(parseInt(document.getElementById('calc').value += result));
        number1 += `${num}`
    }

    if (num == 3) {
        var result = document.getElementById('three').value = num;
        console.log(parseInt(document.getElementById('calc').value += result));
        number1 += `${num}`
    }

    if (num == 4) {
        var result = document.getElementById('four').value = num;
        console.log(document.getElementById('calc').value += result);
        number1 += `${num}`
    
    }
    
    if (num == 5) {
        var result = document.getElementById('five').value = num;
        console.log(parseInt(document.getElementById('calc').value += result));
        number1 += `${num}`
    }

    if (num == 6) {
        var result = document.getElementById('six').value = num;
        console.log(parseInt(document.getElementById('calc').value += result));
        number1 += `${num}`
    }

    if (num == 7) {
        var result = document.getElementById('seven').value = num;
        console.log(parseInt(document.getElementById('calc').value += result));
        number1 += `${num}`
    }

    if (num == 8) {
        var result = document.getElementById('eight').value = num;
        console.log(parseInt(document.getElementById('calc').value += result));
        number1 += `${num}`
    }
    
    if (num == 9) {
        var result = document.getElementById('nine').value = num;
        console.log(parseInt(document.getElementById('calc').value += result));
        number1 += `${num}`
    }

    if (num == 0) {
        var result = document.getElementById('zero').value = num;
        console.log(parseInt(document.getElementById('calc').value += result));
        number1 += `${num}`
    }
    console.log("fgj",parseInt(number1))
  }
    
}

function showSymbole(symbole){

    if(symbole == "+"){
        var result = document.getElementById('plus').value = symbole;
        console.log(document.getElementById('calc').value += result);
        symboles = symbole;
    }

    if(symbole == "-"){       
        var result = document.getElementById('minus').value = symbole;
        console.log(document.getElementById('calc').value += result);
        symboles = symbole;
        
    }

    if(symbole == "*"){
        var result = document.getElementById('multiple').value = symbole;
        console.log(document.getElementById('calc').value += result);
        symboles = symbole;
    }

    if(symbole == "/"){
        var result = document.getElementById('divide').value = symbole;
        console.log(document.getElementById('calc').value += result);
        symboles = symbole;
    }
    console.log(symboles);

}

function clears(){
    var result = document.getElementById('divide').value = "";
    document.getElementById('calc').value = result;
    number1 = 0;
    number2 = 0;
    symboles = "";
}

function equal() {
    for (let i = 0; i < symboles.length; i++) {
        
        let output;
        //console.log("dyfd",symboles[i])
        if(symboles[i] == "+"){
            output = parseInt(number1) + parseInt(number2);
            console.log(document.getElementById('calc').value = output)
            number1 = output;
            number2 = "";
            
        }

        if(symboles[i] == "-"){
            output = parseInt(number1) - parseInt(number2);
            console.log(document.getElementById('calc').value = output)
            number1 = output;
            number2 = "";
        }

        if(symboles[i] == "*"){
            output = parseInt(number1) * parseInt(number2);
            console.log(document.getElementById('calc').value = output)
            number1 = output;
            number2 = "";
        }

        if(symboles[i] == "/"){
            output = parseInt(number1) / parseInt(number2);
            console.log(document.getElementById('calc').value = output)
            number1 = output;
            number2 = "";
        }
    }
}
equal()


