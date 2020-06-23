/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
    const timeString = document.getElementById('time').value
    displayMessage(greet(timeString))

}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
    let timeSplit = time.split(':')
    let clipTime = parseInt(timeSplit[0])
    if (clipTime >= 0 && clipTime < 12) {
        return "Good Morning"
    } else if (clipTime > 17 && clipTime <= 23) {
        return "Good Evening"
    } else if (clipTime >= 12 && clipTime <= 17) {
        return "Good Afternoon"
    }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
    document.querySelector("#greeting").innerText = message
    return
}