function convertTemperature(temp,scale){
    scale=scale.toLowerCase();
    if(scale=="f"){
        return (temp-32)*(5/9);
    }
    else if(scale=="c"){
        return (temp*(9/5))+32;
    }
    else{
        return "please enter valid scale";
    }
}
console.log(convertTemperature(45,"C"))