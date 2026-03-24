// function getInput1(){
//     let input=document.getElementById("currency");
//     let currency=input.ariaValueMax;
    
// }
function from(){
     let input=document.getElementById("currency");
    let currency=input.value;
    let input1=document.getElementById("from");
    let from=input1.value;
   let input2=document.getElementById("to");
    let to=input2.value;
    convert(from,to,currency)


}
async function convert(input1,input2,currency){
    const url = `https://currency-converter18.p.rapidapi.com/api/v1/convert?from=${input1}&to=${input2}&amount=${currency}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4b6cb23dbcmsha5a28e230cf7f48p18b89fjsna1acdd1db882',
		'x-rapidapi-host': 'currency-converter18.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	//console.log(result.result.convertedAmount);
    display(result.result.convertedAmount)
} catch (error) {
	console.error(error);
}

}
function display(obj){
    let value=document.getElementById("result");
    value.innerHTML=obj;
}
//convert("USD","INR",100);
