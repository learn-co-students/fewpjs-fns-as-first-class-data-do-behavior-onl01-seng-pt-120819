/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);


function handleClick(e) {
  const timeString = document.getElementById('time').value
  let testContent = "Test"
  
 displayMessage(greet(timeString))
} 


/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){ 

  console.log('myNumber', parseInt(time))
  let greetTime = parseInt(time)
  if (greetTime < 12) {
    return 'Good Morning'
  } else if (greetTime > 12 && greetTime < 17) {
    return 'Good Afternoon'
  } else {
    return 'Good Evening'
  }
  
  
}

function displayMessage(greet) {
   document.getElementById('greeting').innerText = greet; 

}


