//Subscribe my Youtube Channel name "TRACKNTECH"

function bmi() {
    //Get feet and inches Value
    let feet = document.querySelector(".feet").value;
    let inch = document.querySelector(".inch").value;
    // Merge feet and inches Value in one
    let metre = feet + "." + inch;
    //feet to metre conversion and get The height in metre
    let height = metre / 3.2808;
    // Get Weight Value
    let weight = document.querySelector(".weight").value;
    //BMI Calculation
    let bmi = weight / Math.pow(height, 2);
    //BMI Showing in P Tag With condition
    if (bmi < 18.5) {
        document.querySelector("p").innerHTML =
            "Your Body Mass Index (BMI) is-: " +
            (Math.round(bmi * 100) / 100).toFixed(2) +
            "<br>" +
            " Index Value is in Under Weight";
    } else if (bmi > 18.5 && bmi <= 24.9) {
        document.querySelector("p").innerHTML =
            "Your Body Mass Index (BMI) is-: " +
            (Math.round(bmi * 100) / 100).toFixed(2) +
            "<br>" +
            " Index Value is in Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        document.querySelector("p").innerHTML =
            "Your Body Mass Index (BMI) is-: " +
            (Math.round(bmi * 100) / 100).toFixed(2) +
            "<br>" +
            " Index Value is in Over Weight";
    } else if (bmi > 30) {
        document.querySelector("p").innerHTML =
            "Your Body Mass Index (BMI) is-: " +
            (Math.round(bmi * 100) / 100).toFixed(2) +
            "<br>" +
            " Index Value is in Obesity";
    }
}
//Click Event on Calculate Button
document.querySelector(".btn").addEventListener("click", bmi);
