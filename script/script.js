var welc = document.getElementsByClassName('welcome-box');

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
