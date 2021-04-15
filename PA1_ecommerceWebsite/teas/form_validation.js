function validateForm(){
  var product = document.getElementsByName("pid")[0].value;
  submitOK = "true";

  // For product identifier
  if(product == "select"){
    alert("Please choose a valid product identifier.");
    submitOK = "false";
  }

  // For street
  var street_pattern = /^[0-9][0-9][0-9](?:[0-9])?(\s[A-za-z]+){2,}$/;
  /* ^[0-9] three times means string must begin with at least 3 digits
     (?:[0-9])? means it's optional to have a fourth digit at beginning of string
     (\s[A-za-z]+) cannot contain digits, only alpha characters
     {2,} is at least 2 repetitions
  */

  var street = document.getElementById("addr").value;

  if(street_pattern.test(street) == false)
  {
    alert("Please input a valid street address.");
    submitOK = "false";
  }

  //For apt/suite/bldg
  var apt_pattern = /(Apt|Suite|Ste|Bldg)\s\d+$/;
  var apt = document.getElementById("addr2").value;

  if((apt != "") && (apt_pattern.test(apt) == false)){
    alert("Please input a valid apt/suite/bldg");
    submitOK = "false";
  }

  // Ensures form will submit only if ALL data is valid
  if(submitOK == "false"){
    return false;
  }
}
