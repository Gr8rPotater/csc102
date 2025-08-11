// Get the form element
let form = document.getElementById("secretForm");

form.onsubmit = function(event) {

  // Get the values from the input boxes
  first = document.getElementById("firstName").value;
  last = document.getElementById("lastName").value;
   zip = document.getElementById("zip").value;



  // Clear previous messages after submitting any response
  document.getElementById("Failure").innerHTML = "";
  document.getElementById("secret").innerHTML = "";

  // checks if full name is longer thatn 20 digits
  if (first+last.length > 20) {
    document.getElementById("Failure").innerHTML = " Your name is too long! Max 20 characters allowed.";
    return; // Do not continue
  }

  // checks to see if zip is exactly 5 digits and contains only numbers
  if (!/^\d{5}$/.test(zip)) {
    document.getElementById("Failure").innerHTML = " Please enter a valid 5-digit zip code.";
    return; // Do not continue
  }

  // If inputs are acceptable, shows the secret message
  document.getElementById("secret").innerHTML = `<p>" The cake is NOT a lie."  </p><Image id="CAKE" src="cake.png"> </Image>`;

    // Stops the page from refreshing when hitting the submit button
  event.preventDefault();

}


  // ------Palindrome area--------

  // Get references to elements for the palindrome area
  let palindromeInput = document.getElementById("palindromeInput");
  let palindromeButton = document.getElementById("palindromeButton");
  let palindromeResultSuccess = document.getElementById("Palindrome");        
  let palindromeResultFailure = document.getElementById("PalindromeFailure"); 

  // Run when the button is clicked
  palindromeButton.onclick = function () {


    // To remove any previous failure/success
    palindromeResultSuccess.innerHTML = "";
    palindromeResultFailure.innerHTML = "";

    // Get user input
    let text = palindromeInput.value;

    // Remove spaces and lowercase for checking
    let normal = text.replace(/\s+/g, '').toLowerCase();

    // Reverse the regular text to check if it is a palindrome
    let reversed = normal.split('').reverse().join('');

    // Display result
    if (normal && normal === reversed) {
        document.getElementById("Palindrome").innerHTML = `<p>"${text} is a palindrome!"  </p><Image id="tacocat" src="tacocat.jpg"> </Image>`;

    } else {
       document.getElementById("PalindromeFailure").innerHTML = `<p> "${text} isnt a palindrome. Try Again" </p>` ;
    }

    // Clear the input box and results
    palindromeInput.value = "";
};
