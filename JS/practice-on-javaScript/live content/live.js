var title = document.getElementById("title"),
    
    content = document.getElementById("content"),
    
    title_live = document.getElementById("title_live"),
    
    content_live = document.getElementById("content_live");

title.onkeyup = function(){
    
    title_live.textContent = this.value;
    
};
content.onkeyup = function(){
    
    content_live.textContent = this.value;
    
};
    