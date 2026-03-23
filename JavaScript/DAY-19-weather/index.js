function getData(){
    let input=document.getElementById("input");
    //console.log(input.value);
    getTemp(input.value);
}

async function getTemp(value){
   const url = `https://open-weather13.p.rapidapi.com/city?city=${value}&lang=EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4b6cb23dbcmsha5a28e230cf7f48p18b89fjsna1acdd1db882',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	//console.log(result);
    display(result.main.temp);
} catch (error) {
	console.error(error);
}
}
function display(obj){
   
    
    let value = document.getElementById("temp");
    value.innerHTML = obj + " °C";
}
