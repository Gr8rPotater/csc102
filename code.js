// This should be creating a function that simulates shooting at a target
function shootArrow() {

    // generates a random number using the previously defined min and max
    // math.ceil rounds up so that there are no decimals. the 100 is setting the parameters to 1-100
    accuracy =  Math.ceil(Math.random() * 100);

    // Display the accuracy score
    document.getElementById("score").innerHTML = "Accuracy Score: " + accuracy;
    // Displays the image
    img = document.getElementById("targetImage");

    // Determine the result based on the accuracy score
    if (accuracy >= 90) {
        document.getElementById("result").innerHTML = "🎯 Bullseye!"
        img.src="BULLSEYE.png";
    } else if (accuracy <= 70) {
        document.getElementById("result").innerHTML = "🟢 You're Almost There!"
        img.src="So Close.png";
    } else if (accuracy >= 40) {
        document.getElementById("result").innerHTML = "🟡 Near Miss! So close!"
        img.src="hit.png";
    } else {
        document.getElementById("result").innerHTML = "❌ Miss! Better luck next time!"
        img.src="Miss.png";
    }
}
