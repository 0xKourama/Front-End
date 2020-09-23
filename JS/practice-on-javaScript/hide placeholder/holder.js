var myinput = document.getElementById("myinput");
myinput.onfocus = function(){
     "use strict";
    //backup attribute 
    this.setAttribute("backup_holder",this.getAttribute("placeholder"));
    // embty place holder attribute
    this.setAttribute("placeholder"," ");
    
}
myinput.onblur = function(){
     "use strict";
    //backup attribute 
    this.setAttribute("placeholder",this.getAttribute("backup_holder"));
    // embty place holder attribute
    this.setAttribute("backup_holder","");
}