function LazyGuy(){}
LazyGuy.prototype.hey=function(inputString){
    var format=/^[@#$%^&*()_+\-=\[\]{};':"\\|<>\/]*$/;
    
    if(inputString=='' || inputString=='   '){
        return 'Fine. Be that way!';
    }

    if(inputString.endsWith("?")){
        return 'Sure.';
    } 
    if(isUpperCase(inputString) || inputString.includes("!") || inputString.match(format)){
        return 'Whoa, chill out!';
    }
    if(inputString.includes("?")){
        return 'Whatever.';
    }
    
    return 'Whatever.';

}
function isUpperCase(str) {
    str === str.toUpperCase();
    return str;
}
module.exports=LazyGuy;