function show(){
var now = new Date(),
    h = now.getHours(),
    m = now.getMinutes(),
    s = now.getSeconds();
if(h < 10)
    {
        h = "0"+h;
    }
if(m < 10)
    {
        m = "0"+m;
    }
if(s < 10)
    {
        s = "0"+s;
    }
document.getElementById("clock").textContent = h +":"+m+":"+s;
};

window.onload = function(){
    
    setInterval(show,1000);
}