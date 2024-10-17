function validateInput() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("number").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 1 || x > 100) {
    text = "Inalid input";
    <!-- document.getElementById("submit-button").style.display = "none"; --> 
    <!-- document.getElementById("content").classList.add("hide"); -->
    //window.alert("! ungültige Eingabe !\nBitte gib gültigen Wert ein:\n€1.00 bis €100.00");
  } else {
    text = "Valid input";
    <!-- document.getElementById("submit-button").style.display = "block"; --> 
    document.getElementById("betrag").innerHTML = x + ' &euro;'
  }
  document.getElementById("myMessage").innerHTML = text;
}