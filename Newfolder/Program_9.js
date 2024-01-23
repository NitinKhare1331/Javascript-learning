/*Program to Convert Km/hr to miles/hr and vice versa? */

function kmphTOmph(kmph) 
{ 
	return (0.6214 * kmph); 
} 
	
function mphTOkmph(mph) 
{ 
	return (1.60934 * mph) ; 
} 

console.log(kmphTOmph(150));
console.log(mphTOkmph(100));