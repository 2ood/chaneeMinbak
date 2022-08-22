const urlParams = new URLSearchParams(window.location.search);

let page_name = urlParams.get("page");
if(page_name) showContent(page_name);

window.addEventListener("load",function(evt){
  const logo = document.getElementById('logo');
  const bookCheck = document.querySelector('.search-reserv');
  const prevButton = document.getElementById('change-prev');
  const nextButton = document.getElementById('change-next');

  prevButton.addEventListener("click",changePic);
  nextButton.addEventListener("click",changePic);

  logo.addEventListener("click",(evt)=>{
    window.location.href="index.html";
  })

  const end_li_list = [].slice.call(document.querySelectorAll(".nested-ul > li"));
  end_li_list.forEach((li)=>{
    let path = li.getAttribute("path")
    bindFetchLink(li,path);
  });
});

function bindFetchLink(dom,path) {
  dom.addEventListener("click", async (evt)=>{
      showContent(path);
      window.history.replaceState('page2', 'details', `index.html?page=${path}`);
    });
}

async function showContent(path) {
  let json = await fetchPage(`html/${path}.html`);
  const content = document.querySelector("content");

  if(json.code ==200){
      content.innerHTML= json.body;
  } else {
      content.innerHTML = "<center><h2>There was an error in fetching page.</h2></center>";
  }

  let content_scrolltop = content.offsetTop;
  console.log(content_scrolltop);
  window.scroll({top : content_scrolltop, behavior : 'smooth' });
}

function fetchPage(pagePath){
    var xhr = new XMLHttpRequest();

  xhr.open('GET', pagePath, true);
  xhr.send();

  return new Promise(function(resolve,reject){
    xhr.onload = () => {
        if (xhr.status == 200) {
          resolve({
            code : 200,
            message : "page fetch success",
            body : xhr.response
          });
        } else {
            resolve( {
              code : xhr.status,
              message : "error in fetching page.",
              body : null
            });
        }
      }
  });

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
