function validateForm(){
  var product = document.getElementsByName("pid")[0].value;
  submitOK = "true";

  // For product identifier
  if(product == "select"){
    alert("Please choose a valid product identifier.");
    submitOK = "false";
  }

  // For street
  var pattern = /^\d+\s[A-z]+\s[A-z]+/;
  var street = document.getElementsByName("addr").value;

  if(pattern.test(street) == false)
  {
    alert("Please input a valid street address.");
    submitOK = "false";
  }

  // Ensures form will submit only if ALL data is valid
  if(submitOK == "false"){
    return false;
  }
}
