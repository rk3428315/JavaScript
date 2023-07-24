function convertAgetocurrentDays(currentYears, currentMonths, currentDays, previousYears, previousMonths, previousDays){ 
    // Define the variable to store the values
    let years = 0;
    let yearsDay = 0;
    let currentYearDays = 0;
    let previousYearDays = 0;
    let totalcurrentDays = 0;
    let totalDays = 0;
   
    // To check if prvious years is less than current years then excute otherwise exit
    if(previousYears < currentYears){
        // To the iterate less than currentYears
        for(let i = previousYears + 1; i < currentYears; i++){
            // To check leap years or not
            if( i % 4 == 0){
                yearsDay = 366;
            }
    
            else{
                yearsDay = 365;
                //console.log(yearsDay);
            }
            totalcurrentDays += yearsDay;
            //console.log(totalcurrentDays)
        }
        // To check currentYears is leap years or not
        if(currentYears % 4 == 0){
            currentYearDays = (currentMonths * 30.5) + currentDays;
            previousYearDays = ((12 - previousMonths) * 30.5) + (30.5 - previousDays);
            totalDays = Math.floor(previousYearDays + totalcurrentDays+ currentYearDays);
            console.log(totalDays +" currentDays");
        }
    
        else{
            currentYearDays = (currentMonths * 30.4166667) + currentDays;
            previousYearDays = ((12 - previousMonths) * 30.416666) + (30.416666 - previousDays);
            totalDays = Math.floor(previousYearDays + totalcurrentDays + currentYearDays);
            console.log(totalDays +" currentDays");
        }
    }
    else{
        return false;
    }        
}
convertAgetocurrentDays(2023, 7, 14, 2023, 7, 2);