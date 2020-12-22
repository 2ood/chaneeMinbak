var parts = window.location.search.substr(1).split("&");
var $_GET = {};
for (var i = 0; i < parts.length; i++) {
    var temp = parts[i].split("=");
    $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
}

var welc = document.getElementsByClassName('welcome-box');
var home = document.getElementsByClassName('home');
function newCont(th) {
	console.log('clicked body');
	var cont = document.getElementsByClassName('content');
	var url  = '/html/'+th+'.html';
	cont.innerHTML=url;
}

function changePic() {
	
}

function fetchPage(name){
    fetch(name).then(function(response){
      response.text().then(function(text){
        document.querySelector('.content').innerHTML = text;
      })
    });
  }

const button = document.querySelector('.search-reserv');
button.onclick = checkBook();

function checkBook() {
	if(($_GET['trip-start']!=null) || ($_GET['trip-stop']!=null) )
		fetchPage('html/book.html');
else ;	
}

