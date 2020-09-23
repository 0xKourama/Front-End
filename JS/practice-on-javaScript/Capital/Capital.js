var s = prompt("please enter the string");

function capitalizeletters(s)
{
    var oldarray = s.split(" "),
        newarray = [];
    
for(i =0 ; i< oldarray.length;i++)
    {
        newarray.push(oldarray[i].charAt(0).toLocaleUpperCase() + oldarray[i].slice(1));
    }
    return newarray.join(" ");
}
alert(capitalizeletters(s));