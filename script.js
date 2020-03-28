// import {without} from 'lodash';
// console.log(without);
// var _ = require('lodash');
// console.log(_);

// array = [1,2,3,4,5,6,7,8];
// console.log('answer:', _.without(array,3));

var mycss = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var mybody = document.getElementById("gradient");
var my_rand_color = document.getElementById("rand_color")

mybody.style.background="linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
mycss.textContent = mybody.style.background + ";"; /*the first ";" is for the css*/


function setGradient() {
	mybody.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	mycss.textContent = mybody.style.background + ";";
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
   /*Math.floor() - round the number downwards
     Math.random() - give a random number between 0-1*/
}

function rand_rgb () { /*creating a 3-length array that will contain the rgb values*/
	my_rgb = new Array(3).fill(0);
	for (var i = 0; i < my_rgb.length ; i++) {
		my_rgb[i]=getRndInteger(0, 255);
	}

	return my_rgb;
}

function setRandomColors() {
	my_first_rgb=rand_rgb ();
	my_second_rgb=rand_rgb ();
	mybody.style.background = "linear-gradient(to right, " 
	+ "rgb("+ my_first_rgb[0] + "," + my_first_rgb[1] + "," + my_first_rgb[2] +")"
	 /*pretty complicated.. but that what i found on stuck overflow - 
	  Since rgb1, rgb2 and rgb3 are variables, append its value to the string*/
	+ ", " 
	+ "rgb("+ my_second_rgb[0] + "," + my_second_rgb[1] + "," + my_second_rgb[2] +")";
	mycss.textContent = mybody.style.background + ";";

  // return "rgb("+ rgb1 + "," +  rgb2 + "," + rgb3 +")";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

my_rand_color.addEventListener("click", setRandomColors); 
