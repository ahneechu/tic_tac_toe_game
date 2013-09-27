// function navCells(){
// 	alert( "nav cells got clicked!"
// 		);

var gameBoard = ['','','','','','','','',''];
var turn = 'X';



// for(i=1;i<=9;++i)
// {
// 		document.getElementById("box"+i).innerHTML
// 		// onclick=
// 		// function(){
// 		// 	alert("you clicked me!");
// 		// };
// }


var wins=[[0, 1, 2],
		  [3, 4, 5],
		  [6, 7, 8],
		  [0, 3, 6],
		  [1, 4, 7],
		  [2, 5, 8],
		  [0, 4, 8],
		  [2, 4, 6]
		  ]

// }

function buttonClick(){
		alert( "my button was clicked!"
			);

}


function playGame() {
	var box = event.target.id; 
	var ind = box.substring(3) - 1;

	if( gameBoard[ind] == '' ) {

		if (turn == 'X') {
			fillArray('X')
			event.target.innerHTML = 'X';
			turn = 'O';
		} else {
			fillArray('O')
			event.target.innerHTML = 'O';
			turn = 'X';
		}
	} else {
		alert("Pick another box!" + ind);
	}

}

function fillArray(player) {
	var box = event.target.id;
	var ind = box.substring(3) - 1;
	gameBoard[ind] = player;
}


