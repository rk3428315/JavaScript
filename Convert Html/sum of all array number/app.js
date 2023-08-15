
function calculateArray(str) {
    str = document.getElementById('str').value;
    let arr = str.split(",")

    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        let arr1 = parseFloat(arr[i])
        sum += arr1
        document.getElementById('result').innerHTML = `Sum of all array : ${sum}`;
        console.log(sum);
    };
}
