// declare all variables
var heading = document.getElementById("heading"),
    button = document.getElementById("button"),
    ul = document.getElementById("ul"),
    li = document.getElementById("ul").getElementsByTagName("li"),
    counter =1;
//loop for calling active function
ul.addEventListener("click", active);
//active function
function active(e)
{
    //when click on li 
    if(e.target.nodeName = "li")
        {
            heading.innerHTML = e.target.innerHTML;
            for(var i = 0; i < e.target.parentNode.children.length ; i++)
                {
                    e.target.parentNode.children[i].classList.remove("active");
                }
            e.target.classList.add("active");
        }
}
//call add items functions
button.addEventListener("click" , add)
//add function
function add() 
{
    ul.innerHTML += "<li>new" + counter + "</li>";
    counter++;
}