var Local = document.getElementById("local");
var National = document.getElementById("national");
var X1 = prompt("Enter X1 Value = ","");
var X2 = prompt("Enter X2 Value = ","");
var X3 = prompt("Enter X3 Value = ","");
var Y = (parseInt(X1) + parseInt(X2))/X3;
var Sidebar1 = document.getElementById("Sidebar1");
var Sidebar2 = document.getElementById("Sidebar2");
var Section1 = document.getElementById("Section1");
var Section2 = document.getElementById("Section2");
var Sidebar3 = document.getElementById("Button");
var Sidebar4 = document.getElementById("Sidebar4");
var Footer = document.getElementById("Footer");
var MyButton = document.getElementById("Button")
var List = document.getElementById("myNav");
var Counter = 1;

Sidebar2.addEventListener("mouseover", mouseOver);
function mouseOver() {
	Sidebar2.style.color = "black";
	Sidebar2.className = "OnStyle2"; 
	Sidebar1.style.color = "black";
	Sidebar1.className = "OnStyle1";
	Section1.className = "OnStyle3";
	Section2.className = "OnStyle4";
	Sidebar3.className = "OnStyle5";
	Sidebar4.className = "OnStyle7";
	Footer.className = "OnStyle6";
	Local.innerHTML = "X1 = 300, X2 = 700, X3 = 500, Y = (X1 + X2) / X3 = "+Y;
    National.innerHTML = "X1 = 300, X2 = 700, X3 = 500, Y = (X1 + X2) / X3 = "+Y;
    Footer. innerHTML = "<h3>Why Do We Fall? <br> So We Can Learn to Pick Ourselves Up. —— The Batman</h3>";
}

Sidebar2.addEventListener("mouseout", mouseOut);
function mouseOut() {
	Sidebar2.style.color = "black";
	Sidebar2.className = "OutStyle2";
	Sidebar1.style.color = "black";
	Sidebar1.className = "OutStyle1";
	Section1.className = "OutStyle3";
	Section2.className = "OutStyle4";
	Sidebar3.className = "OutStyle5";
	Sidebar4.className = "OutStyle7";
	Footer.className = "OutStyle6";
	Footer.innerHTML = "Footer Information";
	Local.innerHTML = "Local News";
    National.innerHTML = "National News";
}

var Article1 = document.getElementById("Article1");
var Article2 = document.getElementById("Article2");
var F1 = document.getElementById("F1");
var F2 = document.getElementById("F2");
var F3 = document.getElementById("F3");
var F4 = document.getElementById("F4");
var F5 = document.getElementById("F5");
var F6 = document.getElementById("F6");
var F7 = document.getElementById("F7");
var F8 = document.getElementById("F8");

Section1.addEventListener("mouseover", mouseOver2);
function mouseOver2() {
	Sidebar2.style.color = "black";
	Sidebar2.className = "OnStyle2"; 
	Sidebar1.style.color = "black";
	Sidebar1.className = "OnStyle1";
	Section1.className = "OnStyle3";
	F1.style.fontSize = "xx-large";
    F2.style.fontSize = "x-large";
    F3.style.fontSize = "x-large";
    F4.style.fontSize = "x-large";
    F5.style.fontSize = "xx-large";
    F6.style.fontSize = "x-large";
    F7.style.fontSize = "x-large";
    F8.style.fontSize = "x-large";
    Local.style.fontSize = "xx-large";
    Article1.style.backgroundColor = "#D4D2FD";
    Article2.style.backgroundColor = "#D4D2FD";
}

Section1.addEventListener("mouseout", mouseOut2);
function mouseOut2() {
	Sidebar2.style.color = "black";
	Sidebar2.className = "OutStyle2"; 
	Sidebar1.style.color = "black";
	Sidebar1.className = "OutStyle1";
	Section1.className = "OutStyle3";
	F1.style.fontSize = "1.17em";
    F2.style.fontSize = "medium";
    F3.style.fontSize = "medium";
    F4.style.fontSize = "medium";
    F5.style.fontSize = "1.17em";
    F6.style.fontSize = "medium";
    F7.style.fontSize = "medium";
    F8.style.fontSize = "medium";
    Local.style.fontSize = "x-large";
    Article1.style.backgroundColor = "white";
    Article2.style.backgroundColor = "white";
}

var Article3 = document.getElementById("Article3");
var Article4 = document.getElementById("Article4");
var F9 = document.getElementById("F9");
var F10 = document.getElementById("F10");
var F11 = document.getElementById("F11");
var F12 = document.getElementById("F12");
var F13 = document.getElementById("F13");
var F14 = document.getElementById("F14");
var F15 = document.getElementById("F15");
var F16 = document.getElementById("F16");

Section2.addEventListener("mouseover", mouseOver3);
function mouseOver3() {
	Sidebar3.className = "OnStyle5";
	Sidebar4.className = "OnStyle7";
	Section2.className = "OnStyle4";
	F9.style.fontSize = "xx-large";
    F10.style.fontSize = "x-large";
    F11.style.fontSize = "x-large";
    F12.style.fontSize = "x-large";
    F13.style.fontSize = "xx-large";
    F14.style.fontSize = "x-large";
    F15.style.fontSize = "x-large";
    F16.style.fontSize = "x-large";
    National.style.fontSize = "xx-large";
    Article3.style.backgroundColor = "#F9F9D3";
    Article4.style.backgroundColor = "#F9F9D3";
    Footer.className = "OnStyle6";
    Footer. innerHTML = "<h3>Why Do We Fall? <br> So We Can Learn to Pick Ourselves Up. —— The Batman</h3>";
}

Section2.addEventListener("mouseout", mouseOut3);
function mouseOut3() {
	Sidebar3.className = "OutStyle5";
	Sidebar4.className = "OutStyle7";
	Section2.className = "OutStyle4";
	F9.style.fontSize = "1.17em";
    F10.style.fontSize = "medium";
    F11.style.fontSize = "medium";
    F12.style.fontSize = "medium";
    F13.style.fontSize = "1.17em";
    F14.style.fontSize = "medium";
    F15.style.fontSize = "medium";
    F16.style.fontSize = "medium";
    National.style.fontSize = "x-large";
    Article3.style.backgroundColor = "white";
    Article4.style.backgroundColor = "white";
    Footer.className = "OutStyle6";
	Footer.innerHTML = "Footer Information";
}

MyButton.addEventListener("click", Create);
function Create () {
	List.innerHTML += "<li>Something "+ Counter +"</li>";
	Counter++;
	List.style.color = "#F9ACB4";
}

function myFunction(x) {
    var Input = document.getElementById("Input").value;
    document.getElementById("Text").innerHTML = "Your Name is: <br>" + Input;
    x.style.background = "#BCDAF3";
}

var Button_2 = document.getElementById("Button_2");
Button2.addEventListener("click", activateItem);
function activateItem () {
    alert("Your information has been submitted successfully!");
}