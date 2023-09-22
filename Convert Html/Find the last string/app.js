// To find the string sequentially if yes then true otherwise false
function confirmEnding(string, ending) {
    string = document.getElementById('start').value;
    ending = document.getElementById('end').value;
    // Contain start length in startlength variable
    const startlength = string.length;

    // Contain ending length in endlength variable
    const endlength = ending.length;
    // To iterate till the end of endlength using loop
    for (var i = 0; i < endlength; i++) {
        // if start value is not equal to ending value then return false otherwise true
        if (string[startlength - endlength + i] !== ending[i]) {
            return document.getElementById('result').innerHTML = false;
        }
        return document.getElementById('result').innerHTML = true;
    }
}
console.log(confirmEnding("Rahul is a good boy", "is a good boy"));