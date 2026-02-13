var result=function (callback){
    console.log(callback(4));
}
result((a)=>a%2==0);