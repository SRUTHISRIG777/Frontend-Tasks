function checkEven(n,even,odd){
    if(n%2==0){
        even(n);
    }
    else{
        odd(n);
    }
}
function even(n){
    console.log("it is even number");
}
function odd(){
    console.log("it is odd number");
}

checkEven(4,even,odd);
