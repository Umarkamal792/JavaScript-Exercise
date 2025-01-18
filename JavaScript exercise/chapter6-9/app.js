// ===========Question No:1============

var num = +prompt("Question NO: 1 \nEnter any number")
document.write("<P>" + "<h1>" + "Question No:1" + "</h1>" + "</P>")
document.write("<P>" + "Results:" + "</P>")
document.write("<P>" + "The value of number is: " + num + "</P>")

document.write("<br>" + "<P>" + "The value of ++number is: " + ++num + "</P>")
document.write("<P>" + "Now the value of Number is: " + num + "</P>")

document.write("<br>" + "<P>" + "The value of number++ is: " + num++ + "</P>")
document.write("<P>" + "Now the value of Number is: " + num + "</P>")

document.write("<br>" + "<P>" + "The value of --number is: " + --num + "</P>")
document.write("<P>" + "Now the value of Number is: " + num + "</P>")

document.write("<br>" + "<P>" + "The value of number-- is: " + num-- + "</P>")
document.write("<P>" + "Now the value of Number is: " + num + "</P>")

// ===========Question No:2============

document.write("<P>" + "<h1>" + "Question No:2" + "</h1>" + "</P>")

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("<P>" + "var a = 2, b = 1;" + "</P>")
document.write("<P>" + "var result = --a - --b + ++b + b--;" + "</P>")
document.write("<P>" + "--a ==>" + 1 + "</P>")
document.write("<P>" + "--a - --b ==>" + 1 + "</P>")
document.write("<P>" + "--a - --b + ++b ==>" + 2 + "</P>")
document.write("<P>" + "--a - --b + ++b + b-- ==>" + 3 + "</P>")
document.write("<P>" + "Results: " + result + "</P>")

// ===========Question No:3============

var name = prompt("Question NO: 3 \nEnter your name")
alert("As-salāmu ʿalaykum " + name)

// ===========Question No: 4 & 5 ============

var tab = +prompt("Question NO: 5 \nEnter the any number it will show their Multiplication Table")
var number = 0;
document.write("<P>" + "<h1>" + "Question No:4" + "</h1>" + "</P>")
if (tab >= 1) {
    document.write("<P>" + tab + " x " + ++number + " = " + number * tab + "</P>")
    document.write("<P>" + tab + " x " + ++number + " = " + number * tab + "</P>")
    document.write("<P>" + tab + " x " + ++number + " = " + number * tab + "</P>")
    document.write("<P>" + tab + " x " + ++number + " = " + number * tab + "</P>")
    document.write("<P>" + tab + " x " + ++number + " = " + number * tab + "</P>")
    document.write("<P>" + tab + " x " + ++number + " = " + number * tab + "</P>")
    document.write("<P>" + tab + " x " + ++number + " = " + number * tab + "</P>")
    document.write("<P>" + tab + " x " + ++number + " = " + number * tab + "</P>")
    document.write("<P>" + tab + " x " + ++number + " = " + number * tab + "</P>")
    document.write("<P>" + tab + " x " + ++number + " = " + number * tab + "</P>")
}
else {
    tab = 5;
    document.write("<P>" + tab + " x " + ++number + " = " + number * tab + "</P>")
    document.write("<P>" + tab + " x " + ++number + " = " + number * tab + "</P>")
    document.write("<P>" + tab + " x " + ++number + " = " + number * tab + "</P>")
    document.write("<P>" + tab + " x " + ++number + " = " + number * tab + "</P>")
    document.write("<P>" + tab + " x " + ++number + " = " + number * tab + "</P>")
    document.write("<P>" + tab + " x " + ++number + " = " + number * tab + "</P>")
    document.write("<P>" + tab + " x " + ++number + " = " + number * tab + "</P>")
    document.write("<P>" + tab + " x " + ++number + " = " + number * tab + "</P>")
    document.write("<P>" + tab + " x " + ++number + " = " + number * tab + "</P>")
    document.write("<P>" + tab + " x " + ++number + " = " + number * tab + "</P>")
}

// ===========Question No:6============

var sub1 = prompt("Question No:6 \nEnter first subject name")
var sub2 = prompt("Enter second subject name")
var sub3 = prompt("Enter third subject name")
var tmarks = 100;
var marks1 = +prompt("Enter first subject number")
var marks2 = +prompt("Enter second subject number")
var marks3 = +prompt("Enter third subject number")
document.getElementById("name1").innerHTML = sub1
document.getElementById("name2").innerHTML = sub2
document.getElementById("name3").innerHTML = sub3
document.getElementById("tmarks1").innerHTML = tmarks
document.getElementById("tmarks2").innerHTML = tmarks
document.getElementById("tmarks3").innerHTML = tmarks
document.getElementById("omarks1").innerHTML = marks1
document.getElementById("omarks2").innerHTML = marks2
document.getElementById("omarks3").innerHTML = marks3
document.getElementById("per1").innerHTML = (marks1 / tmarks) * 100 + "%"
document.getElementById("per2").innerHTML = (marks2 / tmarks) * 100 + "%"
document.getElementById("per3").innerHTML = (marks3 / tmarks) * 100 + "%"
var totalmarks = 300
document.getElementById("tmarks").innerHTML = totalmarks
var ObtainMarks = marks1 + marks2 + marks3
document.getElementById("omarks4").innerHTML = ObtainMarks
document.getElementById("per4").innerHTML = (ObtainMarks / totalmarks) * 100 + "%"
