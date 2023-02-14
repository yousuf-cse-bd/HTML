
let weight = prompt("Enter your weight [KG.grams] here:");
weight = Math.abs(weight);

let height = prompt("Enter your height [Feet.Inches] here:");
height = Math.abs(height);
height = parseFloat(height);

/*To convert height in SI meter system*/
const heightM = parseFloat(height * 0.3048);

document.write("Your weight: ", weight + " KG<br>");
document.write("Your height: ", heightM + " M<br>");

const bmiValue = weight / (height * height);
document.write("Your BMI value: ", bmiValue + " KG/M^2<br>");


