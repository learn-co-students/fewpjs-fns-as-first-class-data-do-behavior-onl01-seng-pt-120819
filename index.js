/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(timeStr){
const parsedHours = parseInt(timeStr)
if (parsedHours < 12)
 return 'Good Morning'
else if (parsedHours > 17)
  return 'Good Evening'
else
 return 'Good Afternoon'
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function displayMessage(str){
  document.getElementById('greeting').innerText = str
}