// ===========Question No:1===============

document.write("<h3>" + "<p>" + "Question No:01" + "</p>" + "</h3>")
var inp = +prompt("Question No:1\nEnter any decimal number")
document.write("Number: " + inp + "<br>")
document.write("Round off value: " + Math.round(inp) + "<br>")
document.write("Floor value: " + Math.floor(inp) + "<br>")
document.write("ceil value: " + Math.ceil(inp) + "<br>")

// ===========Question No:2===============

document.write("<h3>" + "<p>" + "Question No:02" + "</p>" + "</h3>")
var inp = +prompt("Question No:1\nEnter any negative floating number")
document.write("Number: " + inp + "<br>")
document.write("Round off value: " + Math.round(inp) + "<br>")
document.write("Floor value: " + Math.floor(inp) + "<br>")
document.write("ceil value: " + Math.ceil(inp) + "<br>")

// ===========Question No:3===============

document.write("<h3>" + "<p>" + "Question No:03" + "</p>" + "</h3>")
var inp = +prompt("Question No:3\nEnter any number the program will give you it absolute value")
document.write("The absolute value of " + inp + " is " + Math.abs(inp))

// ===========Question No:4===============

document.write("<h3>" + "<p>" + "Question No:04" + "</p>" + "</h3>")
var math = (Math.random() * 6)
document.write("Random dice value: " + Math.ceil(math))

// ===========Question No:5===============

document.write("<h3>" + "<p>" + "Question No:05" + "</p>" + "</h3>")
var math = (Math.random() * 2)
math = Math.ceil(math)
if (math === 2) {
    document.write("Random Coin Value: Head ")
}
else {
    document.write("Random Coin Value: Tail ")
}

// ===========Question No:6===============

document.write("<h3>" + "<p>" + "Question No:06" + "</p>" + "</h3>")
var math = (Math.random() * 100)
document.write("Random number between 1 to 100 is: " + Math.floor(math))

// ===========Question No:7===============

document.write("<h3>" + "<p>" + "Question No:07" + "</p>" + "</h3>")
var inp = prompt("Question No:7\nEnter your weight")
var str = []
for (var i = 0; i < inp.length; i++) {
    if (inp[i] < 9 || inp[i] === ".") {
        str.push(inp[i])
    }
}
document.write("The weight of user is " + str.join("") + " kilograms")

// ===========Question No:8===============

document.write("<h3>" + "<p>" + "Question No:08" + "</p>" + "</h3>")
var math = (Math.random() * 10)
math = Math.ceil(math)
var inp = +prompt("Question No:8\nEnter secret number from 1 to 10")
if (inp === math) {
    alert("You Win")
}
else {
    alert("Try Again")
}

