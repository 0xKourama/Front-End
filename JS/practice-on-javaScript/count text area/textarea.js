var count = document.getElementById("count"),
    text =document.getElementById("text"),
    max = text.getAttribute("maxlength");

text.oninput =function(){
    count.innerHTML = max - this.value.length;
    if(count.innerHTML == 0)
        {
            text.classList.add("green");
            count.classList.add("red");
            count.innerHTML = "the is your limit";
        }
    else
        {
            text.classList.remove("green");
            count.classList.remove("red");
        }
}