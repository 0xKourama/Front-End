//the default img
var img = document.getElementById("img");
//the model
var model = document.getElementById("model"),
    
    close = document.getElementById("close"),
    
    img_model =document.getElementById("img_model"),
    
    caption =document.getElementById("caption");

// on click on img what will happend.
img.onclick =function(){
    model.style.display = "block";
    imgmodel.src = img.src;
    caption.innerHTML =this.alt;
};
close.onclick =function(){
    model.style.display = "none";
}
document.onkeydown =function(key){
    if(key.keyCode == "27")
        {
          model.style.display = "none";  
        }
    
}