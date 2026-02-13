function performTasks(n,fun1,fun2){
    n=fun1(n);
    n=fun2(n);
    //console.log(n);
    return n;

}
function fun1(n){
    return n+5;
}
function fun2(n){
    return n*2
}
console.log(performTasks(2,fun1,fun2));