"use strict"

/* 
used some of the information in the following link:
https://www.w3schools.com/howto/howto_js_password_validation.asp 
*/

let passwd = document.getElementById("passwd");
let passwd_confirm = document.getElementById("passwd_confirm");
let submit_button = document.getElementById("submit_button");
let passwd_warning = document.getElementById("passwd-warning");

function checkMatch() {
    if (passwd.value !== passwd_confirm.value) {
        submit_button.disabled = true;
        submit_button.classList.remove("active-button");
        submit_button.classList.add("disabled-button");
        passwd_warning.classList.add("warning");
        passwd.classList.add("red-border");
        passwd_confirm.classList.add("red-border");
    }
    else {
        submit_button.disabled = false;
        submit_button.classList.remove("disabled-button");
        submit_button.classList.add("active-button");
        passwd_warning.classList.remove("warning");
        passwd.classList.remove("red-border");
        passwd_confirm.classList.remove("red-border");
    }
}

passwd.addEventListener('keyup', checkMatch);
passwd_confirm.addEventListener('keyup', checkMatch);