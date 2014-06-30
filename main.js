var animals = ["rat", "cat", "butterfly", "marmot", "ocelot"];



// *** Problem #1
// for (var i = 0; i < animals.length-1; i++) {
// 	console.log(animals[i]);
// }


// *** Problem #2
// for (var i = 0; i < animals.length; i = i+2) {
// 	console.log(animals[i]);
// }


// *** Problem #3
// for (var i = animals.length-1; i > -1; i--) {
//   console.log(animals[i]);
// }


// Problem #4
for (var i = 0; i < animals.length; i++) {
	console.log(animals[i]);
	if (i !== 0 && i !== animals.length-1) {
		console.log(animals[i]);
	}
}





