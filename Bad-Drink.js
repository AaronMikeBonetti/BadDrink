

//Header Color Change::::::::::::::

var colors = [
   "rgb(255, 255, 0)",
	"#00ff00",
	"#004eff",
	"rgb(255, 69, 0)",
	"#00fff5"
  ];



var drinkHead = document.querySelector('#quiz-header');
var index = 0;
var iterations = 0;

var changeColor = function () {
	if (index >= colors.length) {
		index = 0;
		iterations++;
	}
	drinkHead.style.color = colors[index];
	//	stem.style.backgroundColor = colors[index];
	if (iterations >= colors.length) {
		iterations = 0;
		clearInterval(setInterval);
	} else {
		index++;
	}
}
setInterval(changeColor, 1000);

//Drink Quiz:::::::::::::::::

let question = document.getElementById("question");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let drink = document.getElementById("displayed-drink")
drink.classList.add("hidden")
let container = document.querySelector(".quiz-container");

let drinkName = document.getElementById("drink-name")

let ing1 = document.getElementById("ing-1");
let ing2 = document.getElementById("ing-2");
let ing3 = document.getElementById("ing-3");
let ing4 = document.getElementById("ing-4");
let ing5 = document.getElementById("ing-5");

let drinkImg = document.getElementById("drink-img")

let reset = document.getElementById("reset")



let options = [1,2,3,4]

let answers = []

let questionCount = 0


function question2() {
	question.innerHTML = "How You Doing?"
	option1.innerHTML = "Tired" + "<img src='imgs/Icons/sleepface.png'>";
	option2.innerHTML = "Wired" + "<img src='imgs/Icons/wiredface.png'>"
	option3.innerHTML = "Fired" + "<img src='imgs/Icons/fireface.png'>"
	option4.innerHTML = "Desired" + "<img src='/imgs/Icons/disredface.png'>"
}

function question3() {
	question.innerHTML = "Are You a Bad Person?"
	option1.innerHTML = "Yes" + "<br>" + "<i class='far fa-thumbs-up'></i>" + "<br>" + "But in Green";
	option2.innerHTML ="Yes" + "<br>" + "<i class='far fa-thumbs-up'></i>" + "<br>" + "But in Blue";
	option3.innerHTML = "Yes" + "<br>" + "<i class='far fa-thumbs-up'></i>" + "<br>" + "But in Orange";
	option4.innerHTML = "Yes" + "<br>" + "<i class='far fa-thumbs-up'></i>" + "<br>" + "But in Yellow";
}

function question4() {

	question.innerHTML = "Favoite Color"
	option1.innerHTML = "Red" + "<br>" + "<i class='fas fa-bomb'></i>" ;
	option2.innerHTML = "Sarcoline" +  "<br>" + "<i class='fas fa-carrot'></i>"
	option3.innerHTML = "Green" + "<br>" + "<i class='fas fa-baby-carriage'></i>"
	option4.innerHTML = "Smaragdine" + "<br>" + "<i class='fas fa-hippo'></i>"
}

function question5() {
	question.innerHTML = "Favorite Activity?"
	option1.innerHTML = "Yelling" + "<br>" + "<i class='fas fa-bullhorn'></i>"
	option2.innerHTML = "Chemistry" + "<br>" + "<i class='fas fa-bong'></i>"
	option3.innerHTML = "Cat-Watching" + "<br>" + "<i class='fas fa-cat'></i>"
	option4.innerHTML = "Losing Money" + "<br>" + "<i class='fab fa-btc'></i>"
}


function transition() {
	container.classList.add("trasition");
	setTimeout(function () {		container.classList.remove("trasition");
	}, 800);
	
}


let addOption = function (option) {
	answers.push(option);
	console.log(answers)
	transition()
	
}

let option1Clicked = option1.addEventListener('click', function () {
	addOption(options[0])
	questionCount++
	numQuestion(questionCount)

});

let option2Clicked = option2.addEventListener('click', function () {
	addOption(options[1])
	questionCount++
	numQuestion(questionCount)
});

let option3Clicked = option3.addEventListener('click', function () {
	addOption(options[2])
	questionCount++
	numQuestion(questionCount)
});

let option4Clicked = option4.addEventListener('click', function () {
	addOption(options[3])
	questionCount++
	numQuestion(questionCount)
});

function numQuestion() {
	if (questionCount <= 1) {
		question2()
	}
	if (questionCount >= 2) {
		question3()
	}
	if (questionCount >= 3) {
		question4()
	}

	if (questionCount >= 4) {
		question5();
	}
	if (questionCount >= 5) {
		compareAnswers()
	}
}
function drink1(){
	drinkName.innerHTML= "Hawaiian Feet Punch";
	ing1.innerHTML = "1 Gallon of Water - perferably bath water-" ;
	ing2.innerHTML = "2Ibs Forest Garbage" ;
	ing3.innerHTML = "Gram Gram's feet -soak 9 hours-" ;
	ing4.innerHTML = "Magma -not to be confused with lava-" ;
	ing5.innerHTML = "Optional: Sacrifice a human child to the Ku! " ;
	drinkImg.src= "/imgs/feet.jpg";
	
}
function drink2(){
	drinkName.innerHTML= "Dried Up Old Mit";
	ing1.innerHTML = "One part lost childhood" ;
	ing2.innerHTML = "5oz of hand sweat" ;
	ing3.innerHTML = "2.5 lbs of Big League Chew " ;
	ing4.innerHTML = "Have the sweat come to a boil, smack the bottom of the pot and say 'Good Game!' before inserting the mit" ;
	ing5.innerHTML = "Optional: Tell the Mit 'Thata boy, or nice catch!, while boiling" ;
	drinkImg.src= "imgs/old-mit.jpg";
}
function drink3(){
	drinkName.innerHTML= "Swamp Moss Cocktail";
	ing1.innerHTML = "15 lbs Live Aligator - perferably angry" ;
	ing2.innerHTML = "10 gallons Pabst" ;
	ing3.innerHTML = "1 swamp monster - Scooby Doo approved " ;
	ing4.innerHTML = "Picture of a 1987 Ford Ranger" ;
	ing5.innerHTML = "Canned Fog with Mosquitos" ;
	drinkImg.src= "imgs/swamp.jpg";
}
function drink4(){
	drinkName.innerHTML= "Game of Life with the Family";
	ing1.innerHTML = "1 tiny wobbly tabel" ;
	ing2.innerHTML = "2 disapointed parents" ;
	ing3.innerHTML = "1 slobbery dog with an appitite for plastic" ;
	ing4.innerHTML = "3 to 4 awkward conversations" ;
	ing5.innerHTML = "1 game board with missing peices" ;
	drinkImg.src= "imgs/life-game.jpg";
}



function compareAnswers(){
drink.classList.add("transition");
drink.classList.remove("hidden");
drink.classList.add("visible");
const total = (num, sum) => num + sum;

let newTotal= answers.reduce(total)
console.log(newTotal)

	if(newTotal <= 7){
		drink1()
	}
	if(newTotal >= 8 && newTotal <= 13){	
		drink2()
	}	
	if(newTotal >= 14 && newTotal <= 18){
		drink3()
	}	
	if(newTotal >= 19){
		drink4()
	}	

}

reset.addEventListener("click", function(){
	location.reload();
})

