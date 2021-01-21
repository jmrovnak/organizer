var today = moment().format("MMMM Do YYYY"); 
console.log(today); //testing moment functionality

var date = document.querySelector("#current");
window.addEventListener("load", function () {
    current.innerHTML = today;
  }); // displays date on page load


var time = moment().format("HH:MM");
console.log(time); //testing moment functionality

// storing input in local storage
var blockOne = document.querySelector("#blockOne");var store = document.querySelector(".saveBtn");
store.addEventListener("click", function () {
    localStorage.setItem("9:00", (blockOne.value));
}) 

blockOne.append(localStorage.getItem("9:00"));

