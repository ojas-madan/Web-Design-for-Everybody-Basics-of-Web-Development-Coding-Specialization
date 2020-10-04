var fruits = ["Banana","Orange","Apple"];

function loadFruits(){

	document.getElementById("fruits").innerHTML = fruits;
}

function myFunction(){

	var ojas = prompt("What is your favorite fruit?");
	fruits[fruits.length] = ojas;

	document.getElementById("fruits").innerHTML = fruits;
}