var myinput = document.getElementById("myinput"),
    count = document.getElementById("count"),
    max = myinput.getAttribute("maxlength"),
    button = document.getElementById("button");
//show and hide password
button.onclick = function(){
  "use strict";
    
    if(this.textContent === "Show Password")
        {
            myinput.setAttribute("type","text");
            this.textContent = "Hide Password";
        }
    else
        {
            myinput.setAttribute("type","password");
            this.textContent = "Show Password";
        }
};
//show and hide placeholder
myinput.onfocus = function(){
     "use strict";
    //backup attribute 
    this.setAttribute("backup_holder",this.getAttribute("placeholder"));
    // embty place holder attribute
    this.setAttribute("placeholder"," ");
    
};
myinput.onblur = function(){
     "use strict";
    //backup attribute 
    this.setAttribute("placeholder",this.getAttribute("backup_holder"));
    // embty place holder attribute
    this.setAttribute("backup_holder","");
};
//count

myinput.oninput =function(){
    count.innerHTML = max - this.value.length;
    if(count.innerHTML == 0)
        {
            myinput.classList.add("green");
            count.classList.add("white");
            count.innerHTML = "the is your limit";
        }
    else
        {
            myinput.classList.remove("green");
            count.classList.remove("white");
        }
}