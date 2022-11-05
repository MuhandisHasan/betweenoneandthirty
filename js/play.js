const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const card = document.querySelector('#card');
const square = document.querySelector('#square');


var numbers = [[17,15,5,3,27,1,29,11,7,13,9,25,19,23,21],
				   [15,22,24,30,28,11,19,17,15,11,26,13,30,22,17],
				   [25,20,23,14,29,25,16,27,12,18,21,14,29,12,27],
				   [23,12,22,21,13,1,11,23,21,22,3,12,2,21,13],
				   [26,16,6,14,15,5,24,25,6,4,16,25,24,15,4],
				   [9,23,19,20,6,30,16,9,26,10,13,29,6,19,3]];

var answers = [];

var result;

function countResult(answers)
{

	var result = 0;

	// Ganjil or Genap;

	if (answers[0] == 1) {

		numGG = 'ganjil';

	}else if (answers[0] == 0) {

		numGG = 'genap';

	}

	// 20+ or 10+

	// Second Card
	if (answers[1] == 1 && numGG == 'ganjil') {

		result = result + 10;

	}else if(answers[1] == 1 && numGG == 'genap')
	{

		result = result + 20;

	}
	// Third Card
	if (answers[2] == 1 && numGG == 'ganjil') {

		result = result + 20;

	}else if(answers[2] == 1 && numGG == 'genap')
	{

		result = result +10;

	}

	// Check 1-3 11-13 21-23

	if (answers[3] == 1 && numGG == 'ganjil') {

		result = result + 1;

	}else if(answers[3] == 1 && numGG == 'genap')
	{

		result = result + 2;

	}

	// Check 4-6 14-16 24-26

	if (answers[4] == 1 && numGG == 'ganjil') {

		result = result + 5;

	}else if(answers[4] == 1 && numGG == 'genap')
	{

		result = result + 4;

	}

	// Check 7-10 17-20 27-30

	if ( answers[3] == 0 && answers[4] == 0 && numGG == 'ganjil' ) {

		result = result + 7;

	}else if( answers[3] == 0 && answers[4] == 0 && numGG == 'genap' )
	{

		result = result + 8;

	}


	// Check Exception

	if ( answers[5] == 1 ) {

		result = result +2;

	}


	// Final Result

	return result;

}


function changeNumber(currentCards)
{

	console.log("Masuk function");


	var i = 0;

	var nString = '';

	if (currentCards < 6) {

		while ( i < numbers[currentCards].length )
		{

			nString += '<h4 class="bg-number text-light number">'+numbers[currentCards][i]+'</h4>';

			i++;

		}

		currentCards++;

		cCard = currentCards;

		card.innerHTML = nString;

		return cCard;

		return nString;
			
	}else{

		result = countResult(answers);

		nString = '<h4 class="popb">Your number is '+result+'</h4>\
		<p class="pop">If the number isn\'t correct you might answered the questions wrong</p>\
		<a href="index.html" class="btn btn-success py-3 px-4 m-1 popb text-decoration-none">Play Again</a>';

		square.innerHTML = nString;

	}

	


}

var cCard = 0;

changeNumber(cCard);


function answered(answer)
{

	answers.push(answer);

	changeNumber(cCard);

}

yes.addEventListener('click',function(e){

	answered(1);

});

no.addEventListener('click',function(e){

	answered(0);

});
