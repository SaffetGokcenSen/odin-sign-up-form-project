/* 
used some of the information in the following link:
https://www.w3schools.com/howto/howto_js_password_validation.asp 
*/

let passwd = document.getElementById("passwd");
let passwd_confirm = document.getElementById("passwd_confirm");
let submit_button = document.getElementById("submit_button");

function checkMatch() {
    if (passwd.value !== passwd_confirm.value) {
        submit_button.disabled = true;
    }
    else {
        submit_button.disabled = false;
    }
}

passwd.addEventListener('keyup', checkMatch);
passwd_confirm.addEventListener('keyup', checkMatch);