//Fucntion to use fetch; calls post to my api to update view count in my database
function updateViewCount()
{
    fetch('https://nategoodmandevapi.herokuapp.com/views',
        {"method":"POST"})
    .then((response) => { 
        if (response.status == 200) 
        {
            console.log("Success!")
        }
        else 
        {
            console.log("Error!")
        }
    })
}
//Function to update view count is called on load 
window.onload = () => {updateViewCount()}
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