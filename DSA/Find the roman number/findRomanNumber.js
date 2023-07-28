// To find the roman value form number
function convertToRoman(num) {
// Define a jagged array of roman number
    if( typeof num == 'number'){
   
        var romanMatrix = [
            [1000, 'M'],
            [900, 'CM'],
            [500, 'D'],
            [400, 'CD'],
            [100, 'C'],
            [90, 'XC'],
            [50, 'L'],
            [40, 'XL'],
            [10, 'X'],
            [9, 'IX'],
            [5, 'V'],
            [4, 'IV'],
            [1, 'I']
        ];
        // To check if number is 0 then return nothing
        if (num === 0) {
            return '';
        }
        
        // Loop to iterate the romanMatrix till the length
        for (var i = 0; i < romanMatrix.length; i++) {

            // To check if num is greater than romanMatrix values
            if (num >= romanMatrix[i][0]) {

                // To return the value of romanMatrix[i][1] index  and add the value of recursion function 
                return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);

            }
        }
    }
    else if (typeof num === 'string') {
        // Define an object fo roman to number value
        const romanValue = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        }
        // Define a variable to store the conveted roman in number
        let convertRoman = 0;
        // Define a variable to store 
        let previousValue = 0;
        // To iterate till the length of num
        for (var i = num.length - 1; i >= 0; i--) {

            // Store num element in currentRoman variable
            const currentRoman = num[i];

            // Store currentRoman with swap of romanValue in currentValue
            const currentValue = romanValue[currentRoman];

            // To check the currenValue is less than previousValue
            // substraction of the convertRoman + currentValue 
            if (currentValue < previousValue) {
                convertRoman -= currentValue;
            } 

            // To check if currentValue is greater than previousValue then 
            // sum of convertRoman + currentValue
            else {
                convertRoman += currentValue; 
                previousValue = currentValue;
            }

        }
        return convertRoman;
    }
}
console.log(convertToRoman(""));


