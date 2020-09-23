var up = document.getElementById("up");
window.onscroll =function(){
    if(window.pageYOffset > 400)
        {
            up.style.display = "block";
        }
    else
        {
            up.style.display = "none";
        }
};
up.onclick = function(){
    window.scroll(0,0);
}