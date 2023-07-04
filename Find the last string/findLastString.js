// To find the string sequentially if yes then true otherwise false
function confirmEnding(start, ending) {

    // Contain start length in startlength variable
    const startlength = start.length;

    // Contain ending length in endlength variable
    const endlength = ending.length;
    // To iterate till the end of endlength using loop
    for (var i = 0; i < endlength; i++) {
        // if start value is not equal to ending value then return false otherwise true
        if (start[startlength - endlength + i] !== ending[i]) {
            return false;
        }
        return true;
    }
}
console.log(confirmEnding("Rahul is a good boy", "is a good boy"));