var today = moment().format("MMMM Do YYYY"); 
console.log(today); //testing moment functionality

var date = document.querySelector("#current");
window.addEventListener("load", function () {
    current.innerHTML = today;
  }); // displays date on page load


var time = moment().format("HH:MM");
console.log(time); //testing moment functionality

//display time at page load
window.addEventListener("load", function () {
    var now = document.querySelector("#now");
    now.innerHTML = time
})

// setting variables for local storage
var blockOne = document.querySelector("#blockOne");
var blockTwo = document.querySelector("#blockTwo");
var blockThree = document.querySelector("#blockThree");
var blockFour = document.querySelector("#blockFour");
var blockFive = document.querySelector("#blockFive");
var blockSix = document.querySelector("#blockSix");
var blockSeven = document.querySelector("#blockSeven");
var blockEight = document.querySelector("#blockEight");


var store1 = document.querySelector("#btnOne");
var store2 = document.querySelector("#btnTwo");
var store3 = document.querySelector("#btnThree");
var store4 = document.querySelector("#btnFour");
var store5 = document.querySelector("#btnFive");
var store6 = document.querySelector("#btnSix");
var store7 = document.querySelector("#btnSeven");
var store8 = document.querySelector("#btnEight");

// sending input to local storage
store1.addEventListener("click", function () {
    localStorage.setItem("9:00", (blockOne.value));
   
    }) 

store2.addEventListener("click", function () {
    localStorage.setItem("10:00", (blockTwo.value));
 })

 store3.addEventListener("click", function () {
    localStorage.setItem("11:00", (blockThree.value));
 })

 store4.addEventListener("click", function () {
    localStorage.setItem("12:00", (blockFour.value));
 })

 store5.addEventListener("click", function () {
    localStorage.setItem("1:00", (blockFive.value));
 })

 store6.addEventListener("click", function () {
    localStorage.setItem("2:00", (blockSix.value));
 })

 store7.addEventListener("click", function () {
    localStorage.setItem("3:00", (blockSeven.value));
 })

 store8.addEventListener("click", function () {
    localStorage.setItem("4:00", (blockEight.value));
 })

 // setting variables to retrieve from local storage
 var local1 = localStorage.getItem("9:00");

 var local2 = localStorage.getItem("10:00");

 var local3 = localStorage.getItem("11:00");

 var local4 = localStorage.getItem("12:00");

 var local5 = localStorage.getItem("1:00");

 var local6 = localStorage.getItem("2:00");

 var local7 = localStorage.getItem("3:00");

 var local8 = localStorage.getItem("4:00");

// setting a function to grab local storage data on page reload
window.addEventListener("load", store);

// console testing above
function store() {
    console.log(local1);
    console.log(local2);
    console.log(local3);
    console.log(local4);
    console.log(local5);
    console.log(local6);
    console.log(local7);
    console.log(local8);
}

var colorCode = parseInt(moment().format("HH"));
console.log(colorCode);