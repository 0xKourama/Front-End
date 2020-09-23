var i = 0;
var slideimg = ["img/1.jpg","img/2.jpg","img/3.jpg"];
var slideshow = function(){
    document.slideshow.src = slideimg[i];
    if( i <slideimg.length-1){
        i++;
       }
       else{
       i = 0;
       }
    setTimeout("slideshow()",2000);
};
slideshow();