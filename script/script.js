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
const hamburger = document.querySelector('.hamburger');

//assign onclick function
bookCheck.onclick = checkBook(true);
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

function openHam() {
	console.log('openham');
	var nonhomes = document.querySelector('.container-nonhomes');
	let flag = Number(nonhomes.getAttribute('name'));
	console.log(flag);
	if (flag===0) { nonhomes.setAttribute('style','display:inline-block;'); nonhomes.setAttribute('name',1); }
	else {nonhomes.setAttribute('style','display:none;');nonhomes.setAttribute('name',0); }
}
function changePic(flag) {
	var welcbackg = document.querySelectorAll('.welcome-box img');
	var welc = document.querySelector('.welcome-box');
	console.log('clicked'+flag);
	
	let status =Number(welc.getAttribute('name'));
	//console.log(s);
	let index;
	let len= welcbackg.length;
	if(flag) {
		if(len===status+1) index=0;
		else index = status+1;
	}
	else {
		if(status===0) index=len-1;
		else index = status-1;
	}
	
	let j=0;
	for(; j<len ;  j++) {
		if (j===index) welcbackg[j].setAttribute('style',"display:inline;");
		else welcbackg[j].setAttribute('style',"display:none;");
	}
	welc.setAttribute('name',index);
	
}



$(window).scroll(function() {
	var btn = $('#to-the-top');
  if ($(window).scrollTop() > 3) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



