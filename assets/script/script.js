var nav = document.getElementById("navigation")
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

function sendEmail(){
    Email.send({
        Host:"smtp.elasticemail.com",
        Username:"sadgr32@mail.com",
        Password:"FE613305A41A062DEE2EAE9C131C130C501B",
        To:"sadgr32@mail.com",
        From:document.getElementById("email").value,
        Subject:document.getElementById("subject").value,
        Body:document.getElementById("body").value
    }).then(message => alert(Mesage Send));
}
