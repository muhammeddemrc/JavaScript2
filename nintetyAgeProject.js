// In this challenge, I am going to create a function that tells us how many days,
// weeks and months we have left if we live until 90 years old.

function lifeInWeeks(age) {
    

    
    var months = (90*12) - (age*12);

    var weeks = (90*52) - (age*52);

    var days = (90*365) - (age*365);
    
    
    console.log("you have " + days + " days, " + weeks + " weeks, " + months + " months.");
    
    

}

lifeInWeeks(56);
