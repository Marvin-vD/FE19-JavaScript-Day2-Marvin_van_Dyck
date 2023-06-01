//Temperature ex1
let temperature = (Math.random()*(25 - -5)-5);
console.log(temperature);
if(temperature <= 10){
    document.write("The weather is cold <hr>")
}
else{
    document.write("The weather is moderate <hr>")
}

//Random Food ex2
let favoriteFoods = ["pizza","Hamburger","ice cream", "chocolate"];
randomFood();
function randomFood(){
    let x = Math.floor(Math.random()*favoriteFoods.length);
    document.write(favoriteFoods[x] + "<hr>");
}

//Crystal Gazer ex3
crystalGazer("3","Steffi","Wien","WebDeveloper");
function crystalGazer(nrOfChildren, partnersName, location, job){
    document.write("You will be a " +job +" in "+location+" and married to "+ partnersName +" with " + nrOfChildren+" childrens <hr>");
}

//Age Calculator ex4
ageCalculator(2000,2023);
function ageCalculator(birthYear, currentYear){
    a2 = currentYear -birthYear;
    a1 = a2-1;
    document.write(`You are either ${a1} or ${a2} <hr>`);
}

//Age Calculator-improved ex5
let y = new Date().getFullYear();
ageCalculatorImpro(2000,y);
function ageCalculatorImpro(birthYear, currentYear){
    a2 = currentYear -birthYear;
    a1 = a2-1;
    document.write(`You are either ${a1} or ${a2} <hr>`);
}
//Degree-Radian Conversion ex6
converter(90);
function converter(degrees){
    let radian = degrees*(Math.PI/180)
    document.write(`${degrees} degrees are ${radian} radian <hr>`);
}
//Area and Volume of a box ex7
calculator(7,2,5);
var boxVolume
var area
function calculator(width, height, depth){
    area = width*height;
    boxVolume = width*height*depth;
    return box = [area, boxVolume];
}
document.write("The area of the box is: "+ box[0] + "<br>");
document.write("The volume of the box is: "+ box[1] + "<hr>");
//Capitalize
var string = "i am a web developer";
capitalizeFirstLetter(string)
function capitalizeFirstLetter(strin) {
    string = strin.charAt(0).toUpperCase() + strin.slice(1);
    return string;
}
document.write(`${string} <hr>`);
//Average Grade
var sum;
var average;
Grade(3,4,5);
function Grade(Math,Physics,English){
    sum = Math + Physics + English;
    average = sum / 3;
    return grades = [sum,average]
}
document.write(`Sum: ${sum} <br> Average: ${average} <hr>`);
//Time Convert
timeConverter(200);
var min;
var hours
function timeConverter(minutes){
    hours = Math.floor(minutes / 60);
    min = minutes - hours*60;
    return time = [min, hours, minutes];
}
document.write(`${time[2]} minutes = ${time[1]} hour(s) and ${time[0]} minute(s). <hr>`);