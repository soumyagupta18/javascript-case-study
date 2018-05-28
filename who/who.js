function Who(){
    // this.name=function(name){
    //     if(name==undefined){
    //         return "One for you, one for me."
    //     }
       
    //     return "One for "+name+", one for me."
    // }
}
Who.prototype.name=function(name){
           if(name==undefined){
            return "One for you, one for me."
        }
       
        return "One for "+name+", one for me."
    }



module.exports=Who;