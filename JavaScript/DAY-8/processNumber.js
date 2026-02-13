function processNumber(num,callback){
    num=num*num;
    console.log(callback(num));
}
function result(num){
    return num;
}
processNumber(6,result);