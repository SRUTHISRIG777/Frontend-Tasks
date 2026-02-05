var temperature=40;
var result=(temperature>30)?"hot":((temperature>=20 && temperature<=30)?"warm":(temperature>=10 && temperature <=19)?"cool":"cold")
console.log(result);