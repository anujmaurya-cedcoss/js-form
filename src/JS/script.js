function status() {
    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value;

    let output = "you are ";
    if(age < 5) {
        output = "Not useful for people with age less than 5";
    } else if(age >= 5 && age <= 7) {
        if(weight < 15) {
            output = "Underweight";
        } else if(weight >= 15 && weight < 21) {
            output = "fit";
        } else {
            output = "overweight";
        }
    } else if(age >= 8 && age <= 10) {
        if(weight < 21) {
            output = "Underweight";
        } else if(weight >= 21 && weight < 26) {
            output = "fit";
        } else {
            output = "overweight";
        }
    } else if(age >= 11 && age <= 15) {
        if(weight < 26) {
            output = "Underweight";
        } else if(weight >= 26 && weight < 31) {
            output = "fit";
        } else {
            output = "overweight";
        }
    } else if(age >= 16 && age <= 20) {
        if(weight < 31) {
            output = "Underweight";
        } else if(weight >= 31 && weight < 41) {
            output = "fit";
        } else {
            output = "overweight";
        }
    } else {
        output = "Age > 20 isn't considered (as of now)"
    }
    if(weight > 150) {
        output = "please enter realistic weight";
    }
    document.getElementById("output").innerHTML = output;
}