var mytxt = "hello from javascript practice part",
    mytxt2 =mytxt.toUpperCase();
    i =0,
    mybutton = document.getElementById("button");

window.onload =function(){
mybutton.onclick = function(){
    "use strict";
    var typewriter  = setInterval(function(){
        
        document.getElementById("type").textContent += mytxt2[i];
        i++;
        if(i > mytxt.length-1)
            {
                clearInterval(typewriter);
            }
    },50);
}
}