function navCells(){
	alert( "nav cells got clicked!"
		);


for(i=1;i<=9;++i)
{
		document.getElementById("box"+i).onclick=
		function(){
			alert("you clicked me!");
		};
}


}

function buttonClick(){
		alert( "my button was clicked!"
			);

}