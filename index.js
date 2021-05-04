/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let time_array = time.split(':');
  let h = parseInt(time_array[0])
  let m = parseInt(time_array[1])
  if (h < 12) {
    return 'Good Morning';
  }
  else if (h < 17 && h > 12) {
    return 'Good Afternoon';
  }
  else if (h > 17) {
    return 'Good Evening';
  }
  return "Good Afternoon"
}



function displayMessage(msg){
  document.getElementById("greeting").innerText = msg;
}
