// use GET variables from URL
var parts = window.location.search.substr(1).split("&");
var $_GET = {};
for (var i = 0; i < parts.length; i++) {
    var temp = parts[i].split("=");
    $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
}

// make variables from html components
const home = document.getElementsByClassName('home');
const bookCheck = document.querySelector('.search-reserv');
const prevButton = document.querySelector('.change-prev');
const nextButton = document.querySelector('.change-next');

//assign onclick function
//bookCheck.onclick = checkBook(true);
//prevButton.setAttribute("onclick", "changePic()");
//nextButton.onclick = changePic();

function fetchPage(name){
    fetch(name).then(function(response){
      response.text().then(function(text){
        document.querySelector('.content').innerHTML = text;
      })
    });
  }

function fetchImage(div, name) {
	fetch(name).then(function(response){
      response.text().then(function(text){
        document.querySelector(div).backgroundImage=text;
      })
    });
  }

function checkBook(flag) {
	if(($_GET['trip-start']!=null) || ($_GET['trip-stop']!=null) )
		fetchPage('html/book.html');
else ;	
}



function changePic(flag) {
	var welc = document.querySelector('.welcome-box');
	function backImage(num) {
	var backImages= [
		"noon-dong-i.jpg",
		"diningRoom1.jpg",
		"diningRoom2.jpg"
	];
	return "url('/military-service/chaneeMinbak/img/"+backImages[num]+"')";
}
	let s =Number(welc.getAttribute('name'));
	console.log(s);
	let index;
	switch (s) {
		default : {index=1;break;} 
		case 1 : {index=2; break;} 
		case 2 : {index=0; break;} 
	}
	welc.style.backgroundImage= backImage(index);
	welc.setAttribute('name',index);
}



