function HelloWorld(){
    this.hello=function(){
        var str = new String( "Hello, World!" );
        return str.length;
    }
}
module.exports=HelloWorld;