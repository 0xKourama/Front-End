
function serialCreate() {
      'use strict';
      
  var serialList = "123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
    
    serialLength = 8,
    
    randomSerial = "";
  
  
      for(var x = 0; x < serialLength; x++){
        var randomNum = Math.floor(Math.random() * serialList.length);
        
         randomSerial += serialList.substring(randomNum, randomNum + 1);
      }
      
      document.getElementById("serial").innerHTML = randomSerial
      
    }