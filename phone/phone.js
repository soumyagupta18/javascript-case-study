function PhoneNumber(number){
    this.number=function(){  
     return removeSpecialCharacters(number);
        
    }
}
function removeSpecialCharacters(number)
{
 
 actualNumber=number.replace(/[-\s()&\/\\#,+$~%.'":*?<>{}]/g,"");
    if(actualNumber.toString().length<=9 && actualNumber.toString().length>=11){
        return null;
    }
 return actualNumber;
}


module.exports=PhoneNumber;