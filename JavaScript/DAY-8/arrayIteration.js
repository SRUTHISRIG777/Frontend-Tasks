function forEachElement(arr,callback){
    var n;
    for(i=0;i<arr.length;i++){
        callback(arr[i]);


    }
}
function result(n){
    console.log(n);
}
var arr=[1,2,3,4,5,6];
forEachElement(arr,result);