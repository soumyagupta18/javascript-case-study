function HelloWorld(){
    this.hello=function(){
        var str = new String( "Hello, World!" );
        var char=str.length;
        return char;
    }
}
module.exports=HelloWorld;