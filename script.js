// program to display the date
// 1000 milliseconds seconds in 1 second


setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("date").innerHTML = date.toLocaleTimeString();
}

