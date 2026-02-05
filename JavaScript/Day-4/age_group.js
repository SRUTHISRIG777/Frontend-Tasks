var age=20;
var result=(age>=0 && age<=12)?"child":((age>=13 & age<=19)?"teen":(age>=20 && age<=64)?"adult":(age>=65)?"senior":"invalid")
console.log(result);