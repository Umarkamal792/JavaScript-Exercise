// ============= Question NO:1==============

var num1 = +prompt("Question NO:1 \nEnter first number")
var num2 = +prompt("Enter second number")
var sum = num1 + num2
document.write("<P>" + "<h1>" + "Question No:1" + "</h1>" + "</P>")
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>")

// ============= Question NO:2==============

document.write("<P>" + "<h1>" + "Question No:2" + "</h1>" + "</P>")
document.write("Subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2) + "<br>")
document.write("Multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2) + "<br>")
document.write("division of " + num1 + " and " + num2 + " is " + (num1 / num2).toFixed(2) + "<br>")

// ============= Question NO:3==============

var num;
document.write("<P>" + "<h1>" + "Question No:3" + "</h1>" + "</P>")
document.write("value after variable declaration is: " + num + "<br>")
num = 7;
document.write("value after variable Initialization is: " + num + "<br>")
num++;
document.write("value after increment is: " + num + "<br>")
num = num + 7;
document.write("value after addition is: " + num + "<br>")
num--;
document.write("value after decrement is: " + num + "<br>")
num = num % 3;
document.write("Reminder after division is: " + num + "<br>")

// ============= Question NO:4==============

var cost = 600;
document.write("<P>" + "<h1>" + "Question No:4" + "</h1>" + "</P>")
document.write("Total cost to but 5 tickets to a movie is " + cost * 5 + "PKR")

// ============= Question NO:5==============

var tab = +prompt("Question NO:5 \nEnter the table number")
var number = 0;
document.write("<P>" + "<h1>" + "Question No:5" + "</h1>" + "</P>")
document.write(tab + " X " + ++number + " = " + (tab * number) + "<br>")
document.write(tab + " X " + ++number + " = " + (tab * number) + "<br>")
document.write(tab + " X " + ++number + " = " + (tab * number) + "<br>")
document.write(tab + " X " + ++number + " = " + (tab * number) + "<br>")
document.write(tab + " X " + ++number + " = " + (tab * number) + "<br>")
document.write(tab + " X " + ++number + " = " + (tab * number) + "<br>")
document.write(tab + " X " + ++number + " = " + (tab * number) + "<br>")
document.write(tab + " X " + ++number + " = " + (tab * number) + "<br>")
document.write(tab + " X " + ++number + " = " + (tab * number) + "<br>")
document.write(tab + " X " + ++number + " = " + (tab * number) + "<br>")

// ============= Question NO:6==============

document.write("<P>" + "<h1>" + "Question No:6" + "</h1>" + "</P>")
var c = +prompt("enter celsius temperature")
var f = +prompt("enter fahrenheit temperature")
var a = (f - 32) * 5 / 9
var b = (c - 9 / 5) + 32
document.write(c + "<sup>" + "o" + "</sup>" + "C is " + b.toFixed(2) + "<sup>" + "o" + "</sup>" + "F" + "<br>")
document.write(f + "<sup>" + "o" + "</sup>" + "F is " + a.toFixed(2) + "<sup>" + "o" + "</sup>" + "C" + "<br>")

// ============= Question NO:7==============

var item1 = 650;
var item2 = 100;
var ord1 = 3;
var ord2 = 7;
var ship = 100;
document.write("<P>" + "<h1>" + "Question No:7" + "</h1>" + "</P>")
document.write("<P>" + "Price of item 1 is " + item1 + "</P>")
document.write("<P>" + "Quantity of item 1 is " + ord1 + "</P>")
document.write("<P>" + "Price of item 2 is " + item2 + "</P>")
document.write("<P>" + "Quantity of item 2 is " + ord2 + "</P>")
document.write("<P>" + "Shipping Cost " + ship + "</P>")
document.write("<P>" + "Total cost of your order " + ((item1 * ord1) + (item2 * ord2) + ship) + "</P>")

// ============= Question NO:8==============

document.write("<P>" + "<h1>" + "Question No:8" + "</h1>" + "</P>")
var mOba = 383;
var mTot = 500;
var per = ((mOba / mTot) * 100).toFixed(2)
document.write("<P>" + "Total Marks: " + mTot + "</P>")
document.write("<P>" + "Obtained Marks: " + mOba + "</P>")
document.write("<P>" + "Percentage: " + per + "%" + "</P>")

// ============= Question NO:9==============

document.write("<P>" + "<h1>" + "Question No:9" + "</h1>" + "</P>")
document.write("<P>" + "Total Currency in PKR: " + ((10 * 218.50) + (58.19 * 28)).toFixed(2) + "</P>")

// ============= Question NO:10==============

var num = ((2 + 5) * 10) / 2

// ============= Question NO:11==============

var cur = 2022;
var pre = 1997;
document.write("<P>" + "<h1>" + "Question No:11" + "</h1>" + "</P>")
document.write("<P>" + "The user is " + (cur - pre) + " old" + "</P>")

// ============= Question NO:12==============

document.write("<P>" + "<h1>" + "Question No:12" + "</h1>" + "</P>")
var r = 20;
var cir = 2 * 3.142 * r
var area = 3.142 * (r * r)
document.write("<P>" + "Radius of a circle: " + r + "</P>")
document.write("<P>" + "Circumference of a circle: " + cir.toFixed(2) + "</P>")
document.write("<P>" + "Area of a circle: " + area + "</P>")

// ============= Question NO:13==============

var snack = "chocolate chip"
var age = 25
var maxAge = 65
var numb = 2
document.write("<P>" + "<h1>" + "Question No:13" + "</h1>" + "</P>")
document.write("<p>" + "you will need " + (((maxAge - age) * 365) * numb) + " " + snack + " to last you until the ripe old age of " + maxAge)

