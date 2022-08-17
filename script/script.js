// use GET variables from URL
var parts = window.location.search.substr(1).split("&");

window.addEventListener("load",function(evt){
  const home = document.getElementsByClassName('home');
  const bookCheck = document.querySelector('.search-reserv');
  const prevButton = document.getElementById('change-prev');
  const nextButton = document.getElementById('change-next');
  const ham = document.getElementById('ham');
  ham.addEventListener("click",openHam);
  prevButton.addEventListener("click",changePic);
  nextButton.addEventListener("click",changePic);
});

function openHam(evt) {
	var nonhomes = document.querySelector('.container-nonhomes');
	let flag = Number(nonhomes.getAttribute('name'));
}

function changePic(evt) {
  const src = evt.srcElement;
  let flag = (src.id=="change-next");

  const scroll_banner = document.querySelector("banner-container");
  let current_slide = scroll_banner.classList[0];

  if(flag) {
    switch(current_slide){
      case 'first' : {
        scroll_banner.classList.remove("first");
        scroll_banner.classList.add("second");
        break;
      }
      case 'second' : {
        scroll_banner.classList.remove("second");
        scroll_banner.classList.add("third");
        break;
      }
      default : {
        scroll_banner.classList.remove("third");
        scroll_banner.classList.add("first");
        break;
      }
    }
  } else {
    switch(current_slide){
      case 'first' : {
        scroll_banner.classList.remove("first");
        scroll_banner.classList.add("third");
        break;
      }
      case 'second' : {
        scroll_banner.classList.remove("second");
        scroll_banner.classList.add("first");
        break;
      }
      default : {
        scroll_banner.classList.remove("third");
        scroll_banner.classList.add("second");
        break;
      }
    }
  }

}
