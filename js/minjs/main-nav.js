var button=document.querySelector(".burger"),menu=document.querySelector(".main-nav");button.addEventListener("click",function(e){e.preventDefault(),menu.classList.toggle("main-nav--opened")}),menu.classList.remove("main-nav--nojs");