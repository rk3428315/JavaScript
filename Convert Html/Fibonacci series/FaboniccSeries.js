

function fibonacci(num) {
    num = document.getElementById('num').value;
    let num1 = 0;
    let num2 = 1;
    let sum;
    // 
    for (i = 0; i < num; i++) {
        sum = num1 + num2;
        document.getElementById('result').innerHTML += `Fabonic series : ${num1} + ${num2} = ${sum}<br>`;
        num1 = num2;
        num2 = sum;
    }
}