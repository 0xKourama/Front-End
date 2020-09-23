var clist = ["class_one","class_two","class_three","class_four"],
    randomc = Math.floor((Math.random() * clist.length));

document.body.setAttribute("class",clist[randomc]);