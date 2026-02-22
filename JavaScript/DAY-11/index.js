// function sum(val,callback){
//     callback(val+10);
//     sub(20,(a)=>{console.log(a)});

    
// }
// sum(20,(a)=>{console.log(a)});
// function sub(val,callback){
//     callback(val-10);
//     mul(20,(a)=>{console.log(a)})
    
// }
// //sub(20,(a)=>{console.log(a)});
// function mul(val,callback){
//     callback(val*10);

    
// }
// //mul(20,(a)=>{console.log(a)});


console.log("hello");
setTimeout(()=>{
    console.log("first call");
},5000);
for(var i=0;i<50000;i++){
    console.log(i);
}
setTimeout(()=>{
    console.log("second call");
},3000);

