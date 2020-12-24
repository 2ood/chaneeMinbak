// use GET variables from URL
var parts = window.location.search.substr(1).split("&");
var $_GET = {};
for (var i = 0; i < parts.length; i++) {
    var temp = parts[i].split("=");
    $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
}

// make variables from html components
const welc = document.getElementsByClassName('welcome-box');
const welcPicNum = 2;
const home = document.getElementsByClassName('home');
const bookCheck = document.querySelector('.search-reserv');
const prevButton = document.querySelector('.change-prev');
const nextButton = document.querySelector('.change-next');

//assign onclick function
bookCheck.onclick = checkBook();
prevButton.setAttribute("onclick", "changePic()");
nextButton.onclick = changePic();

var bgArr = [
  "img/diningRoom1.jpg",
  "img/diningRoom2.jpg",
];


function changePic() {
	console.log("Hello");
	let s = document.body.style.backgroundImage;
	if(s===bgArr[0]) document.body.style.backgroundImage=bgArr[1];
	else document.body.style.backgroundImage=bgArr[0];
}

function fetchPage(name){
    fetch(name).then(function(response){
      response.text().then(function(text){
        document.querySelector('.content').innerHTML = text;
      })
    });
  }

function checkBook() {
	if(($_GET['trip-start']!=null) || ($_GET['trip-stop']!=null) )
		fetchPage('html/book.html');
else ;	
}

