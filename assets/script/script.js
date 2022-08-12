const nav = document.getElementById("navigation")
window.onscroll = function (){
    "use strict";
    if(document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200){
        nav.classList.add("nav-visible");
        nav.classList.remove("nav-invisible");
    }else{
        nav.classList.add("nav-invisible");
        nav.classList.remove("nav-visible");
    }
}


