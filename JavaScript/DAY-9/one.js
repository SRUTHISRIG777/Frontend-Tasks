function sum(callback){
    console.log(callback(10,20));
}
sum((a,b)=> a+b);