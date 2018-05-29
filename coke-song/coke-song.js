function CokeSong(){}
CokeSong.prototype.verse=function(input){
    if(input==0){
        var string='No more cans of coke in the box, no more cans of coke.\nGo to the store and buy some more, 99 cans of coke in the box.\n';
        return string;
    }
    if(input==1){
        var stringInput='1 can of coke in the box, 1 can of coke.\nTake it down and pass it around, no more cans of coke in the box.\n';
        return stringInput;
    }
    var str = input+' cans of coke in the box, '+input+' cans of coke.\nTake one down and pass it around, '+(input-1)+' cans of coke in the box.\n';
    return str;



}
CokeSong.prototype.sing=function(input1,input2){
    
    if(input1!=undefined && input2!=undefined){
    var str=input1+' cans of coke in the box, '+input1+' cans of coke.\nTake one down and pass it around, '+(input1-1)+' cans of coke in the box.\n\n'+(input1-1)+' cans of coke in the box, '+(input1-1)+' cans of coke.\nTake one down and pass it around, 6 cans of coke in the box.\n\n'+input2+' cans of coke in the box, '+input2+' cans of coke.\nTake one down and pass it around, '+(input2-1)+' cans of coke in the box.\n';
    return str;
}
    else if (input1!=undefined){
        var sing=input1+' cans of coke in the box, '+input1+' cans of coke.\nTake one down and pass it around, '+(input1-1)+' cans of coke in the box.\n\n'+(input1-1)+' cans of coke in the box, '+(input1-1)+' cans of coke.\nTake one down and pass it around, '+(input1-2)+' can of coke in the box.\n\n1 can of coke in the box, '+(input1-2)+' can of coke.\nTake it down and pass it around, no more cans of coke in the box.\n\nNo more cans of coke in the box, no more cans of coke.\nGo to the store and buy some more, 99 cans of coke in the box.\n';
        return sing;
    }
    else if (input1==undefined && input2==undefined){
        var sing='full song';
        return sing;
    }
    
}


module.exports=CokeSong;