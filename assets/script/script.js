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

const contact_form = document.getElementById("contact-form");

const clickSubmit = contact_form.addEventListener("submit", (event) => {
    event.preventDefault();
    var mail = new FormData(contact_form);
    sendMail(mail);
});

const sendMail = (mail) =>{
    fetch("/send",{
        method:"post",
        body:mail,
    }).then((response) => {
        return response.json();
    });
}
