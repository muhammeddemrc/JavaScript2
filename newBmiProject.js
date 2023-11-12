function bmiCalculator2 (weight2, height2) {

    var bmi2 = (weight2 / Math.pow (height2,2));

    if (bmi2 <= 18.5) {

        return  "Your BMI is "+bmi2+", so you are underweight." ;

    }

    else if (bmi2 > 18.5 && bmi2 <= 24.9){

        return  "Your BMI is "+bmi2+", so you have a normal weight." ;

    }

    else if (bmi2 > 24.9){

        return  "Your BMI is "+bmi2+", so you are overweight." ;

    }

    return bmi2;

}