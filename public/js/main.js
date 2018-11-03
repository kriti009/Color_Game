var box=6;
var colors = generateRandomColor(box);


var goal = document.querySelector("#goal");

var square = document.querySelectorAll(".square");
var header = document.querySelector("header");
var comment = document.querySelector("#comment");
var qoute = document.querySelector("#qoute");

var resetButton = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");


var match = pickColor();
goal.textContent = match;

main();

function main(){
	setUpModeBtn();
	setUpSquareColor();
	reset();
}

resetButton.addEventListener("click", function(){
	reset();
});

function setUpSquareColor(){
	for(var i=0; i<square.length; i++ ){
		//add color
		square[i].style.backgroundColor = colors[i];
		//add events
		square[i].addEventListener("click", function(){
		var pickedColor = this.style.backgroundColor;
		if(pickedColor!==match){
			this.style.backgroundColor = "#232323";
			qoute.style.color = "steelblue";
			qoute.textContent = "TRY AGAIN!!"; 
			
		}
		else{		
			header.style.backgroundColor = match;
			qoute.style.color = "steelblue";
			qoute.textContent = "Correct!";
			
			changeColor();
			resetButton.textContent = "PLAY AGAIN?";
		}
		});
	};
}

function setUpModeBtn(){
	for(var i=0; i<mode.length; i++){
		mode[i].addEventListener("click", function(){
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			this.classList.add("selected"); 
			if(this.textContent==="EASY"){
				box=3;
			}
			else{
				box=6;
			}
			reset();

		});
	};	
}

function changeColor(){
	for(var i=0; i<box; i++){
		square[i].style.backgroundColor = match;
	};
};

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColor(num){
	//make an array
	var arr = [];
	//add random color
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	//return array
	return arr;
};

function randomColor(){
	//pick red from 0 -255
	var r = Math.floor(Math.random() * 256);
	//pick green from 0 -255
	var g = Math.floor(Math.random() * 256);
	//pick blue from 0 -255
	var b = Math.floor(Math.random() * 256);
	//return rgb;
	return "rgb(" + r + ", " + g +", " + b +")"; 
};

function reset(){
	colors = generateRandomColor(box);
	match = pickColor();
	qoute.textContent = "";
	header.style.backgroundColor = "steelblue";
	goal.textContent = match;
	
	for(var i=0; i<square.length; i++){
		if(colors[i]){
			square[i].style.backgroundColor = colors[i];
			square[i].style.display = "block";
		}
			
		else
			square[i].style.display = "none";
	};
	resetButton.textContent = "NEW COLORS";
};