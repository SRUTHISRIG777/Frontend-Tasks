var result=function (callback){
    console.log(callback("sruthisribyf","priyanka"))
}
result((a,b)=>{
    if(a.length>b.length){
        return a;
    }
    else if(b.length>a.length){
        return b;
    }
    else{
        return "equal";
    }
})