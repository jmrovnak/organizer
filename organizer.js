var today = moment().format("MMMM Do YYYY"); 
console.log(today); //testing moment functionality

var date = document.querySelector("#current");
window.addEventListener("load", function () {
    current.innerHTML = today;
  }); // displays date on page load


var time = moment().format("HH:MM");
console.log(time); //testing moment functionality

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

 