//Checks local storage to see if user preference is saved to darkmode and switches to it if so
if (localStorage.getItem("darkmode") == "true")
{
    document.body.classList =("darkmode");
}
//Swaps between light and dark mode on button click
function swapMode() 
{
    document.body.classList.toggle("darkmode")        
}
//Save darkmode preference to local storage
function updateLocalPref()
{
    if (localStorage.getItem("darkmode") == "true")
    {
        localStorage.setItem("darkmode", false)
    }
    else 
    {
        localStorage.setItem("darkmode", true)
    }
}
//Calls both functions in one; for use as button onclick function in index.html
function onClick()
{
    swapMode()
    updateLocalPref()
}

function secret() 
{
    window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
}