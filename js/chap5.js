// Assignment #5 – Math Expressions in JavaScript.


// Q1 - Addition
document.write("<h3>Q1 - Addition</h3>");
var num1 = 5;
var num2 = 3;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br><br>");


// Q2 - Sub, Mul, Div, Mod
document.write("<h3>Q2 - Subtraction, Multiplication, Division, Modulus</h3>");
document.write("Subtraction: " + (num1 - num2) + "<br>");
document.write("Multiplication: " + (num1 * num2) + "<br>");
document.write("Division: " + (num1 / num2) + "<br>");
document.write("Modulus: " + (num1 % num2) + "<br><br>");


// Q3 - Variable operations
document.write("<h3>Q3 - Variable Manipulation</h3>");
var a;
document.write("Value after variable declaration is: " + a + "<br>");
a = 5;
document.write("Initial value: " + a + "<br>");
a++;
document.write("Value after increment is: " + a + "<br>");
a += 7;
document.write("Value after addition is: " + a + "<br>");
a--;
document.write("Value after decrement is: " + a + "<br>");
var remainder = a % 3;
document.write("The remainder is: " + remainder + "<br><br>");


// Q4 - Movie Ticket
document.write("<h3>Q4 - Movie Ticket</h3>");
var ticketPrice = 600;
var quantity = 5;
var totalCost = ticketPrice * quantity;
document.write("Total cost to buy " + quantity + " tickets is " + totalCost + " PKR<br><br>");


// Q5 - Multiplication Table
document.write("<h3>Q5 - Multiplication Table</h3>");
var table = 4;
for (var i = 1; i <= 10; i++) {
  document.write(table + " x " + i + " = " + (table * i) + "<br>");
}
document.write("<br>");


// Q6 - Temperature Converter
document.write("<h3>Q6 - Temperature Converter</h3>");
var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");
var f = 70;
var c = (f - 32) * 5/9;
document.write(f + "°F is " + c + "°C<br><br>");


// Q7 - Shopping Cart
document.write("<h3>Q7 - Shopping Cart</h3>");
var price1 = 650;
var price2 = 100;
var qty1 = 3;
var qty2 = 7;
var shipping = 100;
var total = (price1 * qty1) + (price2 * qty2) + shipping;
document.write("Price of item 1 is " + price1 + "<br>");
document.write("Quantity of item 1 is " + qty1 + "<br>");
document.write("Price of item 2 is " + price2 + "<br>");
document.write("Quantity of item 2 is " + qty2 + "<br>");
document.write("Shipping charges " + shipping + "<br><br>");
document.write("Total cost of your order is " + total + "<br><br>");


// Q8 - Percentage
document.write("<h3>Q8 - Percentage</h3>");
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br><br>");


// Q9 - Currency Conversion
document.write("<h3>Q9 - Currency Conversion</h3>");
var usd = 10;
var riyal = 25;
var totalPKR = (usd * 104.80) + (riyal * 28);
document.write("Total Currency in PKR: " + totalPKR + "<br><br>");


// Q10 - Arithmetic Sequence
document.write("<h3>Q10 - Arithmetic Operations</h3>");
var num = 5;
var result = ((num + 5) * 10) / 2;
document.write("Result: " + result + "<br><br>");


// Q11 - Age Calculator
document.write("<h3>Q11 - Age Calculator</h3>");
var currentYear = 2025;
var birthYear = 2005;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("They are either " + age2 + " or " + age1 + " years old<br><br>");


// Q12 - Geometrizer
document.write("<h3>Q12 - Geometrizer</h3>");
var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area + "<br><br>");


// Q13 - Lifetime Supply
document.write("<h3>Q13 - Lifetime Supply Calculator</h3>");
var snack = "Oreo";
var currentAge = 20;
var maxAge = 80;
var perDay = 2;
var totalNeeded = (maxAge - currentAge) * 365 * perDay;
document.write("You will need " + totalNeeded + " " + snack + " to last you until the ripe old age of " + maxAge + "<br><br>");
