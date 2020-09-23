// METHOD_1 ; window.location.hash
if(window.location.hash)
{
        var hash = window.location.hash.substring(1);
    if(hash === "yasser")
        {
            console.log("Good There aren a Hash");
        }
    else
    {
        console.log("Bad There aren't a Hash");
    }       
}
