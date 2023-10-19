// Fahrenheit/Celsius Conversions

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let FtoC = +document.getElementById("FtoC").value;
  let CtoF = +document.getElementById("CtoF").value;

  //Fahrenheit to Celsius
  let total1 = ((FtoC - 32) * 5) / 9;
  document.getElementById("COutput").innerHTML = total1;

  //Celsius to Fahrenheit
  let total2 = (CtoF * 9) / 5 + 32;
  document.getElementById("FOutput").innerHTML = total2;
}
